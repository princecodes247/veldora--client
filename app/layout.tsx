import "@/styles/globals.css";
import Providers from "@/utils/provider";
import { useParams } from "next/navigation";

export const metadata = {
  title: "Veldora Dashboard",
  description: "Supercharge your projects",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers attribute="class" defaultTheme="light">
          {children}
        </Providers>
      </body>
    </html>
  );
}
