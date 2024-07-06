import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar"
import CardContextProvider from "@/contexts/cartContext";
import SideBar from "@/components/SideBar";
import { auth } from "@/auth";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ecommerce",
  description: "Welcome to our ecommerce store",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const session = await auth();

  return (
    <html lang="en">
      <CardContextProvider>
      <body className={inter.className}>
        <Navbar session = {session}/>
        <SideBar session = {session}/>
        {children}
        </body>
      </CardContextProvider>
     
    </html>
  );
}
