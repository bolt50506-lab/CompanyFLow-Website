import { Logo } from "@/components/navbar/Navbar";
const L=[["Solutions","#solutions"],["Industries","#industries"],["Products","#products"],["Work","#work"],["About","#about"],["Contact","#contact"],["Privacy","#"],["Terms","#"]];
export default function Footer(){return <footer className="bg-[#06070a] py-16 text-slate-400"><div className="mx-auto grid max-w-6xl gap-8 px-6 md:grid-cols-[1.4fr_1fr]"><div><Logo/><p className="mt-3">Digital systems that make business flow.</p></div>
 <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm">{L.map(([n,h])=><li key={n}><a href={h} className="hover:text-white">{n}</a></li>)}</ul>
 <p className="border-t border-white/10 pt-6 text-sm text-slate-500 md:col-span-2">CompanyFlow.co.uk — Built for businesses that want to move forward.</p></div></footer>}
