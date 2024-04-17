import type { Metadata } from "next";
import "./globals.css";

// const zen = Noto_Sans({
//   subsets: ["cyrillic", "latin"],
//   weight: ["300", "400", "500", "600", "700"],
//   display: "swap",
//   variable: "--font-zen",
//   style: ["normal"],
// });

export const metadata: Metadata = {
  title: "FinancePro",
  description: "Best Fin application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
