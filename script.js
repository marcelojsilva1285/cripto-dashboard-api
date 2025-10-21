const moedas = ['bitcoin', 'ethereum', 'cardano', 'degecoin','solana', 'litecoin']

const API_URL = 'https://api.coingecko.com/api/v3/simple/price'

async function buscarPreco() {
  
  const ids = moedas.join(',')

  const URL = `${API_URL}?vs_currencies=brl&ids=${ids}`

  const reponse = await fetch(URL)
  const dados = await reponse.json()

  console.log(dados)
}

buscarPreco()