import * as React from "react"
import { cn } from "@/lib/utils"

type BadgeVariant = "default" | "secondary" | "outline"

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
	variant?: BadgeVariant
}

const variantClasses: Record<BadgeVariant, string> = {
	default: "bg-primary text-primary-foreground",
	secondary: "bg-secondary text-secondary-foreground",
	outline: "border bg-background text-foreground",
}

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
	({ className, variant = "default", ...props }, ref) => (
		<div
			ref={ref}
			data-slot="badge"
			className={cn(
				"inline-flex items-center rounded-md px-2.5 py-0.5 text-xs font-medium",
				variantClasses[variant],
				className
			)}
			{...props}
		/>
	)
)
Badge.displayName = "Badge"

export { Badge }


