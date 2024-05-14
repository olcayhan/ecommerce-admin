import Sidebar from "@/components/Sidebar";
import { fonts } from "./fonts";
import { Providers } from "./providers";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={fonts.rubik.variable}>
      <body>
        <Providers>
          <Sidebar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
