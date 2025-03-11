import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { ChevronRight } from "lucide-react"
import { cn } from "../lib/utils"

const Breadcrumb = React.forwardRef<
  HTMLElement,
  React.ComponentPropsWithoutRef<"nav"> & {
    separator?: React.ReactNode
  }
>(({ ...props }, ref) => <nav ref={ref} aria-label="breadcrumb" {...props} />)
Breadcrumb.displayName = "Breadcrumb"

const BreadcrumbList = React.forwardRef<HTMLOListElement, React.ComponentPropsWithoutRef<"ol">>(
  ({ className, ...props }, ref) => (
    <ol
      ref={ref}
      className={cn("flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground", className)}
      {...props}
    />
  ),
)
BreadcrumbList.displayName = "BreadcrumbList"

const BreadcrumbItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentPropsWithoutRef<"li"> & {
    isCurrentPage?: boolean
  }
>(({ className, isCurrentPage, ...props }, ref) => (
  <li
    ref={ref}
    className={cn("inline-flex items-center gap-1.5", className)}
    aria-current={isCurrentPage ? "page" : undefined}
    {...props}
  />
))
BreadcrumbItem.displayName = "BreadcrumbItem"

const BreadcrumbSeparator = React.forwardRef<HTMLLIElement, React.ComponentPropsWithoutRef<"li">>(
  ({ className, ...props }, ref) => (
    <li ref={ref} className={cn("text-muted-foreground", className)} {...props}>
      <ChevronRight className="h-4 w-4" />
    </li>
  ),
)
BreadcrumbSeparator.displayName = "BreadcrumbSeparator"

const BreadcrumbLink = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentPropsWithoutRef<"a"> & {
    asChild?: boolean
  }
>(({ className, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "a"
  return <Comp ref={ref} className={cn("transition-colors hover:text-foreground", className)} {...props} />
})
BreadcrumbLink.displayName = "BreadcrumbLink"

const BreadcrumbPage = React.forwardRef<HTMLSpanElement, React.ComponentPropsWithoutRef<"span">>(
  ({ className, ...props }, ref) => (
    <span ref={ref} className={cn("font-normal text-foreground", className)} aria-current="page" {...props} />
  ),
)
BreadcrumbPage.displayName = "BreadcrumbPage"

export { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbSeparator, BreadcrumbLink, BreadcrumbPage }

