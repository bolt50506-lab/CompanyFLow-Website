"use client";
import { useState } from "react";
import { NEEDS } from "@/lib/data";
type D={needs:string[];name:string;company:string;email:string;phone:string;industry:string;website:string;description:string;budget:string};
const E0:D={needs:[],name:"",company:"",email:"",phone:"",industry:"",website:"",description:"",budget:""};
const inp="w-full rounded-xl border border-slate-300 bg-white px-3.5 py-3";
export default function ContactForm(){
 const [s,setS]=useState(1),[d,setD]=useState(E0),[err,setErr]=useState(""),[res,setRes]=useState<"ok"|"nc"|"fail"|null>(null);
 const f=(k:keyof D)=>(e:React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement|HTMLSelectElement>)=>setD({...d,[k]:e.target.value});
 async function next(){setErr("");
  if(s===1){return d.needs.length?setS(2):setErr("Please choose at least one option.")}
  if(s===2){return d.name.trim()&&/^\S+@\S+\.\S+$/.test(d.email)?setS(3):setErr("Please enter your name and a valid email.")}
  if(d.description.trim().length<10)return setErr("Please tell us a little more.");
  setS(4);try{const r=await fetch("/api/contact",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(d)});setRes(r.ok?"ok":r.status===501?"nc":"fail")}catch{setRes("fail")}}
 const mail=`mailto:alihotspot1@gmail.com?subject=Project%20enquiry&body=${encodeURIComponent(Object.entries(d).map(([k,v])=>`${k}: ${v}`).join("\n"))}`;
 return <section aria-labelledby="contact-heading" className="bg-gradient-to-b from-blue-50 to-paper py-24"><div className="mx-auto max-w-2xl rounded-3xl border border-slate-200 bg-white p-8 sm:p-10"><h2 id="contact-heading" className="sr-only">Start a project with CompanyFlow</h2>
 {s===1&&<><h3 className="mb-5 text-2xl font-bold tracking-tight">What do you need?</h3><div className="flex flex-wrap gap-2.5">{NEEDS.map(n=><label key={n}><input type="checkbox" className="peer sr-only" checked={d.needs.includes(n)} onChange={()=>setD({...d,needs:d.needs.includes(n)?d.needs.filter(x=>x!==n):[...d.needs,n]})}/><span className="inline-block cursor-pointer rounded-full border border-slate-300 px-4 py-2.5 peer-checked:bg-ink peer-checked:text-white peer-focus-visible:ring-2 peer-focus-visible:ring-acc2">{n}</span></label>)}</div></>}
 {s===2&&<><h3 className="mb-5 text-2xl font-bold tracking-tight">Tell us about your business</h3><div className="grid gap-3 sm:grid-cols-2">{([["name","Name","text"],["company","Company","text"],["email","Email","email"],["phone","Phone","tel"],["industry","Industry","text"],["website","Current website","url"]] as const).map(([k,l,t])=><label key={k} className="text-sm font-semibold">{l}<input type={t} className={inp+" mt-1 font-normal"} value={d[k]} onChange={f(k)}/></label>)}</div></>}
 {s===3&&<><h3 className="mb-5 text-2xl font-bold tracking-tight">What are you hoping to achieve?</h3><label className="text-sm font-semibold">Project description<textarea rows={4} className={inp+" mt-1 font-normal"} value={d.description} onChange={f("description")}/></label>
  <label className="mt-3 block text-sm font-semibold">Budget (optional)<select className={inp+" mt-1 font-normal"} value={d.budget} onChange={f("budget")}><option value="">Prefer not to say</option><option>Under £2k</option><option>£2k–£5k</option><option>£5k–£15k</option><option>£15k+</option></select></label></>}
 {s===4&&<div aria-live="polite">{res===null&&<p>Sending…</p>}{res==="ok"&&<h3 className="text-2xl font-bold tracking-tight">Thanks — your project is on its way to CompanyFlow.</h3>}
  {res==="nc"&&<><h3 className="text-2xl font-bold tracking-tight">Almost there</h3><p className="my-3 text-slate-500">The form isn't connected to a service yet, so nothing has been sent. Email your enquiry instead:</p><a href={mail} className="inline-block rounded-full bg-ink px-6 py-3 font-semibold text-white">Send by email →</a></>}
  {res==="fail"&&<><h3 className="text-2xl font-bold">Something went wrong</h3><p className="my-3 text-slate-500">Your enquiry wasn't sent.</p><a href={mail} className="font-semibold text-acc2">Email us instead →</a></>}</div>}
 {err&&<p role="alert" className="mt-3 text-sm text-red-600">{err}</p>}
 {s<4&&<div className="mt-6 flex justify-between"><button onClick={()=>setS(s-1)} className={`rounded-full border border-slate-300 px-5 py-3 font-semibold ${s===1?"invisible":""}`}>Back</button><button onClick={next} className="rounded-full bg-gradient-to-r from-acc to-acc2 px-6 py-3 font-semibold text-ink">{s===3?"Send enquiry":"Next →"}</button></div>}
 </div></section>}
