"use client"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
export default function ThemeToggle(){ const {theme,setTheme}=useTheme(); const d=theme==="dark"; return (<button aria-label="Toggle dark mode" onClick={()=>setTheme(d?'light':'dark')} className="inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm hover:bg-slate-100 dark:hover:bg-slate-800">{d?<Sun className="w-4 h-4"/>:<Moon className="w-4 h-4"/>}<span className="hidden sm:inline">{d?'Light':'Dark'}</span></button>) }
