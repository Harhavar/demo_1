
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "vardhan SLP",
  description: "Communicate Better",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Toaster position="top-right" />
      <body >{children}</body>
    </html>
  );
}
