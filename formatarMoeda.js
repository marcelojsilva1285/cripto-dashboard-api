export function formatarMoeda(valor) {
  const formatadorReal = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
  const valorFormatado = formatadorReal.format(valor);

  return valorFormatado
}

