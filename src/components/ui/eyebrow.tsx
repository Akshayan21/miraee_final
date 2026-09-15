import * as React from "react"
import { cn } from "@/lib/utils"

function Eyebrow({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      data-slot="eyebrow"
      className={cn(
        "font-body text-xs font-semibold tracking-[0.08em] text-brand-strong uppercase",
        className
      )}
      {...props}
    />
  )
}

export { Eyebrow }
