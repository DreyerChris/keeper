import type { Metadata } from "next";
import { Almarai } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Disclaimer from "@/components/ui/Disclaimer";

const almarai = Almarai({
  weight: ["300", "400", "700", "800"],
  subsets: ["arabic"],
});

export const metadata: Metadata = {
  title: "Seshat",
  description:
    "Dropzone for temporary storage of strings and files with cross device compatibility",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${almarai.className} bg-white`}>
        <div className="flex flex-col h-screen">
          <div className="w-56 h-56 relative mx-auto">
            <Image src="/seshat.svg" alt="Seshat Logo" fill />
          </div>
          {children}
          <Disclaimer />
        </div>
      </body>
    </html>
  );
}
