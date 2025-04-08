export const metadata = {
  title: 'Calculadora de Antecipação',
  description: 'Simule taxas de antecipação de forma simples e rápida.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head />
      <body>{children}</body>
    </html>
  );
}
