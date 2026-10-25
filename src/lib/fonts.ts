import { Archivo, Geist, Geist_Mono } from "next/font/google";

// Display: Archivo's width axis lets headlines run slightly expanded (see .font-display).
const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  axes: ["wdth"],
  display: "swap",
});

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

/** className for <html>: exposes the three font CSS variables. */
export const fontVariables = `${archivo.variable} ${geist.variable} ${geistMono.variable}`;
