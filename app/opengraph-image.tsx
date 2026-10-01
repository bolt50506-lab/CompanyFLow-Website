import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "CompanyFlow — Digital Systems That Make Business Flow";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "64px", background: "#0b0d12", color: "#f6f7f9", fontFamily: "sans-serif" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "18px", fontSize: 32, fontWeight: 700 }}>
        <div style={{ width: 44, height: 44, borderRadius: 12, background: "linear-gradient(135deg,#46e0c0,#5b8cff)", display: "flex" }} />
        <span>Company<span style={{ color: "#46e0c0", fontWeight: 400 }}>Flow</span></span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", maxWidth: 980 }}>
        <div style={{ fontSize: 68, lineHeight: 1.05, fontWeight: 700, letterSpacing: "-3px" }}>Your business.<br /><span style={{ color: "#46e0c0" }}>Better connected.</span></div>
        <div style={{ marginTop: 26, fontSize: 25, color: "#9aa3b2" }}>Websites · Software · AI · Automation</div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", color: "#687182", fontSize: 20 }}>
        <span>Digital systems that make business flow.</span>
        <span>companyflow.co.uk</span>
      </div>
    </div>,
    { ...size }
  );
}