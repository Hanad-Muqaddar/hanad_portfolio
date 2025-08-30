import * as React from "react"; import { cn } from "@/lib/utils"
export function Badge(p:React.HTMLAttributes<HTMLDivElement>){return <div {...p} className={cn("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700",p.className)} />}
