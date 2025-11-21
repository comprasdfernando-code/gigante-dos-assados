export const metadata = {
  title: "Gigante dos Assados",
  description: "Sistema de pedidos do Gigante dos Assados",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}