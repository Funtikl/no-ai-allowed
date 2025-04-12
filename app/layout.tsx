import "./globals.css";
import Header from "./Header";
import Footer from "./Footer";
import type { ReactNode } from "react";
export const metadata = {
  title: "No AI Allowed",
  description: "Analog Minds, Digital Stage",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="layout-wrapper">
          <Header />
          <main className="page-content">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
