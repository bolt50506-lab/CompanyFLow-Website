import { NextResponse } from "next/server";
// Integration point: set CONTACT_WEBHOOK_URL (email service / CRM / automation webhook).
export async function POST(req:Request){
 const data=await req.json().catch(()=>null);
 if(!data?.email||!data?.name||!data?.description) return NextResponse.json({error:"Missing fields"},{status:400});
 const url=process.env.CONTACT_WEBHOOK_URL;
 if(!url) return NextResponse.json({error:"not_connected"},{status:501});
 const r=await fetch(url,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(data)});
 return r.ok?NextResponse.json({ok:true}):NextResponse.json({error:"upstream"},{status:502});
}
