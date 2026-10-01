import type { Metadata, Viewport } from "next";
import "./globals.css";
import { SITE } from "@/lib/data";
import { Providers } from "@/components/ui/Reveal";
export const metadata:Metadata={metadataBase:new URL(SITE.url),title:SITE.title,description:SITE.description,alternates:{canonical:"/"},
 openGraph:{title:SITE.title,description:SITE.description,url:SITE.url,siteName:"CompanyFlow",locale:"en_GB",type:"website"},
 twitter:{card:"summary_large_image",title:SITE.title,description:SITE.description},icons:{icon:"/icon.svg"}};
export const viewport:Viewport={width:"device-width",initialScale:1,viewportFit:"cover",themeColor:"#0b0d12"};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en-GB"><body><Providers>{children}</Providers></body></html>}
