'use client';
import { useState } from "react";

export default function Home() {
  const [valorVenda, setValorVenda] = useState(0);
  const [parcelas, setParcelas] = useState(1);
  const [valorLiquidoTotal, setValorLiquidoTotal] = useState(0);
  const [valorAntecipado, setValorAntecipado] = useState(0);

  const custoAntecipacao = valorAntecipado - valorLiquidoTotal;
  const custoPorParcela = custoAntecipacao / parcelas;
  const taxaEfetivaCalculada = (custoAntecipacao / valorVenda) * 100;

  return (
    <main className="max-w-xl mx-auto p-6 space-y-6">
      <h1 className="text-2xl font-bold text-center">Calculadora de Antecipação</h1>
      <div className="space-y-4">
        <label className="block">
          Valor da Venda:
          <input type="number" className="w-full border p-2 rounded" value={valorVenda} onChange={(e) => setValorVenda(parseFloat(e.target.value) || 0)} />
        </label>
        <label className="block">
          Número de Parcelas:
          <input type="number" className="w-full border p-2 rounded" value={parcelas} onChange={(e) => setParcelas(parseInt(e.target.value) || 1)} />
        </label>
        <label className="block">
          Valor líquido (sem antecipar):
          <input type="number" className="w-full border p-2 rounded" value={valorLiquidoTotal} onChange={(e) => setValorLiquidoTotal(parseFloat(e.target.value) || 0)} />
        </label>
        <label className="block">
          Valor antecipado (informado pelo banco):
          <input type="number" className="w-full border p-2 rounded" value={valorAntecipado} onChange={(e) => setValorAntecipado(parseFloat(e.target.value) || 0)} />
        </label>
      </div>

      <div className="border-t pt-4 space-y-2">
        <p><strong>Venda Total:</strong> R$ {valorVenda.toFixed(2)}</p>
        <p><strong>Parcelas:</strong> {parcelas}</p>
        <p><strong>Valor líquido (sem antecipar):</strong> R$ {valorLiquidoTotal.toFixed(2)}</p>
        <p><strong>Valor antecipado:</strong> R$ {valorAntecipado.toFixed(2)}</p>
        <p><strong>Custo da antecipação:</strong> R$ {custoAntecipacao.toFixed(2)}</p>
        <p><strong>Custo por parcela:</strong> R$ {custoPorParcela.toFixed(2)}</p>
        <p><strong>% Efetiva da antecipação:</strong> {taxaEfetivaCalculada.toFixed(2)}%</p>
      </div>
    </main>
  );
}
