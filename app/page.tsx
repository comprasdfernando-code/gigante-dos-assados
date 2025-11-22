"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const fotosCarrossel = [
    "/gigante/torresmo-rolo-assador.webp",
    "/gigante/torresmo-inteiro.webp",
    "/gigante/torresmo-fatiado-1.webp",
    "/gigante/torresmo-fatiado-2.webp",
    "/gigante/coxa-frango.webp",
    "/gigante/carne-fatiada.webp",
  ];

  const [index, setIndex] = useState(0);

  function next() {
    setIndex((i) => (i + 1) % fotosCarrossel.length);
  }
  function prev() {
    setIndex((i) => (i - 1 + fotosCarrossel.length) % fotosCarrossel.length);
  }

  return (
    <main className="bg-yellow-100 min-h-screen pb-20">
      
      {/* HERO */}
      <section className="relative w-full h-[450px] bg-yellow-400 flex items-center justify-center text-center">
        <Image
          src="/gigante/logo.webp"
          alt="Gigante dos Assados"
          width={350}
          height={350}
          className="drop-shadow-xl"
        />

        <h1 className="absolute bottom-5 text-4xl font-extrabold text-red-700 drop-shadow-lg">
          Grande no Sabor!
        </h1>
      </section>

      {/* CARROSSEL */}
      <section className="mt-10 px-4">
        <h2 className="text-3xl font-bold text-center mb-4 text-red-800">
          Nossos Assados
        </h2>

        <div className="relative w-full max-w-3xl mx-auto">
          <Image
            src={fotosCarrossel[index]}
            width={1200}
            height={700}
            alt="Carrossel"
            className="rounded-xl shadow-xl"
          />

          {/* Botões */}
          <button
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 text-white p-3 rounded-full"
          >
            ◀
          </button>

          <button
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 text-white p-3 rounded-full"
          >
            ▶
          </button>
        </div>
      </section>

      {/* SEÇÕES DE DESTAQUE */}
      <section className="mt-14 px-5 grid grid-cols-1 md:grid-cols-2 gap-6">

        <div className="p-6 bg-white rounded-xl shadow-xl border-2 border-yellow-400">
          <h3 className="text-2xl font-bold text-red-700 mb-3 flex items-center gap-2">
            🔥 Sobre Nós
          </h3>
          <p className="text-lg">
            Casa de carnes e frango assado com os melhores cortes, torresmo de rolo crocante e aquele sabor de domingo!
          </p>
        </div>

        <div className="p-6 bg-white rounded-xl shadow-xl border-2 border-yellow-400">
          <h3 className="text-2xl font-bold text-red-700 mb-3 flex items-center gap-2">
            🕒 Horário de Funcionamento
          </h3>
          <p className="text-lg">
            Sábados, domingos e feriados <br />
            Das <b>10h às 15h</b>
          </p>
        </div>

        <div className="p-6 bg-white rounded-xl shadow-xl border-2 border-yellow-400">
          <h3 className="text-2xl font-bold text-red-700 mb-3 flex items-center gap-2">
            📍 Endereço
          </h3>
          <p className="text-lg">
            Avenida Sapopemba 16015 — São Paulo, SP
          </p>
          <a
            href="https://maps.app.goo.gl/xxxx"
            className="mt-3 inline-block bg-red-600 text-white px-4 py-2 rounded-lg shadow-md"
          >
            Abrir no Google Maps
          </a>
        </div>

        <div className="p-6 bg-white rounded-xl shadow-xl border-2 border-yellow-400">
          <h3 className="text-2xl font-bold text-red-700 mb-3 flex items-center gap-2">
            📞 Contato
          </h3>
          <p className="text-lg">+55 11 94816-3211</p>

          <a
            href="https://wa.me/5511948163211"
            className="mt-3 inline-block bg-green-600 text-white px-4 py-2 rounded-lg shadow-md"
          >
            Pedir pelo WhatsApp
          </a>
        </div>
      </section>

      {/* BANNER CARDÁPIO */}
      <section className="mt-16 px-4">
        <Image
          src="/gigante/banner-cardapio.webp"
          width={1200}
          height={1200}
          alt="Cardápio"
          className="rounded-xl shadow-xl mx-auto"
        />
      </section>
    </main>
  );
}
