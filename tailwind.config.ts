import type { Config } from "tailwindcss";
export default { content:["./app/**/*.{ts,tsx}","./components/**/*.{ts,tsx}"],
 theme:{extend:{colors:{ink:"#0b0d12",paper:"#f6f7f9",acc:"#46e0c0",acc2:"#5b8cff"},fontFamily:{sans:["Inter","Manrope","system-ui","sans-serif"]}}},plugins:[]} satisfies Config;
