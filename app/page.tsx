export default function Home() {
  return (
    <main style={{ padding: 40 }}>
      <h1>Gigante dos Assados 🍗🔥</h1>
      <p>Escolha uma opção:</p>

      <ul>
        <li><a href="/gigante">Página Inicial</a></li>
        <li><a href="/gigante/pdv">PDV</a></li>
        <li><a href="/gigante/financeiro">Financeiro</a></li>
      </ul>
    </main>
  );
}