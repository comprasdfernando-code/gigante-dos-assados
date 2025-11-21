import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0f0f0f] text-white flex flex-col items-center py-10 px-6">
      
      {/* LOGO / BANNER */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold tracking-wide">
          Gigante dos Assados 🍗🔥
        </h1>
        <p className="text-gray-300 mt-2 text-lg">
          Grande no sabor, gigante na experiência.
        </p>
      </div>

      {/* IMAGEM PRINCIPAL */}
      <img
        src="/frango.png"
        alt="Gigante"
        className="w-64 h-auto rounded-lg shadow-lg border border-[#f97316]/40 mb-8"
      />

      {/* BOTÕES */}
      <div className="w-full max-w-md flex flex-col gap-4">

        <Link
          href="/gigante"
          className="bg-[#f97316] hover:bg-[#ea580c] transition text-white py-4 text-center rounded-xl text-xl font-semibold shadow-lg"
        >
          🍗 Fazer Pedido
        </Link>

        <Link
          href="/gigante/pdv"
          className="bg-[#27272a] hover:bg-[#3f3f46] transition text-white py-4 text-center rounded-xl text-xl font-semibold shadow-lg border border-gray-600"
        >
          🧾 PDV (Caixa)
        </Link>

        <Link
          href="/gigante/financeiro"
          className="bg-[#1e40af] hover:bg-[#1d4ed8] transition text-white py-4 text-center rounded-xl text-xl font-semibold shadow-lg"
        >
          📊 Financeiro
        </Link>

      </div>

      {/* FOOTER */}
      <footer className="mt-12 text-gray-500 text-sm">
        Sistema desenvolvido por Fernando Tech 💛
      </footer>

    </main>
  );
}