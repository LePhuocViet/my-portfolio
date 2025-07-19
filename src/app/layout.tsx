export const metadata = {
  title: "Le Phuoc Viet",
  description: "Showcasing the work of Le Phuoc Viet",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
