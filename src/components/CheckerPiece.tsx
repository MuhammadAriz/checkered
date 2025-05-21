
'use client';

import type React from 'react';
import { cn } from '@/lib/utils';
import type { Piece, Position } from '@/types/checkers';

interface CheckerPieceProps {
  piece: Piece;
  position: Position;
  isSelected: boolean;
  isForcedToCapture?: boolean; // New prop
  onClick: (pos: Position) => void;
}

const CheckerPiece: React.FC<CheckerPieceProps> = ({ 
    piece, 
    position, 
    isSelected, 
    isForcedToCapture, // Destructure new prop
    onClick 
}) => {
  const pieceColorClass = piece.player === 'dark' ? 'checker-piece-dark' : 'checker-piece-light';
  const kingClass = piece.isKing ? 'checker-piece-king' : '';
  const selectedClass = isSelected ? 'checker-piece-selected' : '';
  // Apply forced capture class only if it's forced and NOT already selected
  const forcedCaptureClass = isForcedToCapture && !isSelected ? 'checker-piece-forced-capture' : '';


  const handleClick = () => {
    onClick(position);
  };

  return (
    <div
      className={cn(
          'checker-piece', 
          pieceColorClass, 
          kingClass, 
          selectedClass, 
          forcedCaptureClass // Add new class
        )}
      onClick={handleClick}
      role="button"
      aria-label={`Checker piece at row ${position.row + 1}, column ${position.col + 1}, color ${piece.player}${piece.isKing ? ', king' : ''}${isForcedToCapture ? ', must capture' : ''}`}
      aria-pressed={isSelected}
    >
      {/* King indicator is handled by CSS ::after pseudo-element */}
    </div>
  );
};

export default CheckerPiece;
