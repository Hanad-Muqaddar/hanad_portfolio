"use client"
import { useState } from "react"
import { Mail } from "lucide-react"
import Button from "@/components/ui/button"

export default function ContactForm() {
  const [loading,setLoading]=useState(false); const [ok,setOk]=useState<string|null>(null); const [err,setErr]=useState<string|null>(null)
  async function onSubmit(e:React.FormEvent<HTMLFormElement>){ e.preventDefault(); setLoading(true); setOk(null); setErr(null);
    const fd=new FormData(e.currentTarget); const payload=Object.fromEntries(fd.entries())
    const res=await fetch("/api/contact",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(payload)})
    setLoading(false); if(res.ok){ e.currentTarget.reset(); setOk("Thanks! I’ll get back to you shortly.") } else { const d=await res.json().catch(()=>({})); setErr(d.error||"Something went wrong.") }
  }
  return (<form onSubmit={onSubmit} className="space-y-3">
    <div className="grid md:grid-cols-2 gap-3">
      <input name="name" placeholder="Your name" className="w-full rounded-md border px-3 py-2 bg-transparent" required/>
      <input name="email" type="email" placeholder="Email address" className="w-full rounded-md border px-3 py-2 bg-transparent" required/>
    </div>
    <textarea name="message" placeholder="Your message" rows={5} className="w-full rounded-md border px-3 py-2 bg-transparent" required/>
    <div className="flex items-center gap-2"><Button type="submit" disabled={loading}>{loading?"Sending...":"Send Message"}</Button><Mail className="w-4 h-4 opacity-60"/></div>
    {ok && <p className="text-emerald-600 text-sm">{ok}</p>}{err && <p className="text-rose-600 text-sm">{err}</p>}
  </form>)
}
