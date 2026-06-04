import "./globals.css";

import localFont from "next/font/local";
import { Nunito } from "next/font/google";

const myFont = localFont({
  src: [
    {
      path: "../public/fonts/DkCoolCrayon-xJyV.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/DkCoolCrayon-xJyV.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-myfont",
});

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-nunito",
});

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${myFont.variable} ${nunito.variable}`}
    >
      <body className="min-h-full flex flex-col bg-[#FEFAF3]">
        {children}
      </body>
    </html>
  );
}