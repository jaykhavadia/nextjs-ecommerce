import { AuthProvider } from "@/contexts/AuthContext";
import Navbar from "@/components/Navbar";
import { ReactNode } from "react";
import ThemeRegistry from "@/components/ThemeRegistry";
import { CartProvider } from "@/contexts/CartContext";

export const metadata = {
  title: "E-Commerce App",
  description: "Next.js + MUI + App Router",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>  
        <ThemeRegistry>
          <AuthProvider>
            <CartProvider>
              <Navbar />
              <main
                style={{
                  padding: "2rem",
                  maxWidth: "1200px",
                  margin: "0 auto",
                }}
              >
                {children}
              </main>
            </CartProvider>
          </AuthProvider>
        </ThemeRegistry>
      </body>
    </html>
  );
}
