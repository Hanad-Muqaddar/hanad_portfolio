import * as React from "react"; import { cn } from "@/lib/utils"
export function Card(p:React.HTMLAttributes<HTMLDivElement>){return <div {...p} className={cn("rounded-2xl bg-white/70 dark:bg-slate-900/40 shadow border border-slate-200 dark:border-slate-800",p.className)} />}
export function CardHeader(p:React.HTMLAttributes<HTMLDivElement>){return <div {...p} className={cn("p-6",p.className)} />}
export function CardTitle(p:React.HTMLAttributes<HTMLHeadingElement>){return <h3 {...p} className={cn("text-xl font-semibold",p.className)} />}
export function CardContent(p:React.HTMLAttributes<HTMLDivElement>){return <div {...p} className={cn("p-6 pt-0",p.className)} />}
