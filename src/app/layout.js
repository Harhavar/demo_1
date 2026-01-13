
// import { Inter } from "next/font/google";
// import { Toaster } from "react-hot-toast";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Vardhan Speech Language Therapy",
//   description: "Better Communicate",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <Toaster position="top-right" />
//       <body >{children}</body>
//     </html>
//   );
// }
import { ChakraProvider } from "@chakra-ui/react";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Vardhan Speech Language Therapy",
  description:
    "Vardhan Speech Therapy offers expert speech, language, voice, and developmental therapy for children and adults.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ChakraProvider>
          {children}
          <Toaster position="top-right" />
        </ChakraProvider>
      </body>
    </html>
  );
}
