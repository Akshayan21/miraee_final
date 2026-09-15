import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const headingVariants = cva("font-heading text-text", {
  variants: {
    size: {
      display: "text-4xl leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl",
      h1: "text-3xl leading-[1.15] tracking-tight sm:text-4xl lg:text-5xl",
      h2: "text-2xl leading-[1.2] tracking-tight sm:text-3xl",
      h3: "text-xl leading-[1.25] sm:text-2xl",
      h4: "text-lg leading-[1.3] sm:text-xl",
    },
  },
  defaultVariants: {
    size: "h2",
  },
})

type HeadingElement = "h1" | "h2" | "h3" | "h4" | "h5" | "h6"

type HeadingProps = React.ComponentProps<"h1"> &
  VariantProps<typeof headingVariants> & {
    as?: HeadingElement
  }

function Heading({ as = "h2", size, className, ...props }: HeadingProps) {
  const Comp = as

  return (
    <Comp
      data-slot="heading"
      className={cn(headingVariants({ size }), className)}
      {...props}
    />
  )
}

export { Heading, headingVariants }
