import type { Metadata } from "next";
import { Roboto, Nunito } from "next/font/google";
import "../style/globals.css";
import Navbar from "../components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { AuthProvider } from "@/contexts/authContext";

const primaryFont = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-primary",
});
const secondaryFont = Nunito({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-secondary",
});

export const metadata: Metadata = {
  title: "My First Next App",
  description: "Creando mi página de Next",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthProvider>
      <html lang="en">
        {/* className= {`${primaryFont.variable} ${secondaryFont.variable}`} */}
        <body className={`${primaryFont.className} min-h-screen flex flex-col`} >
          <nav>
            <Navbar />
          </nav>
          <main className="container flex-grow">{children}</main>
          <Footer />
        </body>
      </html>
    </AuthProvider>
  );
}
