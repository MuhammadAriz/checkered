module.exports = {

"[externals]/next/dist/compiled/next-server/app-page.runtime.dev.js [external] (next/dist/compiled/next-server/app-page.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page.runtime.dev.js"));

module.exports = mod;
}}),
"[project]/src/lib/utils.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "cn": (()=>cn)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
}}),
"[project]/src/components/CheckerPiece.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
'use client';
;
;
const CheckerPiece = ({ piece, position, isSelected, isForcedToCapture, onClick })=>{
    const pieceColorClass = piece.player === 'dark' ? 'checker-piece-dark' : 'checker-piece-light';
    const kingClass = piece.isKing ? 'checker-piece-king' : '';
    const selectedClass = isSelected ? 'checker-piece-selected' : '';
    // Apply forced capture class only if it's forced and NOT already selected
    const forcedCaptureClass = isForcedToCapture && !isSelected ? 'checker-piece-forced-capture' : '';
    const handleClick = ()=>{
        onClick(position);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('checker-piece', pieceColorClass, kingClass, selectedClass, forcedCaptureClass // Add new class
        ),
        onClick: handleClick,
        role: "button",
        "aria-label": `Checker piece at row ${position.row + 1}, column ${position.col + 1}, color ${piece.player}${piece.isKing ? ', king' : ''}${isForcedToCapture ? ', must capture' : ''}`,
        "aria-pressed": isSelected
    }, void 0, false, {
        fileName: "[project]/src/components/CheckerPiece.tsx",
        lineNumber: 35,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = CheckerPiece;
}}),
"[project]/src/components/BoardSquare.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckerPiece$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/CheckerPiece.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
const BoardSquare = ({ square, position, isDark, isSelected, isValidMove, isForcedToCapture, onSquareClick, onPieceClick })=>{
    const squareColorClass = isDark ? 'board-square-dark' : 'board-square-light';
    const highlightClass = isSelected ? 'board-square-highlight' : '';
    const validMoveClass = isValidMove ? 'board-square-valid-move' : '';
    const handleClick = ()=>{
        if (!square) {
            onSquareClick(position);
        }
    // Piece click is handled by the CheckerPiece component's onClick
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('board-square', squareColorClass, highlightClass, validMoveClass),
        onClick: handleClick,
        role: "gridcell",
        "aria-selected": isSelected,
        "aria-label": `Square at row ${position.row + 1}, column ${position.col + 1}, ${isDark ? 'dark' : 'light'}${square ? `, contains ${square.player} piece${square.isKing ? ' (king)' : ''}` : ', empty'}${isValidMove ? ', valid move target' : ''}${isForcedToCapture && square ? ', mandatory capture piece' : ''}`,
        children: square && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckerPiece$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            piece: square,
            position: position,
            isSelected: isSelected,
            isForcedToCapture: isForcedToCapture,
            onClick: onPieceClick
        }, void 0, false, {
            fileName: "[project]/src/components/BoardSquare.tsx",
            lineNumber: 50,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/BoardSquare.tsx",
        lineNumber: 42,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = BoardSquare;
}}),
"[project]/src/components/ui/button.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Button": (()=>Button),
    "buttonVariants": (()=>buttonVariants)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
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
const Button = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, variant, size, asChild = false, ...props }, ref)=>{
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
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
Button.displayName = "Button";
;
}}),
"[project]/src/components/ui/alert.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Alert": (()=>Alert),
    "AlertDescription": (()=>AlertDescription),
    "AlertTitle": (()=>AlertTitle)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
;
const alertVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])("relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground", {
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
const Alert = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, variant, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        role: "alert",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(alertVariants({
            variant
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/alert.tsx",
        lineNumber: 26,
        columnNumber: 3
    }, this));
Alert.displayName = "Alert";
const AlertTitle = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("mb-1 font-medium leading-none tracking-tight", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/alert.tsx",
        lineNumber: 39,
        columnNumber: 3
    }, this));
AlertTitle.displayName = "AlertTitle";
const AlertDescription = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-sm [&_p]:leading-relaxed", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/alert.tsx",
        lineNumber: 51,
        columnNumber: 3
    }, this));
AlertDescription.displayName = "AlertDescription";
;
}}),
"[project]/src/components/ui/card.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Card": (()=>Card),
    "CardContent": (()=>CardContent),
    "CardDescription": (()=>CardDescription),
    "CardFooter": (()=>CardFooter),
    "CardHeader": (()=>CardHeader),
    "CardTitle": (()=>CardTitle)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
const Card = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("rounded-lg border bg-card text-card-foreground shadow-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 9,
        columnNumber: 3
    }, this));
Card.displayName = "Card";
const CardHeader = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex flex-col space-y-1.5 p-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 24,
        columnNumber: 3
    }, this));
CardHeader.displayName = "CardHeader";
const CardTitle = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-2xl font-semibold leading-none tracking-tight", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 36,
        columnNumber: 3
    }, this));
CardTitle.displayName = "CardTitle";
const CardDescription = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-sm text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 51,
        columnNumber: 3
    }, this));
CardDescription.displayName = "CardDescription";
const CardContent = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("p-6 pt-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 63,
        columnNumber: 3
    }, this));
CardContent.displayName = "CardContent";
const CardFooter = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex items-center p-6 pt-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 71,
        columnNumber: 3
    }, this));
CardFooter.displayName = "CardFooter";
;
}}),
"[project]/src/lib/checkersLogic.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
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
}}),
"[project]/src/components/CheckersBoard.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/refresh-cw.js [app-ssr] (ecmascript) <export default as RefreshCw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$undo$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Undo$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/undo.js [app-ssr] (ecmascript) <export default as Undo>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$BoardSquare$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/BoardSquare.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/alert.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/card.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$checkersLogic$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/checkersLogic.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
const initialGameState = {
    board: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$checkersLogic$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["initializeBoard"])(),
    currentPlayer: 'light',
    selectedPiece: null,
    possibleMoves: [],
    winner: null,
    isMultiCapture: false,
    mustCapturePiece: null
};
const CheckersBoard = ()=>{
    const [gameState, setGameState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialGameState);
    const [history, setHistory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]); // For undo functionality
    const [forcedCapturePieceInfo, setForcedCapturePieceInfo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // Reset game to initial state
    const resetGame = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setGameState(initialGameState);
        setHistory([]);
        setForcedCapturePieceInfo(null);
    }, []);
    // Save current state to history
    const saveHistory = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((state)=>{
        setHistory((prev)=>[
                ...prev,
                state
            ]);
    }, []);
    // Undo the last move
    const undoMove = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setHistory((prev)=>{
            const lastStateArray = prev.slice(0, -1);
            const newState = lastStateArray[lastStateArray.length - 1] || initialGameState;
            setGameState(newState);
            return lastStateArray;
        });
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (gameState.winner) {
            setForcedCapturePieceInfo(null);
            return;
        }
        if (gameState.isMultiCapture && gameState.mustCapturePiece) {
            setForcedCapturePieceInfo(gameState.mustCapturePiece);
        } else {
            const mandatory = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$checkersLogic$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mustCapture"])(gameState.board, gameState.currentPlayer);
            if (mandatory) {
                const board = gameState.board;
                const player = gameState.currentPlayer;
                let pieceToHighlight = null;
                for(let r = 0; r < __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$checkersLogic$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BOARD_SIZE"]; r++){
                    for(let c = 0; c < __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$checkersLogic$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BOARD_SIZE"]; c++){
                        const currentPiecePos = {
                            row: r,
                            col: c
                        };
                        const piece = board[r][c];
                        if (piece && piece.player === player) {
                            const moves = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$checkersLogic$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPossibleMoves"])(board, currentPiecePos, player);
                            if (moves.some((move)=>move.captured)) {
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
    }, [
        gameState.board,
        gameState.currentPlayer,
        gameState.winner,
        gameState.isMultiCapture,
        gameState.mustCapturePiece
    ]);
    const handlePieceClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((pos)=>{
        const { board, currentPlayer, selectedPiece, isMultiCapture, mustCapturePiece } = gameState;
        const piece = board[pos.row][pos.col];
        if (isMultiCapture && mustCapturePiece && (pos.row !== mustCapturePiece.row || pos.col !== mustCapturePiece.col)) {
            return;
        }
        if (!piece || piece.player !== currentPlayer) {
            setGameState((prev)=>({
                    ...prev,
                    selectedPiece: null,
                    possibleMoves: []
                }));
            return;
        }
        const captureIsMandatory = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$checkersLogic$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mustCapture"])(board, currentPlayer);
        const availableMoves = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$checkersLogic$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPossibleMoves"])(board, pos, currentPlayer);
        const validMoves = captureIsMandatory ? availableMoves.filter((move)=>move.captured) : availableMoves;
        if (!isMultiCapture && selectedPiece && selectedPiece.row === pos.row && selectedPiece.col === pos.col) {
            setGameState((prev)=>({
                    ...prev,
                    selectedPiece: null,
                    possibleMoves: []
                }));
        } else if (validMoves.length > 0) {
            if (!captureIsMandatory || validMoves.some((m)=>m.from.row === pos.row && m.from.col === pos.col)) {
                setGameState((prev)=>({
                        ...prev,
                        selectedPiece: pos,
                        possibleMoves: validMoves.filter((m)=>m.from.row === pos.row && m.from.col === pos.col)
                    }));
            } else {
                setGameState((prev)=>({
                        ...prev,
                        selectedPiece: null,
                        possibleMoves: []
                    }));
            }
        } else {
            if (!isMultiCapture) {
                setGameState((prev)=>({
                        ...prev,
                        selectedPiece: null,
                        possibleMoves: []
                    }));
            }
        }
    }, [
        gameState
    ]);
    const handleSquareClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((pos)=>{
        const { selectedPiece, possibleMoves, board, currentPlayer, isMultiCapture } = gameState;
        if (!selectedPiece) return;
        const move = possibleMoves.find((m)=>m.to.row === pos.row && m.to.col === pos.col);
        if (move) {
            saveHistory(gameState);
            const newBoard = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$checkersLogic$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["applyMove"])(board, move);
            const wasCapture = !!move.captured;
            let nextPlayer = currentPlayer === 'light' ? 'dark' : 'light';
            let continueCapture = false;
            let nextMustCapturePiece = null;
            if (wasCapture && (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$checkersLogic$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["canContinueCapture"])(newBoard, move.to, currentPlayer)) {
                const furtherCaptures = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$checkersLogic$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCaptureMoves"])(newBoard, currentPlayer).filter((m)=>m.from.row === move.to.row && m.from.col === move.to.col);
                if (furtherCaptures.length > 0) {
                    nextPlayer = currentPlayer;
                    continueCapture = true;
                    nextMustCapturePiece = move.to;
                }
            }
            const winner = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$checkersLogic$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["checkWinner"])(newBoard, nextPlayer);
            setGameState({
                board: newBoard,
                currentPlayer: nextPlayer,
                selectedPiece: continueCapture ? move.to : null,
                possibleMoves: continueCapture ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$checkersLogic$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPossibleMoves"])(newBoard, move.to, currentPlayer).filter((m)=>m.captured) : [],
                winner: winner,
                isMultiCapture: continueCapture,
                mustCapturePiece: nextMustCapturePiece
            });
        } else {
            if (!isMultiCapture) {
                setGameState((prev)=>({
                        ...prev,
                        selectedPiece: null,
                        possibleMoves: []
                    }));
            }
        }
    }, [
        gameState,
        saveHistory
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // This effect can be used for side-effects when a turn starts and mandatory capture is detected,
        // but the main logic for highlighting is now in the other useEffect.
        if (!gameState.isMultiCapture && !gameState.winner) {
            const captureIsMandatory = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$checkersLogic$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mustCapture"])(gameState.board, gameState.currentPlayer);
            if (captureIsMandatory) {
            // console.log("Capture is mandatory for player:", gameState.currentPlayer);
            }
        }
    }, [
        gameState.currentPlayer,
        gameState.board,
        gameState.isMultiCapture,
        gameState.winner
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col items-center p-4 md:p-8 min-h-screen bg-background text-foreground",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col lg:flex-row gap-8 w-full max-w-6xl",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "lg:w-72 w-full flex-shrink-0 order-2 lg:order-1 flex flex-col gap-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-4xl font-bold text-center lg:text-left",
                            children: "Checkered"
                        }, void 0, false, {
                            fileName: "[project]/src/components/CheckersBoard.tsx",
                            lineNumber: 198,
                            columnNumber: 11
                        }, this),
                        gameState.winner && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Alert"], {
                            variant: gameState.winner === 'draw' ? 'default' : 'destructive',
                            className: gameState.winner !== 'draw' ? "bg-accent text-accent-foreground" : "",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertTitle"], {
                                    className: "font-bold text-lg",
                                    children: "Game Over!"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CheckersBoard.tsx",
                                    lineNumber: 202,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDescription"], {
                                    children: gameState.winner === 'draw' ? 'The game is a draw!' : `Player ${gameState.winner === 'light' ? 'Light (Gray)' : 'Dark (Red)'} wins!`
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CheckersBoard.tsx",
                                    lineNumber: 203,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/CheckersBoard.tsx",
                            lineNumber: 201,
                            columnNumber: 13
                        }, this),
                        !gameState.winner && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                                        className: "text-xl text-center lg:text-left",
                                        children: "Current Turn"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CheckersBoard.tsx",
                                        lineNumber: 212,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CheckersBoard.tsx",
                                    lineNumber: 211,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                    className: "flex flex-col items-center lg:items-start gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("px-4 py-2 rounded-md text-lg font-semibold", gameState.currentPlayer === 'light' ? 'bg-piece-light text-black' : 'bg-piece-dark text-white'),
                                            children: gameState.currentPlayer === 'light' ? 'Light (Gray)' : 'Dark (Red)'
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CheckersBoard.tsx",
                                            lineNumber: 215,
                                            columnNumber: 17
                                        }, this),
                                        (gameState.isMultiCapture || forcedCapturePieceInfo && !gameState.selectedPiece) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm text-destructive font-medium",
                                            children: "(Must capture)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CheckersBoard.tsx",
                                            lineNumber: 222,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/CheckersBoard.tsx",
                                    lineNumber: 214,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/CheckersBoard.tsx",
                            lineNumber: 210,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                            className: "mt-auto",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                                        className: "text-lg text-center lg:text-left",
                                        children: "Game Controls"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CheckersBoard.tsx",
                                        lineNumber: 230,
                                        columnNumber: 16
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CheckersBoard.tsx",
                                    lineNumber: 229,
                                    columnNumber: 14
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                    className: "flex flex-col gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                            onClick: resetGame,
                                            variant: "outline",
                                            className: "w-full",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                                    className: "mr-2 h-4 w-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CheckersBoard.tsx",
                                                    lineNumber: 234,
                                                    columnNumber: 19
                                                }, this),
                                                " Reset Game"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/CheckersBoard.tsx",
                                            lineNumber: 233,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                            onClick: undoMove,
                                            variant: "outline",
                                            disabled: history.length === 0 || gameState.winner !== null,
                                            className: "w-full",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$undo$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Undo$3e$__["Undo"], {
                                                    className: "mr-2 h-4 w-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CheckersBoard.tsx",
                                                    lineNumber: 237,
                                                    columnNumber: 19
                                                }, this),
                                                " Undo Move"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/CheckersBoard.tsx",
                                            lineNumber: 236,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/CheckersBoard.tsx",
                                    lineNumber: 232,
                                    columnNumber: 14
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/CheckersBoard.tsx",
                            lineNumber: 228,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/CheckersBoard.tsx",
                    lineNumber: 197,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-grow flex justify-center items-start order-1 lg:order-2",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                const isForcedToCapturePiece = forcedCapturePieceInfo?.row === rowIndex && forcedCapturePieceInfo?.col === colIndex;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$BoardSquare$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    square: square,
                                    position: pos,
                                    isDark: isDark,
                                    isSelected: isSelected,
                                    isValidMove: isValidMove,
                                    isForcedToCapture: isForcedToCapturePiece,
                                    onSquareClick: handleSquareClick,
                                    onPieceClick: handlePieceClick
                                }, `${rowIndex}-${colIndex}`, false, {
                                    fileName: "[project]/src/components/CheckersBoard.tsx",
                                    lineNumber: 260,
                                    columnNumber: 19
                                }, this);
                            }))
                    }, void 0, false, {
                        fileName: "[project]/src/components/CheckersBoard.tsx",
                        lineNumber: 245,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/CheckersBoard.tsx",
                    lineNumber: 244,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/CheckersBoard.tsx",
            lineNumber: 195,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/CheckersBoard.tsx",
        lineNumber: 194,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = CheckersBoard;
}}),

};

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__9da16600._.js.map