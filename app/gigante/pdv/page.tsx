"use client";

import { useMemo, useState } from "react";

// ---------------- TIPOS ----------------
type Categoria = "FRANGO" | "ACOMPANHAMENTO" | "BEBIDA";

type Produto = {
  id: number;
  nome: string;
  categoria: Categoria;
  preco: number;
};

type ItemCarrinho = {
  id: number;
  nome: string;
  preco: number;
  quantidade: number;
};

// ---------------- MOCK DE PRODUTOS ----------------
// Depois podemos puxar isso da Supabase
const PRODUTOS: Produto[] = [
  { id: 1, nome: "Frango Assado Tradicional", categoria: "FRANGO", preco: 49.9 },
  { id: 2, nome: "Frango Assado Temperado", categoria: "FRANGO", preco: 54.9 },
  { id: 3, nome: "Meio Frango", categoria: "FRANGO", preco: 29.9 },

  { id: 10, nome: "Batata Frita Família", categoria: "ACOMPANHAMENTO", preco: 24.9 },
  { id: 11, nome: "Arroz Branco", categoria: "ACOMPANHAMENTO", preco: 12.9 },
  { id: 12, nome: "Farofa Especial", categoria: "ACOMPANHAMENTO", preco: 9.9 },
  { id: 13, nome: "Vinagrete", categoria: "ACOMPANHAMENTO", preco: 7.9 },

  { id: 20, nome: "Refrigerante 2L", categoria: "BEBIDA", preco: 12.9 },
  { id: 21, nome: "Refrigerante Lata", categoria: "BEBIDA", preco: 5.5 },
  { id: 22, nome: "Suco Natural 500ml", categoria: "BEBIDA", preco: 8.9 },
];

// ---------------- COMPONENTE PRINCIPAL ----------------
export default function PDVPage() {
  const [categoriaSelecionada, setCategoriaSelecionada] =
    useState<Categoria>("FRANGO");
  const [carrinho, setCarrinho] = useState<ItemCarrinho[]>([]);
  const [tipoAtendimento, setTipoAtendimento] = useState<
    "BALCAO" | "ENTREGA"
  >("BALCAO");
  const [nomeCliente, setNomeCliente] = useState("");
  const [observacoes, setObservacoes] = useState("");

  // Produtos filtrados pela categoria
  const produtosFiltrados = useMemo(
    () =>
      PRODUTOS.filter((p) => p.categoria === categoriaSelecionada),
    [categoriaSelecionada]
  );

  // Total do carrinho
  const total = useMemo(
    () =>
      carrinho.reduce(
        (acc, item) => acc + item.preco * item.quantidade,
        0
      ),
    [carrinho]
  );

  // ----------- AÇÕES DO CARRINHO -----------
  function adicionarProduto(produto: Produto) {
    setCarrinho((atual) => {
      const existente = atual.find((item) => item.id === produto.id);
      if (existente) {
        return atual.map((item) =>
          item.id === produto.id
            ? { ...item, quantidade: item.quantidade + 1 }
            : item
        );
      }

      return [
        ...atual,
        {
          id: produto.id,
          nome: produto.nome,
          preco: produto.preco,
          quantidade: 1,
        },
      ];
    });
  }

  function removerUmaUnidade(id: number) {
    setCarrinho((atual) =>
      atual
        .map((item) =>
          item.id === id
            ? { ...item, quantidade: item.quantidade - 1 }
            : item
        )
        .filter((item) => item.quantidade > 0)
    );
  }

  function removerItem(id: number) {
    setCarrinho((atual) => atual.filter((item) => item.id !== id));
  }

  function limparCarrinho() {
    setCarrinho([]);
  }

  // Geração de texto para WhatsApp (se quiser enviar resumo)
  function gerarMensagemWhatsApp() {
    const linhas: string[] = [];

    linhas.push("Gigante dos Assados – Pedido");
    linhas.push(`Tipo: ${tipoAtendimento === "BALCAO" ? "Retirada no balcão" : "Entrega"}`);
    if (nomeCliente) linhas.push(`Cliente: ${nomeCliente}`);
    linhas.push("");

    if (carrinho.length === 0) {
      linhas.push("Carrinho vazio");
    } else {
      carrinho.forEach((item) => {
        linhas.push(
          `• ${item.quantidade}x ${item.nome} – R$ ${(item.preco * item.quantidade)
            .toFixed(2)
            .replace(".", ",")}`
        );
      });
      linhas.push("");
      linhas.push(
        `*Total:* R$ ${total.toFixed(2).replace(".", ",")}`
      );
    }

    if (observacoes) {
      linhas.push("");
      linhas.push(`Obs: ${observacoes}`);
    }

    return encodeURIComponent(linhas.join("\n"));
  }

  // Link para enviar o pedido
  const whatsappLink = `https://wa.me/5511948163211?text=${gerarMensagemWhatsApp()}`;

  // ----------- RENDERIZAÇÃO -----------
  return (
    <main className="min-h-screen bg-[#f3f4f6]">
      {/* TOPO */}
      <header className="w-full bg-[#b91c1c] text-white shadow-md">
        <div className="max-w-6xl mx-auto flex items-center justify-between py-4 px-4">
          <div>
            <h1 className="text-xl md:text-2xl font-bold">
              PDV · Gigante dos Assados
            </h1>
            <p className="text-xs text-red-100">
              Operador: Caixa 01 · Hoje é dia de vender frango 🔥
            </p>
          </div>

          <div className="hidden md:flex gap-2 text-xs">
            <div className="px-3 py-1 rounded bg-red-700/80">
              F1 · Novo Pedido
            </div>
            <div className="px-3 py-1 rounded bg-red-700/80">
              F2 · Buscar Pedido
            </div>
            <div className="px-3 py-1 rounded bg-red-700/80">
              ESC · Cancelar
            </div>
          </div>
        </div>
      </header>

      {/* CONTEÚDO PRINCIPAL */}
      <div className="max-w-6xl mx-auto py-6 px-4 flex flex-col md:flex-row gap-6">
        {/* COLUNA ESQUERDA – PRODUTOS */}
        <section className="flex-1 bg-white rounded-2xl shadow-md p-4 flex flex-col">
          {/* Categorias */}
          <div className="flex gap-2 mb-4">
            <button
              onClick={() => setCategoriaSelecionada("FRANGO")}
              className={`px-4 py-2 rounded-full text-sm font-semibold border transition ${
                categoriaSelecionada === "FRANGO"
                  ? "bg-[#b91c1c] text-white border-[#b91c1c]"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
              }`}
            >
              Frangos
            </button>
            <button
              onClick={() => setCategoriaSelecionada("ACOMPANHAMENTO")}
              className={`px-4 py-2 rounded-full text-sm font-semibold border transition ${
                categoriaSelecionada === "ACOMPANHAMENTO"
                  ? "bg-[#b91c1c] text-white border-[#b91c1c]"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
              }`}
            >
              Acompanhamentos
            </button>
            <button
              onClick={() => setCategoriaSelecionada("BEBIDA")}
              className={`px-4 py-2 rounded-full text-sm font-semibold border transition ${
                categoriaSelecionada === "BEBIDA"
                  ? "bg-[#b91c1c] text-white border-[#b91c1c]"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
              }`}
            >
              Bebidas
            </button>
          </div>

          {/* Lista de produtos */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 flex-1 overflow-auto">
            {produtosFiltrados.map((produto) => (
              <button
                key={produto.id}
                onClick={() => adicionarProduto(produto)}
                className="bg-gray-50 border border-gray-200 hover:border-[#b91c1c] hover:bg-red-50 rounded-xl p-3 text-left flex flex-col justify-between shadow-sm transition"
              >
                <div>
                  <p className="font-semibold text-sm text-gray-800">
                    {produto.nome}
                  </p>
                </div>
                <p className="mt-2 text-[#b91c1c] font-bold text-sm">
                  R$ {produto.preco.toFixed(2).replace(".", ",")}
                </p>
              </button>
            ))}
          </div>
        </section>

        {/* COLUNA DIREITA – CARRINHO / RESUMO */}
        <aside className="w-full md:w-80 bg-white rounded-2xl shadow-md p-4 flex flex-col">
          {/* Tipo atendimento */}
          <div className="flex gap-2 mb-4">
            <button
              onClick={() => setTipoAtendimento("BALCAO")}
              className={`flex-1 px-3 py-2 rounded-lg text-xs font-semibold border transition ${
                tipoAtendimento === "BALCAO"
                  ? "bg-[#b91c1c] text-white border-[#b91c1c]"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
              }`}
            >
              Retirada no balcão
            </button>
            <button
              onClick={() => setTipoAtendimento("ENTREGA")}
              className={`flex-1 px-3 py-2 rounded-lg text-xs font-semibold border transition ${
                tipoAtendimento === "ENTREGA"
                  ? "bg-[#b91c1c] text-white border-[#b91c1c]"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
              }`}
            >
              Entrega
            </button>
          </div>

          {/* Nome cliente */}
          <input
            type="text"
            value={nomeCliente}
            onChange={(e) => setNomeCliente(e.target.value)}
            placeholder="Nome do cliente (opcional)"
            className="w-full mb-3 px-3 py-2 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#b91c1c]"
          />

          {/* CARRINHO */}
          <div className="flex-1 border border-gray-200 rounded-xl p-3 mb-3 overflow-auto">
            <h2 className="text-sm font-semibold mb-2 text-gray-700">
              Itens do pedido
            </h2>

            {carrinho.length === 0 ? (
              <p className="text-xs text-gray-400">
                Nenhum item no carrinho. Toque nos produtos para adicionar.
              </p>
            ) : (
              <ul className="space-y-2">
                {carrinho.map((item) => (
                  <li
                    key={item.id}
                    className="flex items-center justify-between gap-2 text-xs border-b border-gray-100 pb-1"
                  >
                    <div className="flex-1">
                      <p className="font-medium text-gray-800">
                        {item.nome}
                      </p>
                      <p className="text-gray-500">
                        {item.quantidade}x · R${" "}
                        {item.preco.toFixed(2).replace(".", ",")}
                      </p>
                    </div>

                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => removerUmaUnidade(item.id)}
                        className="w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"
                      >
                        -
                      </button>
                      <button
                        onClick={() => adicionarProduto({
                          id: item.id,
                          nome: item.nome,
                          preco: item.preco,
                          categoria: "FRANGO", // categoria não importa aqui
                        })}
                        className="w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"
                      >
                        +
                      </button>
                    </div>

                    <div className="text-right">
                      <p className="font-semibold text-gray-800">
                        R${" "}
                        {(item.preco * item.quantidade)
                          .toFixed(2)
                          .replace(".", ",")}
                      </p>
                      <button
                        onClick={() => removerItem(item.id)}
                        className="text-[10px] text-red-500 hover:underline"
                      >
                        remover
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Observações */}
          <textarea
            value={observacoes}
            onChange={(e) => setObservacoes(e.target.value)}
            placeholder="Observações do pedido (ex: sem pimenta, bem passado...)"
            className="w-full mb-3 px-3 py-2 rounded-lg border border-gray-300 text-xs min-h-[60px] resize-none focus:outline-none focus:ring-2 focus:ring-[#b91c1c]"
          />

          {/* TOTAL & AÇÕES */}
          <div className="mt-auto">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-600">Total</span>
              <span className="text-xl font-bold text-[#b91c1c]">
                R$ {total.toFixed(2).replace(".", ",")}
              </span>
            </div>

            <div className="flex gap-2">
              <button
                onClick={limparCarrinho}
                className="flex-1 px-3 py-2 rounded-lg border border-gray-300 text-xs font-semibold text-gray-700 hover:bg-gray-50"
              >
                Cancelar
              </button>

              <a
                href={whatsappLink}
                target="_blank"
                className="flex-1 px-3 py-2 rounded-lg bg-[#16a34a] text-white text-xs font-semibold text-center hover:bg-[#15803d]"
              >
                Enviar no WhatsApp
              </a>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}