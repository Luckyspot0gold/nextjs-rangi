export const metadata = {
  title: "Rangi’s Heartbeat",
  description: "Next.js Vercel deployment for Luckyspot0gold"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
