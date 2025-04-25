'use client';

import type React from 'react';
import { cn } from '@/lib/utils';
import type { Piece, Position } from '@/types/checkers';

interface CheckerPieceProps {
  piece: Piece;
  position: Position;
  isSelected: boolean;
  onClick: (pos: Position) => void;
}

const CheckerPiece: React.FC<CheckerPieceProps> = ({ piece, position, isSelected, onClick }) => {
  const pieceColorClass = piece.player === 'dark' ? 'checker-piece-dark' : 'checker-piece-light';
  const kingClass = piece.isKing ? 'checker-piece-king' : '';
  const selectedClass = isSelected ? 'checker-piece-selected' : '';

  const handleClick = () => {
    onClick(position);
  };

  return (
    <div
      className={cn('checker-piece', pieceColorClass, kingClass, selectedClass)}
      onClick={handleClick}
      role="button"
      aria-label={`Checker piece at row ${position.row + 1}, column ${position.col + 1}, color ${piece.player}${piece.isKing ? ', king' : ''}`}
      aria-pressed={isSelected}
    >
      {/* King indicator is handled by CSS ::after pseudo-element */}
    </div>
  );
};

export default CheckerPiece;
