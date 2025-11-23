import "./globals.css";

export const metadata = {
  title: "Web Sekolah",
  description: "Template Web Sekolah",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
