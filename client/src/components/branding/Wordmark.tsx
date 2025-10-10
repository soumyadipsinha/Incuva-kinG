import * as React from "react";
import { cn } from "@/lib/utils";

interface WordmarkProps extends React.HTMLAttributes<HTMLDivElement> {
	text?: string
}

export default function Wordmark({ className, text = "INKUVA" }: WordmarkProps) {
	return (
		<div className={cn("relative inline-block", className)}>
			{/* Glow */}
			<div className="pointer-events-none absolute inset-0 -z-10 blur-2xl [mask-image:radial-gradient(closest-side,black,transparent)]">
				<div className="h-full w-full animate-pulse rounded-full bg-primary/10" />
			</div>
			{/* Wordmark with stroke reveal */}
			<span className="bg-gradient-to-b from-primary to-primary/70 bg-clip-text text-5xl font-semibold tracking-[0.2em] text-transparent md:text-6xl">
				{text}
			</span>
			<div className="mt-1 h-[2px] w-full origin-left animate-[reveal_1.2s_ease-out_forwards] bg-primary/60 opacity-0" />
		</div>
	)
}


