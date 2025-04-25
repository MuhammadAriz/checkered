export type Player = 'light' | 'dark';

export interface Piece {
  player: Player;
  isKing: boolean;
}

export type BoardSquare = Piece | null;
export type Board = BoardSquare[][];

export interface Position {
  row: number;
  col: number;
}

export interface Move {
  from: Position;
  to: Position;
  captured?: Position; // Position of the piece captured, if any
  nextMoves?: Move[]; // For multi-jump sequences (optional for basic implementation)
}

export interface GameState {
  board: Board;
  currentPlayer: Player;
  selectedPiece: Position | null;
  possibleMoves: Move[];
  winner: Player | 'draw' | null;
  isMultiCapture: boolean; // Flag to indicate if the player is in the middle of a multi-capture
  mustCapturePiece: Position | null; // Which piece must make the next capture in a multi-jump sequence
}
