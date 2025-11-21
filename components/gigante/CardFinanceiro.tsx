"use client";

type CardFinanceiroProps = {
  label: string;
  valor: string | number;
  color: string;
  detalhe?: string;
};

export default function CardFinanceiro({
  label,
  valor,
  color,
  detalhe,
}: CardFinanceiroProps) {
  return (
    <div className="p-4 rounded-xl shadow-md bg-[#111827] border border-[#1F2937]">
      <p className="text-gray-400 text-sm">{label}</p>

      <h2
        className="text-2xl font-bold mt-2"
        style={{ color }}
      >
        {valor}
      </h2>

      {detalhe && (
        <p className="text-gray-500 text-xs mt-1">📌 {detalhe}</p>
      )}
    </div>
  );
}