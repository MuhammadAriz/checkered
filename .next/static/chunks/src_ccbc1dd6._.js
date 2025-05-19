(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_ccbc1dd6._.js", {

"[project]/src/lib/utils.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "cn": (()=>cn)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/CheckerPiece.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
'use client';
;
;
const CheckerPiece = ({ piece, position, isSelected, onClick })=>{
    const pieceColorClass = piece.player === 'dark' ? 'checker-piece-dark' : 'checker-piece-light';
    const kingClass = piece.isKing ? 'checker-piece-king' : '';
    const selectedClass = isSelected ? 'checker-piece-selected' : '';
    const handleClick = ()=>{
        onClick(position);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('checker-piece', pieceColorClass, kingClass, selectedClass),
        onClick: handleClick,
        role: "button",
        "aria-label": `Checker piece at row ${position.row + 1}, column ${position.col + 1}, color ${piece.player}${piece.isKing ? ', king' : ''}`,
        "aria-pressed": isSelected
    }, void 0, false, {
        fileName: "[project]/src/components/CheckerPiece.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
};
_c = CheckerPiece;
const __TURBOPACK__default__export__ = CheckerPiece;
var _c;
__turbopack_context__.k.register(_c, "CheckerPiece");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/BoardSquare.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckerPiece$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/CheckerPiece.tsx [app-client] (ecmascript)");
'use client';
;
;
;
const BoardSquare = ({ square, position, isDark, isSelected, isValidMove, onSquareClick, onPieceClick })=>{
    const squareColorClass = isDark ? 'board-square-dark' : 'board-square-light';
    const highlightClass = isSelected ? 'board-square-highlight' : '';
    const validMoveClass = isValidMove ? 'board-square-valid-move' : '';
    const handleClick = ()=>{
        if (!square) {
            onSquareClick(position);
        }
    // Piece click is handled by the CheckerPiece component's onClick
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('board-square', squareColorClass, highlightClass, validMoveClass),
        onClick: handleClick,
        role: "gridcell",
        "aria-selected": isSelected,
        "aria-label": `Square at row ${position.row + 1}, column ${position.col + 1}, ${isDark ? 'dark' : 'light'}${square ? `, contains ${square.player} piece${square.isKing ? ' (king)' : ''}` : ', empty'}${isValidMove ? ', valid move target' : ''}`,
        children: square && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckerPiece$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            piece: square,
            position: position,
            isSelected: isSelected,
            onClick: onPieceClick
        }, void 0, false, {
            fileName: "[project]/src/components/BoardSquare.tsx",
            lineNumber: 47,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/BoardSquare.tsx",
        lineNumber: 39,
        columnNumber: 5
    }, this);
};
_c = BoardSquare;
const __TURBOPACK__default__export__ = BoardSquare;
var _c;
__turbopack_context__.k.register(_c, "BoardSquare");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/button.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Button": (()=>Button),
    "buttonVariants": (()=>buttonVariants)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90",
            destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
            outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-10 px-4 py-2",
            sm: "h-9 rounded-md px-3",
            lg: "h-11 rounded-md px-8",
            icon: "h-10 w-10"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
const Button = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = ({ className, variant, size, asChild = false, ...props }, ref)=>{
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/button.tsx",
        lineNumber: 46,
        columnNumber: 7
    }, this);
});
_c1 = Button;
Button.displayName = "Button";
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Button$React.forwardRef");
__turbopack_context__.k.register(_c1, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/alert.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Alert": (()=>Alert),
    "AlertDescription": (()=>AlertDescription),
    "AlertTitle": (()=>AlertTitle)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const alertVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground", {
    variants: {
        variant: {
            default: "bg-background text-foreground",
            destructive: "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});
const Alert = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = ({ className, variant, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        role: "alert",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(alertVariants({
            variant
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/alert.tsx",
        lineNumber: 26,
        columnNumber: 3
    }, this));
_c1 = Alert;
Alert.displayName = "Alert";
const AlertTitle = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c2 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("mb-1 font-medium leading-none tracking-tight", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/alert.tsx",
        lineNumber: 39,
        columnNumber: 3
    }, this));
_c3 = AlertTitle;
AlertTitle.displayName = "AlertTitle";
const AlertDescription = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c4 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-sm [&_p]:leading-relaxed", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/alert.tsx",
        lineNumber: 51,
        columnNumber: 3
    }, this));
_c5 = AlertDescription;
AlertDescription.displayName = "AlertDescription";
;
var _c, _c1, _c2, _c3, _c4, _c5;
__turbopack_context__.k.register(_c, "Alert$React.forwardRef");
__turbopack_context__.k.register(_c1, "Alert");
__turbopack_context__.k.register(_c2, "AlertTitle$React.forwardRef");
__turbopack_context__.k.register(_c3, "AlertTitle");
__turbopack_context__.k.register(_c4, "AlertDescription$React.forwardRef");
__turbopack_context__.k.register(_c5, "AlertDescription");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/lib/checkersLogic.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "BOARD_SIZE": (()=>BOARD_SIZE),
    "applyMove": (()=>applyMove),
    "canContinueCapture": (()=>canContinueCapture),
    "checkWinner": (()=>checkWinner),
    "getCaptureMoves": (()=>getCaptureMoves),
    "getPossibleMoves": (()=>getPossibleMoves),
    "hasMoves": (()=>hasMoves),
    "hasPieces": (()=>hasPieces),
    "initializeBoard": (()=>initializeBoard),
    "isWithinBoard": (()=>isWithinBoard),
    "mustCapture": (()=>mustCapture)
});
const BOARD_SIZE = 8;
function initializeBoard() {
    const board = Array(BOARD_SIZE).fill(null).map(()=>Array(BOARD_SIZE).fill(null));
    for(let row = 0; row < BOARD_SIZE; row++){
        for(let col = 0; col < BOARD_SIZE; col++){
            if ((row + col) % 2 !== 0) {
                if (row < 3) {
                    board[row][col] = {
                        player: 'dark',
                        isKing: false
                    };
                } else if (row > 4) {
                    board[row][col] = {
                        player: 'light',
                        isKing: false
                    };
                }
            }
        }
    }
    return board;
}
function isWithinBoard(pos) {
    return pos.row >= 0 && pos.row < BOARD_SIZE && pos.col >= 0 && pos.col < BOARD_SIZE;
}
// Check if a square is occupied by the opponent
function isOpponent(board, pos, player) {
    if (!isWithinBoard(pos)) return false;
    const piece = board[pos.row][pos.col];
    return piece !== null && piece.player !== player;
}
// Check if a square is empty
function isEmpty(board, pos) {
    if (!isWithinBoard(pos)) return false;
    return board[pos.row][pos.col] === null;
}
function getPossibleMoves(board, from, player) {
    const piece = board[from.row][from.col];
    if (!piece || piece.player !== player) return [];
    const moves = [];
    const captures = [];
    const directions = piece.isKing ? [
        [
            -1,
            -1
        ],
        [
            -1,
            1
        ],
        [
            1,
            -1
        ],
        [
            1,
            1
        ]
    ] // King moves
     : piece.player === 'light' ? [
        [
            -1,
            -1
        ],
        [
            -1,
            1
        ]
    ] // Light normal moves (upwards)
     : [
        [
            1,
            -1
        ],
        [
            1,
            1
        ]
    ]; // Dark normal moves (downwards)
    // Check for captures first
    for (const [dr, dc] of directions){
        const opponentPos = {
            row: from.row + dr,
            col: from.col + dc
        };
        const landingPos = {
            row: from.row + 2 * dr,
            col: from.col + 2 * dc
        };
        if (isWithinBoard(opponentPos) && isOpponent(board, opponentPos, player) && isWithinBoard(landingPos) && isEmpty(board, landingPos)) {
            const capturedPiece = board[opponentPos.row][opponentPos.col];
            if (capturedPiece) {
                captures.push({
                    from,
                    to: landingPos,
                    captured: opponentPos
                });
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
    for (const [dr, dc] of directions){
        const to = {
            row: from.row + dr,
            col: from.col + dc
        };
        if (isWithinBoard(to) && isEmpty(board, to)) {
            moves.push({
                from,
                to
            });
        }
    }
    return moves;
}
// Check for multi-jump possibilities recursively
function checkMultiCaptures(board, currentPos, player) {
    const piece = board[currentPos.row]?.[currentPos.col]; // Add null check
    if (!piece) return [];
    const potentialCaptures = [];
    const directions = piece.isKing ? [
        [
            -1,
            -1
        ],
        [
            -1,
            1
        ],
        [
            1,
            -1
        ],
        [
            1,
            1
        ]
    ] : piece.player === 'light' ? [
        [
            -1,
            -1
        ],
        [
            -1,
            1
        ]
    ] : [
        [
            1,
            -1
        ],
        [
            1,
            1
        ]
    ];
    for (const [dr, dc] of directions){
        const opponentPos = {
            row: currentPos.row + dr,
            col: currentPos.col + dc
        };
        const landingPos = {
            row: currentPos.row + 2 * dr,
            col: currentPos.col + 2 * dc
        };
        if (isWithinBoard(opponentPos) && isOpponent(board, opponentPos, player) && isWithinBoard(landingPos) && isEmpty(board, landingPos)) {
            // Simulate the capture
            const tempBoard = board.map((row)=>[
                    ...row
                ]); // Deep copy
            const movingPiece = tempBoard[currentPos.row][currentPos.col];
            tempBoard[landingPos.row][landingPos.col] = movingPiece;
            tempBoard[opponentPos.row][opponentPos.col] = null;
            tempBoard[currentPos.row][currentPos.col] = null;
            // Check for further captures from the landing position
            const furtherCaptures = checkMultiCaptures(tempBoard, landingPos, player);
            if (furtherCaptures.length > 0) {
                // If further captures are possible, prepend the current capture to each path
                furtherCaptures.forEach((fc)=>{
                    potentialCaptures.push({
                        from: currentPos,
                        to: landingPos,
                        captured: opponentPos,
                        nextMoves: fc.nextMoves ? [
                            fc
                        ] : [
                            fc
                        ] // Ensure nextMoves is an array
                    });
                });
            } else {
                // This is the end of a capture sequence
                potentialCaptures.push({
                    from: currentPos,
                    to: landingPos,
                    captured: opponentPos
                });
            }
        }
    }
    // We need to flatten the structure for the final list of possible starting moves
    // This part is tricky. For the initial `getPossibleMoves` call, we only want the *first* jump.
    // The UI will handle subsequent jumps based on the state after the first jump.
    // So, let's just return the first-level captures found here.
    const firstLevelCaptures = potentialCaptures.map((capture)=>({
            from: capture.from,
            to: capture.to,
            captured: capture.captured
        }));
    return firstLevelCaptures; // Return only the first jump possibilities from this position
}
function applyMove(board, move) {
    const newBoard = board.map((row)=>[
            ...row
        ]); // Deep copy
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
        newBoard[move.to.row][move.to.col] = {
            ...piece,
            isKing: true
        };
    }
    return newBoard;
}
function hasMoves(board, player) {
    for(let r = 0; r < BOARD_SIZE; r++){
        for(let c = 0; c < BOARD_SIZE; c++){
            const piece = board[r][c];
            if (piece && piece.player === player) {
                const moves = getPossibleMoves(board, {
                    row: r,
                    col: c
                }, player);
                if (moves.length > 0) {
                    return true;
                }
            }
        }
    }
    return false;
}
function hasPieces(board, player) {
    for(let r = 0; r < BOARD_SIZE; r++){
        for(let c = 0; c < BOARD_SIZE; c++){
            if (board[r][c]?.player === player) {
                return true;
            }
        }
    }
    return false;
}
function checkWinner(board, currentPlayer) {
    const opponent = currentPlayer === 'light' ? 'dark' : 'light';
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
function mustCapture(board, player) {
    for(let r = 0; r < BOARD_SIZE; r++){
        for(let c = 0; c < BOARD_SIZE; c++){
            const piece = board[r][c];
            if (piece && piece.player === player) {
                const moves = getPossibleMoves(board, {
                    row: r,
                    col: c
                }, player);
                if (moves.some((move)=>move.captured)) {
                    return true;
                }
            }
        }
    }
    return false;
}
function getCaptureMoves(board, player) {
    const captureMoves = [];
    for(let r = 0; r < BOARD_SIZE; r++){
        for(let c = 0; c < BOARD_SIZE; c++){
            const piece = board[r][c];
            if (piece && piece.player === player) {
                const moves = getPossibleMoves(board, {
                    row: r,
                    col: c
                }, player);
                moves.forEach((move)=>{
                    if (move.captured) {
                        captureMoves.push(move);
                    }
                });
            }
        }
    }
    return captureMoves;
}
function canContinueCapture(board, pos, player) {
    const piece = board[pos.row][pos.col];
    if (!piece || piece.player !== player) return false;
    const directions = piece.isKing ? [
        [
            -1,
            -1
        ],
        [
            -1,
            1
        ],
        [
            1,
            -1
        ],
        [
            1,
            1
        ]
    ] : piece.player === 'light' ? [
        [
            -1,
            -1
        ],
        [
            -1,
            1
        ]
    ] : [
        [
            1,
            -1
        ],
        [
            1,
            1
        ]
    ];
    for (const [dr, dc] of directions){
        const opponentPos = {
            row: pos.row + dr,
            col: pos.col + dc
        };
        const landingPos = {
            row: pos.row + 2 * dr,
            col: pos.col + 2 * dc
        };
        if (isWithinBoard(opponentPos) && isOpponent(board, opponentPos, player) && isWithinBoard(landingPos) && isEmpty(board, landingPos)) {
            return true; // Found a possible next capture
        }
    }
    return false;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/CheckersBoard.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/refresh-cw.js [app-client] (ecmascript) <export default as RefreshCw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$undo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Undo$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/undo.js [app-client] (ecmascript) <export default as Undo>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$BoardSquare$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/BoardSquare.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/alert.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$checkersLogic$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/checkersLogic.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
const initialGameState = {
    board: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$checkersLogic$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initializeBoard"])(),
    currentPlayer: 'light',
    selectedPiece: null,
    possibleMoves: [],
    winner: null,
    isMultiCapture: false,
    mustCapturePiece: null
};
const CheckersBoard = ()=>{
    _s();
    const [gameState, setGameState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialGameState);
    const [history, setHistory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]); // For undo functionality
    // Reset game to initial state
    const resetGame = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CheckersBoard.useCallback[resetGame]": ()=>{
            setGameState(initialGameState);
            setHistory([]);
        }
    }["CheckersBoard.useCallback[resetGame]"], []);
    // Save current state to history
    const saveHistory = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CheckersBoard.useCallback[saveHistory]": (state)=>{
            setHistory({
                "CheckersBoard.useCallback[saveHistory]": (prev)=>[
                        ...prev,
                        state
                    ]
            }["CheckersBoard.useCallback[saveHistory]"]);
        }
    }["CheckersBoard.useCallback[saveHistory]"], []);
    // Undo the last move
    const undoMove = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CheckersBoard.useCallback[undoMove]": ()=>{
            setHistory({
                "CheckersBoard.useCallback[undoMove]": (prev)=>{
                    const lastState = prev.slice(0, -1); // Get all but the last state
                    const newState = lastState[lastState.length - 1] || initialGameState;
                    setGameState(newState); // Restore the previous state
                    return lastState;
                }
            }["CheckersBoard.useCallback[undoMove]"]);
        }
    }["CheckersBoard.useCallback[undoMove]"], []);
    const handlePieceClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CheckersBoard.useCallback[handlePieceClick]": (pos)=>{
            const { board, currentPlayer, selectedPiece, isMultiCapture, mustCapturePiece } = gameState;
            const piece = board[pos.row][pos.col];
            // If in multi-capture mode, only the designated piece can be selected/moved
            if (isMultiCapture && mustCapturePiece && (pos.row !== mustCapturePiece.row || pos.col !== mustCapturePiece.col)) {
                return;
            }
            // Only allow clicking own pieces
            if (!piece || piece.player !== currentPlayer) {
                setGameState({
                    "CheckersBoard.useCallback[handlePieceClick]": (prev)=>({
                            ...prev,
                            selectedPiece: null,
                            possibleMoves: []
                        })
                }["CheckersBoard.useCallback[handlePieceClick]"]);
                return;
            }
            // Check if a capture is mandatory
            const captureIsMandatory = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$checkersLogic$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mustCapture"])(board, currentPlayer);
            const availableMoves = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$checkersLogic$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPossibleMoves"])(board, pos, currentPlayer);
            // Filter moves: if capture is mandatory, only allow capture moves
            const validMoves = captureIsMandatory ? availableMoves.filter({
                "CheckersBoard.useCallback[handlePieceClick]": (move)=>move.captured
            }["CheckersBoard.useCallback[handlePieceClick]"]) : availableMoves;
            // If clicking the same piece, deselect it (unless in multi-capture)
            if (!isMultiCapture && selectedPiece && selectedPiece.row === pos.row && selectedPiece.col === pos.col) {
                setGameState({
                    "CheckersBoard.useCallback[handlePieceClick]": (prev)=>({
                            ...prev,
                            selectedPiece: null,
                            possibleMoves: []
                        })
                }["CheckersBoard.useCallback[handlePieceClick]"]);
            } else if (validMoves.length > 0) {
                // If not mandatory capture, or if this piece has capture moves when mandatory
                if (!captureIsMandatory || validMoves.some({
                    "CheckersBoard.useCallback[handlePieceClick]": (m)=>m.from.row === pos.row && m.from.col === pos.col
                }["CheckersBoard.useCallback[handlePieceClick]"])) {
                    setGameState({
                        "CheckersBoard.useCallback[handlePieceClick]": (prev)=>({
                                ...prev,
                                selectedPiece: pos,
                                possibleMoves: validMoves.filter({
                                    "CheckersBoard.useCallback[handlePieceClick]": (m)=>m.from.row === pos.row && m.from.col === pos.col
                                }["CheckersBoard.useCallback[handlePieceClick]"]) // Only show moves for this piece
                            })
                    }["CheckersBoard.useCallback[handlePieceClick]"]);
                } else {
                    // Capture is mandatory, but this piece has no capture moves
                    setGameState({
                        "CheckersBoard.useCallback[handlePieceClick]": (prev)=>({
                                ...prev,
                                selectedPiece: null,
                                possibleMoves: []
                            })
                    }["CheckersBoard.useCallback[handlePieceClick]"]);
                }
            } else {
                // No valid moves for this piece
                setGameState({
                    "CheckersBoard.useCallback[handlePieceClick]": (prev)=>({
                            ...prev,
                            selectedPiece: null,
                            possibleMoves: []
                        })
                }["CheckersBoard.useCallback[handlePieceClick]"]);
            }
        }
    }["CheckersBoard.useCallback[handlePieceClick]"], [
        gameState
    ]);
    const handleSquareClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CheckersBoard.useCallback[handleSquareClick]": (pos)=>{
            const { selectedPiece, possibleMoves, board, currentPlayer, isMultiCapture } = gameState;
            if (!selectedPiece) return; // No piece selected
            const move = possibleMoves.find({
                "CheckersBoard.useCallback[handleSquareClick].move": (m)=>m.to.row === pos.row && m.to.col === pos.col
            }["CheckersBoard.useCallback[handleSquareClick].move"]);
            if (move) {
                saveHistory(gameState); // Save state before making the move
                const newBoard = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$checkersLogic$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["applyMove"])(board, move);
                const wasCapture = !!move.captured;
                let nextPlayer = currentPlayer === 'light' ? 'dark' : 'light';
                let continueCapture = false;
                let nextMustCapturePiece = null;
                // Check for multi-capture possibility
                if (wasCapture && (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$checkersLogic$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["canContinueCapture"])(newBoard, move.to, currentPlayer)) {
                    // Check if the *same player* MUST capture again from the new position
                    const furtherCaptures = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$checkersLogic$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCaptureMoves"])(newBoard, currentPlayer).filter({
                        "CheckersBoard.useCallback[handleSquareClick].furtherCaptures": (m)=>m.from.row === move.to.row && m.from.col === move.to.col
                    }["CheckersBoard.useCallback[handleSquareClick].furtherCaptures"]);
                    if (furtherCaptures.length > 0) {
                        nextPlayer = currentPlayer; // Same player's turn again
                        continueCapture = true;
                        nextMustCapturePiece = move.to; // This piece must continue the capture
                    }
                }
                const winner = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$checkersLogic$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["checkWinner"])(newBoard, nextPlayer);
                setGameState({
                    board: newBoard,
                    currentPlayer: nextPlayer,
                    selectedPiece: continueCapture ? move.to : null,
                    possibleMoves: continueCapture ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$checkersLogic$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPossibleMoves"])(newBoard, move.to, currentPlayer).filter({
                        "CheckersBoard.useCallback[handleSquareClick]": (m)=>m.captured
                    }["CheckersBoard.useCallback[handleSquareClick]"]) : [],
                    winner: winner,
                    isMultiCapture: continueCapture,
                    mustCapturePiece: nextMustCapturePiece
                });
            } else {
                // Clicked on an invalid square, deselect if not in multi-capture
                if (!isMultiCapture) {
                    setGameState({
                        "CheckersBoard.useCallback[handleSquareClick]": (prev)=>({
                                ...prev,
                                selectedPiece: null,
                                possibleMoves: []
                            })
                    }["CheckersBoard.useCallback[handleSquareClick]"]);
                }
            }
        }
    }["CheckersBoard.useCallback[handleSquareClick]"], [
        gameState,
        saveHistory
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CheckersBoard.useEffect": ()=>{
            // Pre-calculate mandatory captures for the current player when their turn starts
            if (!gameState.isMultiCapture && !gameState.winner) {
                const captureIsMandatory = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$checkersLogic$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mustCapture"])(gameState.board, gameState.currentPlayer);
                if (captureIsMandatory) {
                // Optionally highlight pieces that MUST capture, or just enforce the rule.
                // For simplicity, we'll just enforce the rule in handlePieceClick.
                // We could potentially update possibleMoves here for all mandatory capture pieces.
                }
            }
        }
    }["CheckersBoard.useEffect"], [
        gameState.currentPlayer,
        gameState.board,
        gameState.isMultiCapture,
        gameState.winner
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col items-center justify-center p-4 min-h-screen bg-background",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-3xl font-bold mb-4 text-foreground",
                children: "Checkered"
            }, void 0, false, {
                fileName: "[project]/src/components/CheckersBoard.tsx",
                lineNumber: 166,
                columnNumber: 7
            }, this),
            gameState.winner && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Alert"], {
                variant: gameState.winner === 'draw' ? 'default' : 'default',
                className: "mb-4 bg-accent text-accent-foreground",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertTitle"], {
                        className: "font-bold text-lg",
                        children: "Game Over!"
                    }, void 0, false, {
                        fileName: "[project]/src/components/CheckersBoard.tsx",
                        lineNumber: 170,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDescription"], {
                        children: gameState.winner === 'draw' ? 'The game is a draw!' : `Player ${gameState.winner === 'light' ? 'Light (Gray)' : 'Dark (Red)'} wins!`
                    }, void 0, false, {
                        fileName: "[project]/src/components/CheckersBoard.tsx",
                        lineNumber: 171,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/CheckersBoard.tsx",
                lineNumber: 169,
                columnNumber: 13
            }, this),
            !gameState.winner && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-4 text-lg font-semibold text-foreground",
                children: [
                    "Turn:",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("ml-2 px-2 py-1 rounded", gameState.currentPlayer === 'light' ? 'bg-piece-light text-black' : 'bg-piece-dark text-white'),
                        children: gameState.currentPlayer === 'light' ? 'Light (Gray)' : 'Dark (Red)'
                    }, void 0, false, {
                        fileName: "[project]/src/components/CheckersBoard.tsx",
                        lineNumber: 180,
                        columnNumber: 13
                    }, this),
                    gameState.isMultiCapture && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "ml-2 text-sm text-destructive",
                        children: "(Must complete capture)"
                    }, void 0, false, {
                        fileName: "[project]/src/components/CheckersBoard.tsx",
                        lineNumber: 183,
                        columnNumber: 42
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/CheckersBoard.tsx",
                lineNumber: 178,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-8 border-4 border-gray-800 shadow-xl",
                style: {
                    width: 'fit-content'
                },
                role: "grid",
                "aria-label": "Checkers board",
                children: gameState.board.map((row, rowIndex)=>row.map((square, colIndex)=>{
                        const pos = {
                            row: rowIndex,
                            col: colIndex
                        };
                        const isDark = (rowIndex + colIndex) % 2 !== 0;
                        const isSelected = gameState.selectedPiece?.row === rowIndex && gameState.selectedPiece?.col === colIndex;
                        const isValidMove = gameState.possibleMoves.some((move)=>move.to.row === rowIndex && move.to.col === colIndex);
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$BoardSquare$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            square: square,
                            position: pos,
                            isDark: isDark,
                            isSelected: isSelected,
                            isValidMove: isValidMove,
                            onSquareClick: handleSquareClick,
                            onPieceClick: handlePieceClick
                        }, `${rowIndex}-${colIndex}`, false, {
                            fileName: "[project]/src/components/CheckersBoard.tsx",
                            lineNumber: 202,
                            columnNumber: 15
                        }, this);
                    }))
            }, void 0, false, {
                fileName: "[project]/src/components/CheckersBoard.tsx",
                lineNumber: 188,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-6 flex gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        onClick: resetGame,
                        variant: "outline",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                className: "mr-2 h-4 w-4"
                            }, void 0, false, {
                                fileName: "[project]/src/components/CheckersBoard.tsx",
                                lineNumber: 219,
                                columnNumber: 11
                            }, this),
                            " Reset Game"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/CheckersBoard.tsx",
                        lineNumber: 218,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        onClick: undoMove,
                        variant: "outline",
                        disabled: history.length === 0,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$undo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Undo$3e$__["Undo"], {
                                className: "mr-2 h-4 w-4"
                            }, void 0, false, {
                                fileName: "[project]/src/components/CheckersBoard.tsx",
                                lineNumber: 222,
                                columnNumber: 11
                            }, this),
                            " Undo Move"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/CheckersBoard.tsx",
                        lineNumber: 221,
                        columnNumber: 10
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/CheckersBoard.tsx",
                lineNumber: 217,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/CheckersBoard.tsx",
        lineNumber: 165,
        columnNumber: 5
    }, this);
};
_s(CheckersBoard, "OMjRSSl0K9GpNlVjMBjZrZq34Ug=");
_c = CheckersBoard;
const __TURBOPACK__default__export__ = CheckersBoard;
var _c;
__turbopack_context__.k.register(_c, "CheckersBoard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_ccbc1dd6._.js.map