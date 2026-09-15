import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const textVariants = cva("font-body", {
  variants: {
    size: {
      lg: "text-lg leading-relaxed",
      base: "text-base leading-relaxed",
      sm: "text-sm leading-relaxed",
      xs: "text-xs leading-normal",
    },
    tone: {
      default: "text-text",
      muted: "text-text-muted",
      inverted: "text-white",
    },
  },
  defaultVariants: {
    size: "base",
    tone: "default",
  },
})

type TextElement = "p" | "span" | "div"

type TextProps = React.ComponentProps<"p"> &
  VariantProps<typeof textVariants> & {
    as?: TextElement
  }

function Text({ as = "p", size, tone, className, ...props }: TextProps) {
  const Comp = as

  return (
    <Comp
      data-slot="text"
      className={cn(textVariants({ size, tone }), className)}
      {...props}
    />
  )
}

export { Text, textVariants }
