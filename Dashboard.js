import React from 'react';
import data from '../data/cartoes.json';
export default function Dashboard() {
  return (
    <div className="p-6 font-sans">
      <h1 className="text-2xl font-bold mb-4">Controle de Cartões</h1>
      <table className="table-auto w-full border">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 border">Banco</th>
            <th className="p-2 border">Bandeira</th>
            <th className="p-2 border">Titular</th>
            <th className="p-2 border">Vencimento</th>
            <th className="p-2 border">Valor</th>
            <th className="p-2 border">Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((linha, index) => (
            <tr key={index} className="text-center">
              <td className="border p-2">{linha.BANCO}</td>
              <td className="border p-2">{linha.BANDEIRA}</td>
              <td className="border p-2">{linha.TITULAR}</td>
              <td className="border p-2">{linha.VENCIMENTO}</td>
              <td className="border p-2">R$ {linha.VALOR_TOTAL?.toFixed(2)}</td>
              <td className={`border p-2 ${linha.STATUS === 'PAGO' ? 'text-green-600' : 'text-red-600'}`}>
                {linha.STATUS || 'PENDENTE'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}