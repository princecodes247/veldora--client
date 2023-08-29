import "@/styles/globals.css";
import Providers from "@/utils/provider";

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
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
