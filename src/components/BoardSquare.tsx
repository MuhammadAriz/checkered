
'use client';

import type React from 'react';
import { cn } from '@/lib/utils';
import type { BoardSquare as BoardSquareType, Position, Piece, Move } from '@/types/checkers';
import CheckerPiece from './CheckerPiece';

interface BoardSquareProps {
  square: BoardSquareType;
  position: Position;
  isDark: boolean;
  isSelected: boolean;
  isValidMove: boolean;
  isForcedToCapture: boolean; // New prop
  onSquareClick: (pos: Position) => void;
  onPieceClick: (pos: Position) => void;
}

const BoardSquare: React.FC<BoardSquareProps> = ({
  square,
  position,
  isDark,
  isSelected,
  isValidMove,
  isForcedToCapture, // Destructure new prop
  onSquareClick,
  onPieceClick,
}) => {
  const squareColorClass = isDark ? 'board-square-dark' : 'board-square-light';
  const highlightClass = isSelected ? 'board-square-highlight' : '';
  const validMoveClass = isValidMove ? 'board-square-valid-move' : '';

  const handleClick = () => {
      if (!square) { // Clicked on an empty square
          onSquareClick(position);
      }
      // Piece click is handled by the CheckerPiece component's onClick
  };

  return (
    <div
      className={cn('board-square', squareColorClass, highlightClass, validMoveClass)}
      onClick={handleClick}
      role="gridcell"
      aria-selected={isSelected}
      aria-label={`Square at row ${position.row + 1}, column ${position.col + 1}, ${isDark ? 'dark' : 'light'}${square ? `, contains ${square.player} piece${square.isKing ? ' (king)' : ''}` : ', empty'}${isValidMove ? ', valid move target' : ''}${isForcedToCapture && square ? ', mandatory capture piece' : ''}`}
    >
      {square && (
        <CheckerPiece
          piece={square}
          position={position}
          isSelected={isSelected}
          isForcedToCapture={isForcedToCapture} // Pass down
          onClick={onPieceClick}
        />
      )}
       {/* Valid move indicator is handled by CSS ::after pseudo-element */}
    </div>
  );
};

export default BoardSquare;
