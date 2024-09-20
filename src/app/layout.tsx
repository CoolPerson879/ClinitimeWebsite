// app/layout.tsx
import "./globals.css"; // Global styles
import Navbar from "./components/Navbar";

export const metadata = {
  title: "Clinitime - Revolutionize Your Clinical Hours",
  description:
    "Revolutionize your clinical hours with Clinitime&apos;s features.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.png" type="image/png" />
      </head>
      <body>
        <Navbar />
        {children}
        {/* Footer is placed here */}
      </body>
    </html>
  );
}
