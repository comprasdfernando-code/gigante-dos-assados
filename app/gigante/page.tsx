"use client";

import Image from "next/image";
import NavButton from "../../components/gigante/NavButton";

export default function GiganteHome() {
  return (
    <main className="min-h-screen bg-[#fafafa]">

      {/* TOPO */}
      <header className="w-full bg-[#b91c1c] text-white shadow-md">
        <div className="max-w-5xl mx-auto flex items-center justify-between py-4 px-4">
          <div className="flex items-center gap-3">
            <Image
              src="/frango-icon.png"
              width={50}
              height={50}
              alt="Frango"
              className="rounded-lg"
            />
            <h1 className="text-xl md:text-2xl font-bold">
              Gigante dos Assados
            </h1>
          </div>

          <nav className="hidden md:flex gap-3">
            <NavButton href="/gigante/pdv">PDV</NavButton>
            <NavButton href="/gigante/produtos">Produtos</NavButton>
            <NavButton href="/gigante/financeiro">Financeiro</NavButton>
          </nav>
        </div>
      </header>

      {/* CONTEÚDO */}
      <section className="max-w-5xl mx-auto px-4 py-10">
        <h2 className="text-center text-3xl font-bold text-[#b91c1c]">
          Gigante dos Assados
        </h2>
        <p className="text-center text-gray-600">
          Grande no sabor 🔥
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          <div className="text-center">
            <Image src="/frango1.jpg" width={350} height={300} alt="Frango Assado" className="rounded-lg shadow" />
            <p className="mt-2 font-medium">Frango Assado — R$ 49,90</p>
          </div>

          <div className="text-center">
            <Image src="/combo.jpg" width={350} height={300} alt="Combo Família" className="rounded-lg shadow" />
            <p className="mt-2 font-medium">Combo Família — R$ 79,90</p>
          </div>

          <div className="text-center">
            <Image src="/costela.jpg" width={350} height={300} alt="Costela no Bafo" className="rounded-lg shadow" />
            <p className="mt-2 font-medium">Costela no Bafo — R$ 49,90</p>
          </div>
        </div>
      </section>

      {/* BOTÃO FLUTUANTE DO WHATSAPP */}
      <a
        href="https://wa.me/5511948163211?text=Olá!%20Quero%20fazer%20um%20pedido%20🍗"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 shadow-xl rounded-full p-4 text-white flex items-center justify-center"
      >
        <Image src="/frango-icon.png" width={38} height={38} alt="WhatsApp" />
      </a>

    </main>
  );
}