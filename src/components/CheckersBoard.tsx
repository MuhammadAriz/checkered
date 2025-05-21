
'use client';

import React, { useState, useCallback, useEffect } from 'react';
import { RefreshCw, Undo } from 'lucide-react';
import BoardSquare from './BoardSquare';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
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
  const [forcedCapturePieceInfo, setForcedCapturePieceInfo] = useState<Position | null>(null);

   // Reset game to initial state
   const resetGame = useCallback(() => {
       setGameState(initialGameState);
       setHistory([]);
       setForcedCapturePieceInfo(null);
   }, []);

  // Save current state to history
   const saveHistory = useCallback((state: GameState) => {
       setHistory(prev => [...prev, state]);
   }, []);

   // Undo the last move
   const undoMove = useCallback(() => {
       setHistory(prev => {
           const lastStateArray = prev.slice(0, -1);
           const newState = lastStateArray[lastStateArray.length - 1] || initialGameState;
           setGameState(newState);
           return lastStateArray;
       });
   }, []);

  useEffect(() => {
    if (gameState.winner) {
      setForcedCapturePieceInfo(null);
      return;
    }

    if (gameState.isMultiCapture && gameState.mustCapturePiece) {
      setForcedCapturePieceInfo(gameState.mustCapturePiece);
    } else {
      const mandatory = mustCapture(gameState.board, gameState.currentPlayer);
      if (mandatory) {
        const board = gameState.board;
        const player = gameState.currentPlayer;
        let pieceToHighlight: Position | null = null;
        for (let r = 0; r < BOARD_SIZE; r++) {
          for (let c = 0; c < BOARD_SIZE; c++) {
            const currentPiecePos = { row: r, col: c };
            const piece = board[r][c];
            if (piece && piece.player === player) {
              const moves = getPossibleMoves(board, currentPiecePos, player);
              if (moves.some(move => move.captured)) {
                pieceToHighlight = currentPiecePos;
                break; 
              }
            }
          }
          if (pieceToHighlight) break;
        }
        setForcedCapturePieceInfo(pieceToHighlight);
      } else {
        setForcedCapturePieceInfo(null);
      }
    }
  }, [gameState.board, gameState.currentPlayer, gameState.winner, gameState.isMultiCapture, gameState.mustCapturePiece]);


  const handlePieceClick = useCallback((pos: Position) => {
      const { board, currentPlayer, selectedPiece, isMultiCapture, mustCapturePiece } = gameState;
      const piece = board[pos.row][pos.col];

      if (isMultiCapture && mustCapturePiece && (pos.row !== mustCapturePiece.row || pos.col !== mustCapturePiece.col)) {
          return;
      }

      if (!piece || piece.player !== currentPlayer) {
        setGameState(prev => ({ ...prev, selectedPiece: null, possibleMoves: [] }));
        return;
      }

      const captureIsMandatory = mustCapture(board, currentPlayer);
      const availableMoves = getPossibleMoves(board, pos, currentPlayer);

      const validMoves = captureIsMandatory
          ? availableMoves.filter(move => move.captured)
          : availableMoves;

      if (!isMultiCapture && selectedPiece && selectedPiece.row === pos.row && selectedPiece.col === pos.col) {
          setGameState(prev => ({ ...prev, selectedPiece: null, possibleMoves: [] }));
      } else if (validMoves.length > 0) {
          if (!captureIsMandatory || validMoves.some(m => m.from.row === pos.row && m.from.col === pos.col)) {
              setGameState(prev => ({
                  ...prev,
                  selectedPiece: pos,
                  possibleMoves: validMoves.filter(m => m.from.row === pos.row && m.from.col === pos.col)
              }));
          } else {
             setGameState(prev => ({ ...prev, selectedPiece: null, possibleMoves: [] }));
          }
      } else {
         if (!isMultiCapture) {
            setGameState(prev => ({ ...prev, selectedPiece: null, possibleMoves: [] }));
         }
      }

  }, [gameState]);

   const handleSquareClick = useCallback((pos: Position) => {
       const { selectedPiece, possibleMoves, board, currentPlayer, isMultiCapture } = gameState;

       if (!selectedPiece) return;

       const move = possibleMoves.find(m => m.to.row === pos.row && m.to.col === pos.col);

       if (move) {
           saveHistory(gameState); 

           const newBoard = applyMove(board, move);
           const wasCapture = !!move.captured;
           let nextPlayer = currentPlayer === 'light' ? 'dark' : 'light';
           let continueCapture = false;
           let nextMustCapturePiece = null;

           if (wasCapture && canContinueCapture(newBoard, move.to, currentPlayer)) {
               const furtherCaptures = getCaptureMoves(newBoard, currentPlayer).filter(m => m.from.row === move.to.row && m.from.col === move.to.col);
               if (furtherCaptures.length > 0) {
                  nextPlayer = currentPlayer; 
                  continueCapture = true;
                  nextMustCapturePiece = move.to; 
               }
           }

           const winner = checkWinner(newBoard, nextPlayer);

           setGameState({
               board: newBoard,
               currentPlayer: nextPlayer,
               selectedPiece: continueCapture ? move.to : null,
               possibleMoves: continueCapture ? getPossibleMoves(newBoard, move.to, currentPlayer).filter(m => m.captured) : [],
               winner: winner,
               isMultiCapture: continueCapture,
               mustCapturePiece: nextMustCapturePiece,
           });

       } else {
            if (!isMultiCapture) {
               setGameState(prev => ({ ...prev, selectedPiece: null, possibleMoves: [] }));
            }
       }
   }, [gameState, saveHistory]);


  useEffect(() => {
    // This effect can be used for side-effects when a turn starts and mandatory capture is detected,
    // but the main logic for highlighting is now in the other useEffect.
    if (!gameState.isMultiCapture && !gameState.winner) {
        const captureIsMandatory = mustCapture(gameState.board, gameState.currentPlayer);
        if (captureIsMandatory) {
            // console.log("Capture is mandatory for player:", gameState.currentPlayer);
        }
    }
  }, [gameState.currentPlayer, gameState.board, gameState.isMultiCapture, gameState.winner]);


  return (
    <div className="flex flex-col items-center p-4 md:p-8 min-h-screen bg-background text-foreground">
      <div className="flex flex-col lg:flex-row gap-8 w-full max-w-6xl">
        {/* Left Panel: Game Title, Status & Info */}
        <div className="lg:w-72 w-full flex-shrink-0 order-2 lg:order-1 flex flex-col gap-6">
          <h1 className="text-4xl font-bold text-center lg:text-left">Checkered</h1>
          
          {gameState.winner && (
            <Alert variant={gameState.winner === 'draw' ? 'default' : 'destructive'} className={gameState.winner !== 'draw' ? "bg-accent text-accent-foreground" : ""}>
              <AlertTitle className="font-bold text-lg">Game Over!</AlertTitle>
              <AlertDescription>
                {gameState.winner === 'draw' ? 'The game is a draw!' : `Player ${gameState.winner === 'light' ? 'Light (Gray)' : 'Dark (Red)'} wins!`}
              </AlertDescription>
            </Alert>
          )}

          {!gameState.winner && (
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-center lg:text-left">Current Turn</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col items-center lg:items-start gap-2">
                <span className={cn(
                  "px-4 py-2 rounded-md text-lg font-semibold",
                  gameState.currentPlayer === 'light' ? 'bg-piece-light text-black' : 'bg-piece-dark text-white'
                )}>
                  {gameState.currentPlayer === 'light' ? 'Light (Gray)' : 'Dark (Red)'}
                </span>
                {(gameState.isMultiCapture || (forcedCapturePieceInfo && !gameState.selectedPiece)) && (
                  <span className="text-sm text-destructive font-medium">(Must capture)</span>
                )}
              </CardContent>
            </Card>
          )}

          <Card className="mt-auto">
             <CardHeader>
               <CardTitle className="text-lg text-center lg:text-left">Game Controls</CardTitle>
             </CardHeader>
             <CardContent className="flex flex-col gap-3">
                <Button onClick={resetGame} variant="outline" className="w-full">
                  <RefreshCw className="mr-2 h-4 w-4" /> Reset Game
                </Button>
                <Button onClick={undoMove} variant="outline" disabled={history.length === 0 || gameState.winner !== null} className="w-full">
                  <Undo className="mr-2 h-4 w-4" /> Undo Move
                </Button>
             </CardContent>
          </Card>
        </div>

        {/* Right Panel: Checkers Board */}
        <div className="flex-grow flex justify-center items-start order-1 lg:order-2">
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
                const isForcedToCapturePiece = forcedCapturePieceInfo?.row === rowIndex && forcedCapturePieceInfo?.col === colIndex;

                return (
                  <BoardSquare
                    key={`${rowIndex}-${colIndex}`}
                    square={square}
                    position={pos}
                    isDark={isDark}
                    isSelected={isSelected}
                    isValidMove={isValidMove}
                    isForcedToCapture={isForcedToCapturePiece}
                    onSquareClick={handleSquareClick}
                    onPieceClick={handlePieceClick}
                  />
                );
              })
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckersBoard;
