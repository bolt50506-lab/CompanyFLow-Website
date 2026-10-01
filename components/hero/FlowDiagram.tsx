"use client";
import { useId, useState } from "react";
export type FNode={n:string;d?:string};
export default function FlowDiagram({nodes,center="CompanyFlow",interactive=false,onActive}:{nodes:FNode[];center?:string;interactive?:boolean;onActive?:(i:number|null)=>void}){
 const id=useId().replace(/:/g,""),[h,setH]=useState<number|null>(null),cx=300,cy=230;
 const pts=nodes.map((_,i)=>{const a=-Math.PI/2+i*2*Math.PI/nodes.length;return[cx+240*Math.cos(a),cy+200*Math.sin(a)]});
 const set=(i:number|null)=>{setH(i);onActive?.(i)};
 return <svg viewBox="0 0 600 460" className="h-auto w-full overflow-visible" role="img" aria-label="Connected business systems flowing into CompanyFlow">
  <defs><linearGradient id={id} x1="0" x2="1"><stop offset="0" stopColor="#46e0c0"/><stop offset="1" stopColor="#5b8cff"/></linearGradient></defs>
  {pts.map((p,i)=><path key={i} className="flow-line" fill="none" stroke={`url(#${id})`} strokeWidth={h===i?2.5:1.5} opacity={h===null||h===i?.75:.12} d={`M${p[0]} ${p[1]}Q${(p[0]+cx)/2} ${cy} ${cx} ${cy}`}/>)}
  {pts.map((p,i)=><g key={i} tabIndex={interactive?0:-1} onMouseEnter={()=>interactive&&set(i)} onMouseLeave={()=>interactive&&set(null)} onFocus={()=>interactive&&set(i)} onBlur={()=>interactive&&set(null)} opacity={h===null||h===i?1:.35} style={{transition:"opacity .3s"}}>
   <rect x={p[0]-52} y={p[1]-20} width="104" height="40" rx="12" fill={h===i?"rgba(70,224,192,.2)":"rgba(255,255,255,.06)"} stroke={h===i?"#46e0c0":"rgba(255,255,255,.2)"}/>
   <text x={p[0]} y={p[1]} textAnchor="middle" dominantBaseline="middle" fill="#e8ecf3" fontSize="13" fontWeight="600">{nodes[i].n}</text></g>)}
  <rect x={cx-70} y={cy-28} width="140" height="56" rx="16" fill={`url(#${id})`}/><text x={cx} y={cy} textAnchor="middle" dominantBaseline="middle" fontSize="15" fontWeight="700" fill="#05070a">{center}</text></svg>}
