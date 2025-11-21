"use client";

import { useEffect, useState } from "react";
import MenuButton from "../../../components/gigante/MenuButton";
import CardFinanceiro from "../../../components/gigante/CardFinanceiro";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
  Legend
);

export default function FinanceiroGigante() {
  const [loading, setLoading] = useState(true);

  // MOCKS (depois vamos puxar da Supabase)
  const faturamentoTotal = 6383192;
  const margemBruta = 73.5;
  const endividamentoTotal = 1783809;
  const pontoEquilibrio = 243594;

  const meses = ["jan", "fev", "mar", "abr", "mai"];
  const valores = [600, 350, 800, 760, 900];

  useEffect(() => {
    setTimeout(() => setLoading(false), 600);
  }, []);

  if (loading)
    return (
      <div className="min-h-screen bg-[#020617] flex items-center justify-center">
        <p className="text-gray-300">Carregando painel financeiro...</p>
      </div>
    );

  const chartData = {
    labels: meses,
    datasets: [
      {
        label: "Faturamento (R$ mil)",
        data: valores,
        borderColor: "#F97316",
        backgroundColor: "rgba(249,115,22,0.15)",
        tension: 0.35,
        fill: true,
        pointRadius: 4,
      },
    ],
  };

  return (
    <main className="min-h-screen bg-[#020617] text-white flex">

      {/* MENU LATERAL */}
      <aside className="hidden md:flex w-72 bg-[#0f172a] border-r border-[#1e293b] flex-col p-6 shadow-xl">
        <h2 className="text-xl font-bold mb-4 text-center">
          Gigante dos Assados
        </h2>

        <MenuButton texto="Dashboard" ativo />
        <MenuButton texto="Faturamento Total" />
        <MenuButton texto="Faturamento Mensal" />
        <MenuButton texto="Endividamento" />
        <MenuButton texto="Ponto de Equilíbrio" />
        <MenuButton texto="Relatórios" />
      </aside>

      {/* CONTEÚDO */}
      <section className="flex-1 p-10">
        <h1 className="text-2xl font-bold mb-6">📊 Painel Financeiro</h1>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
          <CardFinanceiro
            label="Faturamento Total"
            valor={faturamentoTotal}
            color="#F97316"
            detalhe="+12% nos últimos 12 meses"
          />

          <CardFinanceiro
            label="Margem Bruta"
            valor={`${margemBruta}%`}
            color="#22C55E"
            detalhe="Acima da meta de 65%"
          />

          <CardFinanceiro
            label="Endividamento Total"
            valor={endividamentoTotal}
            color="#E0A5E9"
            detalhe="Inclui fornecedores e impostos"
          />

          <CardFinanceiro
            label="Ponto de Equilíbrio"
            valor={pontoEquilibrio}
            color="#A855F7"
            detalhe="Faturamento mínimo mensal"
          />
        </div>

        {/* GRÁFICO */}
        <div className="bg-[#0f172a] rounded-2xl shadow-xl border border-[#1e293b] p-6">
          <h2 className="text-lg font-semibold mb-4">📈 Faturamento — Últimos meses</h2>
          <Line data={chartData} />
        </div>
      </section>
    </main>
  );
}