import * as React from "react"
import { cn } from "@/lib/utils"
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default"|"secondary"|"outline"|"ghost"|"link"; size?: "default"|"sm"|"lg"|"icon"
}
const base="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50"
export default function Button({className,variant="default",size="default",...props}:ButtonProps){
  const variants={default:"bg-sky-600 text-white hover:bg-sky-700",secondary:"bg-slate-100 text-slate-900 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700",outline:"border border-slate-300 bg-transparent hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800",ghost:"hover:bg-slate-100 dark:hover:bg-slate-800",link:"text-sky-600 underline-offset-4 hover:underline"} as const
  const sizes={default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"} as const
  return <button className={cn(base,variants[variant],sizes[size],className)} {...props}/>
}
