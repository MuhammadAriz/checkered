'use client';

import React, { useState, useCallback, useEffect } from 'react';
import { RefreshCw, Undo } from 'lucide-react';
import BoardSquare from './BoardSquare';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import type { Board, Position, Move, GameState, Player } from '@/types/checkers';
import {
    initializeBoard,
    getPossibleMoves,
    applyMove,
    checkWinner,
    BOARD_SIZE,
    mustCapture,
    canContinueCapture,
    getCaptureMoves
} from '@/lib/checkersLogic';
import { cn } from '@/lib/utils';

const initialGameState: GameState = {
  board: initializeBoard(),
  currentPlayer: 'light',
  selectedPiece: null,
  possibleMoves: [],
  winner: null,
  isMultiCapture: false,
  mustCapturePiece: null,
};

const CheckersBoard: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>(initialGameState);
  const [history, setHistory] = useState<GameState[]>([]); // For undo functionality

   // Reset game to initial state
   const resetGame = useCallback(() => {
       setGameState(initialGameState);
       setHistory([]);
   }, []);

  // Save current state to history
   const saveHistory = useCallback((state: GameState) => {
       setHistory(prev => [...prev, state]);
   }, []);

   // Undo the last move
   const undoMove = useCallback(() => {
       setHistory(prev => {
           const lastState = prev.slice(0, -1); // Get all but the last state
           const newState = lastState[lastState.length - 1] || initialGameState;
           setGameState(newState); // Restore the previous state
           return lastState;
       });
   }, []);


  const handlePieceClick = useCallback((pos: Position) => {
      const { board, currentPlayer, selectedPiece, isMultiCapture, mustCapturePiece } = gameState;
      const piece = board[pos.row][pos.col];

      // If in multi-capture mode, only the designated piece can be selected/moved
      if (isMultiCapture && mustCapturePiece && (pos.row !== mustCapturePiece.row || pos.col !== mustCapturePiece.col)) {
          return;
      }

      // Only allow clicking own pieces
      if (!piece || piece.player !== currentPlayer) {
        setGameState(prev => ({ ...prev, selectedPiece: null, possibleMoves: [] }));
        return;
      }

      // Check if a capture is mandatory
      const captureIsMandatory = mustCapture(board, currentPlayer);
      const availableMoves = getPossibleMoves(board, pos, currentPlayer);

      // Filter moves: if capture is mandatory, only allow capture moves
      const validMoves = captureIsMandatory
          ? availableMoves.filter(move => move.captured)
          : availableMoves;

      // If clicking the same piece, deselect it (unless in multi-capture)
      if (!isMultiCapture && selectedPiece && selectedPiece.row === pos.row && selectedPiece.col === pos.col) {
          setGameState(prev => ({ ...prev, selectedPiece: null, possibleMoves: [] }));
      } else if (validMoves.length > 0) {
           // If not mandatory capture, or if this piece has capture moves when mandatory
          if (!captureIsMandatory || validMoves.some(m => m.from.row === pos.row && m.from.col === pos.col)) {
              setGameState(prev => ({
                  ...prev,
                  selectedPiece: pos,
                  possibleMoves: validMoves.filter(m => m.from.row === pos.row && m.from.col === pos.col) // Only show moves for this piece
              }));
          } else {
             // Capture is mandatory, but this piece has no capture moves
             setGameState(prev => ({ ...prev, selectedPiece: null, possibleMoves: [] }));
          }
      } else {
         // No valid moves for this piece
         setGameState(prev => ({ ...prev, selectedPiece: null, possibleMoves: [] }));
      }

  }, [gameState]);

   const handleSquareClick = useCallback((pos: Position) => {
       const { selectedPiece, possibleMoves, board, currentPlayer, isMultiCapture } = gameState;

       if (!selectedPiece) return; // No piece selected

       const move = possibleMoves.find(m => m.to.row === pos.row && m.to.col === pos.col);

       if (move) {
           saveHistory(gameState); // Save state before making the move

           const newBoard = applyMove(board, move);
           const wasCapture = !!move.captured;
           let nextPlayer = currentPlayer === 'light' ? 'dark' : 'light';
           let continueCapture = false;
           let nextMustCapturePiece = null;

           // Check for multi-capture possibility
           if (wasCapture && canContinueCapture(newBoard, move.to, currentPlayer)) {
               // Check if the *same player* MUST capture again from the new position
               const furtherCaptures = getCaptureMoves(newBoard, currentPlayer).filter(m => m.from.row === move.to.row && m.from.col === move.to.col);
               if (furtherCaptures.length > 0) {
                  nextPlayer = currentPlayer; // Same player's turn again
                  continueCapture = true;
                  nextMustCapturePiece = move.to; // This piece must continue the capture
               }
           }

           const winner = checkWinner(newBoard, nextPlayer);

           setGameState({
               board: newBoard,
               currentPlayer: nextPlayer,
               selectedPiece: continueCapture ? move.to : null, // Keep piece selected if multi-capture continues
               possibleMoves: continueCapture ? getPossibleMoves(newBoard, move.to, currentPlayer).filter(m => m.captured) : [], // Only show capture moves if continuing
               winner: winner,
               isMultiCapture: continueCapture,
               mustCapturePiece: nextMustCapturePiece,
           });

       } else {
            // Clicked on an invalid square, deselect if not in multi-capture
            if (!isMultiCapture) {
               setGameState(prev => ({ ...prev, selectedPiece: null, possibleMoves: [] }));
            }
       }
   }, [gameState, saveHistory]);


  useEffect(() => {
    // Pre-calculate mandatory captures for the current player when their turn starts
    if (!gameState.isMultiCapture && !gameState.winner) {
        const captureIsMandatory = mustCapture(gameState.board, gameState.currentPlayer);
        if (captureIsMandatory) {
             // Optionally highlight pieces that MUST capture, or just enforce the rule.
             // For simplicity, we'll just enforce the rule in handlePieceClick.
             // We could potentially update possibleMoves here for all mandatory capture pieces.
        }
    }
  }, [gameState.currentPlayer, gameState.board, gameState.isMultiCapture, gameState.winner]);


  return (
    <div className="flex flex-col items-center justify-center p-4 min-h-screen bg-background">
      <h1 className="text-3xl font-bold mb-4 text-foreground">Checkered</h1>

        {gameState.winner && (
            <Alert variant={gameState.winner === 'draw' ? 'default' : 'default'} className="mb-4 bg-accent text-accent-foreground">
            <AlertTitle className="font-bold text-lg">Game Over!</AlertTitle>
            <AlertDescription>
                {gameState.winner === 'draw' ? 'The game is a draw!' : `Player ${gameState.winner === 'light' ? 'Light (Gray)' : 'Dark (Red)'} wins!`}
            </AlertDescription>
            </Alert>
        )}

       {!gameState.winner && (
            <div className="mb-4 text-lg font-semibold text-foreground">
            Turn:
            <span className={cn("ml-2 px-2 py-1 rounded", gameState.currentPlayer === 'light' ? 'bg-piece-light text-black' : 'bg-piece-dark text-white')}>
                {gameState.currentPlayer === 'light' ? 'Light (Gray)' : 'Dark (Red)'}
            </span>
            {gameState.isMultiCapture && <span className="ml-2 text-sm text-destructive">(Must complete capture)</span>}
            </div>
       )}


      <div
        className="grid grid-cols-8 border-4 border-gray-800 shadow-xl"
        style={{ width: 'fit-content' }}
        role="grid"
        aria-label="Checkers board"
      >
        {gameState.board.map((row, rowIndex) =>
          row.map((square, colIndex) => {
            const pos = { row: rowIndex, col: colIndex };
            const isDark = (rowIndex + colIndex) % 2 !== 0;
            const isSelected = gameState.selectedPiece?.row === rowIndex && gameState.selectedPiece?.col === colIndex;
            const isValidMove = gameState.possibleMoves.some(move => move.to.row === rowIndex && move.to.col === colIndex);

            return (
              <BoardSquare
                key={`${rowIndex}-${colIndex}`}
                square={square}
                position={pos}
                isDark={isDark}
                isSelected={isSelected}
                isValidMove={isValidMove}
                onSquareClick={handleSquareClick}
                onPieceClick={handlePieceClick}
              />
            );
          })
        )}
      </div>

      <div className="mt-6 flex gap-4">
        <Button onClick={resetGame} variant="outline">
          <RefreshCw className="mr-2 h-4 w-4" /> Reset Game
        </Button>
         <Button onClick={undoMove} variant="outline" disabled={history.length === 0}>
          <Undo className="mr-2 h-4 w-4" /> Undo Move
        </Button>
      </div>
    </div>
  );
};

export default CheckersBoard;
