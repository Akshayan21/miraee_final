import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const sectionVariants = cva("w-full py-16 sm:py-20 lg:py-28", {
  variants: {
    tone: {
      canvas: "bg-background text-text",
      surface: "bg-surface text-text",
      muted: "bg-surface-muted text-text",
      dark: "bg-background-dark text-white",
      deep: "bg-background-deep text-white",
    },
  },
  defaultVariants: {
    tone: "canvas",
  },
})

function Section({
  className,
  tone,
  ...props
}: React.ComponentProps<"section"> & VariantProps<typeof sectionVariants>) {
  return (
    <section
      data-slot="section"
      data-tone={tone}
      className={cn(sectionVariants({ tone }), className)}
      {...props}
    />
  )
}

export { Section, sectionVariants }
