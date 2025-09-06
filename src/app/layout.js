import "./globals.css";

export const metadata = {
  title: "Finance Tracker",
  description: "Personal finance tracker",
};

// keep it very barebones
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}