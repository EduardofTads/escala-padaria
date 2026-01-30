export default function Home() {
  return (
    <main style={{ padding: 40, fontFamily: "Arial, sans-serif" }}>
      <h1>Escala de Trabalho – Padaria</h1>

      <p>
        Unidade: Natal / RN <br />
        Escala 6x1 – Domingos intercalados
      </p>

      <h2>Aviso do Mês</h2>
      <p>
        Domingo com funcionamento reduzido.  
        Feriados com equipes alternadas.
      </p>

      <h2>Frente de Loja – Manhã (Equipe A)</h2>
      <ul>
        <li>Funcionário 1</li>
        <li>Funcionário 2</li>
        <li>Funcionário 3</li>
      </ul>

      <h2>Frente de Loja – Tarde (Equipe B)</h2>
      <ul>
        <li>Funcionário 4</li>
        <li>Funcionário 5</li>
        <li>Funcionário 6</li>
      </ul>

      <h2>Cozinha (Equipe C)</h2>
      <ul>
        <li>Funcionário 7</li>
        <li>Funcionário 8</li>
      </ul>

      <hr />

      <p style={{ fontSize: 12, color: "#555" }}>
        Escala informativa – alterações somente pela administração.
      </p>
    </main>
  );
}
