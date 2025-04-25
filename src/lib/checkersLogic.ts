import type { Piece, Player, Board, Position, Move, GameState } from '@/types/checkers';

export const BOARD_SIZE = 8;

// Initialize the board with pieces in starting positions
export function initializeBoard(): Board {
  const board: Board = Array(BOARD_SIZE).fill(null).map(() => Array(BOARD_SIZE).fill(null));

  for (let row = 0; row < BOARD_SIZE; row++) {
    for (let col = 0; col < BOARD_SIZE; col++) {
      if ((row + col) % 2 !== 0) { // Only place pieces on dark squares
        if (row < 3) {
          board[row][col] = { player: 'dark', isKing: false };
        } else if (row > 4) {
          board[row][col] = { player: 'light', isKing: false };
        }
      }
    }
  }
  return board;
}

// Check if a position is within the board boundaries
export function isWithinBoard(pos: Position): boolean {
  return pos.row >= 0 && pos.row < BOARD_SIZE && pos.col >= 0 && pos.col < BOARD_SIZE;
}

// Check if a square is occupied by the opponent
function isOpponent(board: Board, pos: Position, player: Player): boolean {
  if (!isWithinBoard(pos)) return false;
  const piece = board[pos.row][pos.col];
  return piece !== null && piece.player !== player;
}

// Check if a square is empty
function isEmpty(board: Board, pos: Position): boolean {
   if (!isWithinBoard(pos)) return false;
  return board[pos.row][pos.col] === null;
}


// Get possible moves for a piece (including captures)
export function getPossibleMoves(board: Board, from: Position, player: Player): Move[] {
  const piece = board[from.row][from.col];
  if (!piece || piece.player !== player) return [];

  const moves: Move[] = [];
  const captures: Move[] = [];
  const directions = piece.isKing
    ? [[-1, -1], [-1, 1], [1, -1], [1, 1]] // King moves
    : piece.player === 'light'
    ? [[-1, -1], [-1, 1]] // Light normal moves (upwards)
    : [[1, -1], [1, 1]]; // Dark normal moves (downwards)

  // Check for captures first
  for (const [dr, dc] of directions) {
     const opponentPos = { row: from.row + dr, col: from.col + dc };
     const landingPos = { row: from.row + 2 * dr, col: from.col + 2 * dc };

     if (isWithinBoard(opponentPos) && isOpponent(board, opponentPos, player) && isWithinBoard(landingPos) && isEmpty(board, landingPos)) {
        const capturedPiece = board[opponentPos.row][opponentPos.col];
        if (capturedPiece) {
           captures.push({ from, to: landingPos, captured: opponentPos });
        }
     }
  }


  // If captures are available, only capture moves are allowed
   if (captures.length > 0) {
     // Check for multi-captures recursively
     const multiCaptures = checkMultiCaptures(board, from, player);
     return multiCaptures.length > 0 ? multiCaptures : captures;
   }

   // If no captures, check for regular moves
    for (const [dr, dc] of directions) {
        const to = { row: from.row + dr, col: from.col + dc };
        if (isWithinBoard(to) && isEmpty(board, to)) {
           moves.push({ from, to });
        }
    }


  return moves;
}

// Check for multi-jump possibilities recursively
function checkMultiCaptures(board: Board, currentPos: Position, player: Player): Move[] {
    const piece = board[currentPos.row]?.[currentPos.col]; // Add null check
    if (!piece) return [];

    const potentialCaptures: Move[] = [];
    const directions = piece.isKing
        ? [[-1, -1], [-1, 1], [1, -1], [1, 1]]
        : piece.player === 'light'
        ? [[-1, -1], [-1, 1]]
        : [[1, -1], [1, 1]];

    for (const [dr, dc] of directions) {
        const opponentPos = { row: currentPos.row + dr, col: currentPos.col + dc };
        const landingPos = { row: currentPos.row + 2 * dr, col: currentPos.col + 2 * dc };

        if (isWithinBoard(opponentPos) && isOpponent(board, opponentPos, player) && isWithinBoard(landingPos) && isEmpty(board, landingPos)) {
            // Simulate the capture
            const tempBoard = board.map(row => [...row]); // Deep copy
            const movingPiece = tempBoard[currentPos.row][currentPos.col];
            tempBoard[landingPos.row][landingPos.col] = movingPiece;
            tempBoard[opponentPos.row][opponentPos.col] = null;
            tempBoard[currentPos.row][currentPos.col] = null;

            // Check for further captures from the landing position
            const furtherCaptures = checkMultiCaptures(tempBoard, landingPos, player);

            if (furtherCaptures.length > 0) {
                // If further captures are possible, prepend the current capture to each path
                furtherCaptures.forEach(fc => {
                    potentialCaptures.push({
                        from: currentPos,
                        to: landingPos,
                        captured: opponentPos,
                        nextMoves: fc.nextMoves ? [fc] : [fc] // Ensure nextMoves is an array
                    });
                });
            } else {
                // This is the end of a capture sequence
                potentialCaptures.push({ from: currentPos, to: landingPos, captured: opponentPos });
            }
        }
    }

    // We need to flatten the structure for the final list of possible starting moves
    // This part is tricky. For the initial `getPossibleMoves` call, we only want the *first* jump.
    // The UI will handle subsequent jumps based on the state after the first jump.
    // So, let's just return the first-level captures found here.
     const firstLevelCaptures = potentialCaptures.map(capture => ({
        from: capture.from,
        to: capture.to,
        captured: capture.captured
     }));

     return firstLevelCaptures; // Return only the first jump possibilities from this position
}


// Apply a move to the board state
export function applyMove(board: Board, move: Move): Board {
  const newBoard = board.map(row => [...row]); // Deep copy
  const piece = newBoard[move.from.row][move.from.col];

  if (!piece) return board; // Should not happen if move is valid

  // Move the piece
  newBoard[move.to.row][move.to.col] = piece;
  newBoard[move.from.row][move.from.col] = null;

  // Remove captured piece
  if (move.captured) {
    newBoard[move.captured.row][move.captured.col] = null;
  }

   // Check for crowning
   const targetRow = piece.player === 'light' ? 0 : BOARD_SIZE - 1;
   if (move.to.row === targetRow && !piece.isKing) {
     newBoard[move.to.row][move.to.col] = { ...piece, isKing: true };
   }


  return newBoard;
}


// Check if a player has any possible moves left
export function hasMoves(board: Board, player: Player): boolean {
  for (let r = 0; r < BOARD_SIZE; r++) {
    for (let c = 0; c < BOARD_SIZE; c++) {
      const piece = board[r][c];
      if (piece && piece.player === player) {
        const moves = getPossibleMoves(board, { row: r, col: c }, player);
        if (moves.length > 0) {
          return true;
        }
      }
    }
  }
  return false;
}

// Check if a player has any pieces left
export function hasPieces(board: Board, player: Player): boolean {
  for (let r = 0; r < BOARD_SIZE; r++) {
    for (let c = 0; c < BOARD_SIZE; c++) {
      if (board[r][c]?.player === player) {
        return true;
      }
    }
  }
  return false;
}

// Determine if the game is over and who won
export function checkWinner(board: Board, currentPlayer: Player): Player | 'draw' | null {
    const opponent: Player = currentPlayer === 'light' ? 'dark' : 'light';

    const currentPlayerHasMoves = hasMoves(board, currentPlayer);
    const opponentHasMoves = hasMoves(board, opponent);
    const currentPlayerHasPieces = hasPieces(board, currentPlayer);
    const opponentHasPieces = hasPieces(board, opponent);


    if (!currentPlayerHasPieces || !currentPlayerHasMoves) {
        return opponent; // Current player cannot move or has no pieces, opponent wins
    }
    if (!opponentHasPieces || !opponentHasMoves) {
        return currentPlayer; // Opponent cannot move or has no pieces, current player wins
    }

    // Draw condition (optional, e.g., based on move count without capture)
    // For simplicity, we'll omit draw conditions for now.

    return null; // Game is not over
}


// Check if any capture moves are available for the current player
export function mustCapture(board: Board, player: Player): boolean {
   for (let r = 0; r < BOARD_SIZE; r++) {
       for (let c = 0; c < BOARD_SIZE; c++) {
           const piece = board[r][c];
           if (piece && piece.player === player) {
               const moves = getPossibleMoves(board, { row: r, col: c }, player);
               if (moves.some(move => move.captured)) {
                   return true;
               }
           }
       }
   }
   return false;
}

// Get only the capture moves available for a player
export function getCaptureMoves(board: Board, player: Player): Move[] {
    const captureMoves: Move[] = [];
    for (let r = 0; r < BOARD_SIZE; r++) {
        for (let c = 0; c < BOARD_SIZE; c++) {
            const piece = board[r][c];
            if (piece && piece.player === player) {
                const moves = getPossibleMoves(board, { row: r, col: c }, player);
                moves.forEach(move => {
                    if (move.captured) {
                        captureMoves.push(move);
                    }
                });
            }
        }
    }
    return captureMoves;
}


// Check if a specific piece has further captures available after a capture move
export function canContinueCapture(board: Board, pos: Position, player: Player): boolean {
    const piece = board[pos.row][pos.col];
    if (!piece || piece.player !== player) return false;

    const directions = piece.isKing
        ? [[-1, -1], [-1, 1], [1, -1], [1, 1]]
        : piece.player === 'light'
        ? [[-1, -1], [-1, 1]]
        : [[1, -1], [1, 1]];

    for (const [dr, dc] of directions) {
        const opponentPos = { row: pos.row + dr, col: pos.col + dc };
        const landingPos = { row: pos.row + 2 * dr, col: pos.col + 2 * dc };

        if (isWithinBoard(opponentPos) && isOpponent(board, opponentPos, player) && isWithinBoard(landingPos) && isEmpty(board, landingPos)) {
           return true; // Found a possible next capture
        }
    }
    return false;
}