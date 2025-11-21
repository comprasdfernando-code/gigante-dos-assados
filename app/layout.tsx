import "./globals.css";

export const metadata = {
  title: "Gigante dos Assados",
  description: "Sistema do Gigante dos Assados — PDV, Financeiro e Pedidos",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="bg-[#0f172a] text-white min-h-screen font-sans antialiased">

        {/* HEADER TOP */}
        <header className="w-full bg-gradient-to-r from-orange-700 to-orange-500 p-4 shadow-xl sticky top-0 z-50">
          <div className="max-w-6xl mx-auto flex items-center justify-between">

            {/* LOGO */}
            <h1 className="text-2xl font-extrabold tracking-wide">
              🍗 Gigante dos Assados
            </h1>

            {/* MENU */}
            <nav className="hidden md:flex gap-6 text-lg font-medium">
              <a href="/gigante" className="hover:opacity-80 transition">Início</a>
              <a href="/gigante/pdv" className="hover:opacity-80 transition">PDV</a>
              <a href="/gigante/financeiro" className="hover:opacity-80 transition">Financeiro</a>
            </nav>

            {/* MENU MOBILE (futuro) */}
            <div className="md:hidden text-3xl">☰</div>

          </div>
        </header>

        {/* CONTEÚDO DAS PÁGINAS */}
        {children}

        {/* FOOTER COM MAPA */}
<footer className="w-full mt-12 bg-[#111827] text-gray-300 py-10 px-4 border-t border-gray-700">
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

    {/* SOBRE */}
    <div>
      <h2 className="text-xl font-bold mb-3">Gigante dos Assados 🍗🔥</h2>
      <p className="text-gray-400">
        A melhor casa de carnes e frangos assados da região.
        Sabor, qualidade e tradição todos os finais de semana.
      </p>
    </div>

    {/* CONTATO */}
    <div>
      <h2 className="text-xl font-bold mb-3">Contato</h2>
      <p>📞 WhatsApp: <a href="https://wa.me/5511948163211" className="text-orange-400">11 94816-3211</a></p>
      <p>📍 Av. Sapopemba, 16015 – São Paulo, SP</p>
      <p>🕒 Sáb / Dom / Feriados • 10h às 15h</p>

      <a
        href="https://www.google.com/maps?q=Av.+Sapopemba+16015,+São+Paulo"
        target="_blank"
        className="inline-block mt-3 text-orange-400 hover:text-orange-300 underline"
      >
        ➜ Abrir no Google Maps
      </a>
    </div>

    {/* MAPA INTEGRADO */}
    <div>
      <h2 className="text-xl font-bold mb-3">Localização</h2>

      <div className="rounded-lg overflow-hidden border border-gray-600 shadow-lg">
        <iframe
          width="100%"
          height="200"
          loading="lazy"
          allowFullScreen
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.9112463458106!2d-46.47622032500332!3d-23.611721863961616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce69cfb8b92d2f%3A0xa647df21e38ba66e!2sAv.%20Sapopemba%2C%2016015%20-%20Jardim%20Rodolfo%20Pirani%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
        ></iframe>
      </div>
    </div>

  </div>

  <div className="text-center mt-10 text-gray-500">
    © {new Date().getFullYear()} Gigante dos Assados — Todos os direitos reservados.
  </div>
</footer>

        {/* BOTÃO FLUTUANTE NEON */}
        <a
          href="https://wa.me/5511948163211?text=Olá!%20Quero%20fazer%20meu%20pedido%20🍗🔥"
          target="_blank"
          className="fixed bottom-6 right-6 
                     bg-orange-600 text-white font-bold text-lg 
                     px-6 py-3 rounded-full shadow-xl flex items-center gap-2
                     transition-all duration-300 z-50"
          style={{
            animation: "bounceStrong 1.8s infinite, neonPulse 1.5s infinite",
          }}
        >
          <span style={{ animation: "neonGlow 1.5s infinite alternate" }}>
            🍗 FAÇA SEU PEDIDO
          </span>
        </a>

      </body>
    </html>
  );
}