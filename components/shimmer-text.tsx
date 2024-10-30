import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ShimmerTextProps {
    shimmerWidth?: number;
    children: ReactNode;
}

const shimmerClasses = {
    base: "mx-auto max-w-md px-4 py-1 flex items-center text-neutral-600/50 dark:text-neutral-400/50",
    animation:
        "animate-shimmer bg-clip-text bg-no-repeat [background-position:0_0] [background-size:var(--shimmer-width)_100%] [transition:background-position_1s_cubic-bezier(.6,.6,0,1)_infinite]",
    gradient:
        "bg-gradient-to-r from-transparent via-black/80 via-50% to-transparent dark:via-white/80"
} as const;

export function ShimmerText({ shimmerWidth = 100, children }: ShimmerTextProps) {
    const shimmerStyle = {
        "--shimmer-width": `${shimmerWidth}px`
    } as React.CSSProperties;

    return (
        <p
            style={shimmerStyle}
            className={cn(shimmerClasses.base, shimmerClasses.animation, shimmerClasses.gradient)}
        >
            {children}
        </p>
    );
}
