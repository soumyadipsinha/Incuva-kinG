import * as React from "react"
import { cn } from "@/lib/utils"

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
	({ className, type = "text", ...props }, ref) => {
		return (
			<input
				ref={ref}
				type={type}
				data-slot="input"
				className={cn(
					"flex h-9 w-full rounded-xl border bg-background px-3 py-2 text-sm shadow-xs outline-none",
					"placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50",
					"disabled:cursor-not-allowed disabled:opacity-50",
					className
				)}
				{...props}
			/>
		)
	}
)
Input.displayName = "Input"

export { Input }


