import { buscarPreco } from "./app.js";
import { formatarMoeda } from "./formatarMoeda.js";

async function atualizarDados() {
  const dados = await buscarPreco()

  exibirDados(dados) 

}

function exibirDados(dados) {
  const cryptoList = document.getElementById('crypto-list') // Seleciona o contêiner da lista
  
  try {
    
    // Percorre cada par [nomeDaMoeda, dadosDaMoeda] no objeto
    Object.entries(dados).forEach(([nomeMoeda, valor]) => {
      
      cryptoList.innerHTML += `
      <div class="crypto-item">
        <p class="crypto-name">${nomeMoeda}</p>
        <p class="crypto-price">${formatarMoeda(valor.brl)}</p>
      </div>      
      `
    });    
    
    
  } catch (error) {
    console.error(`${error} Erro na consulta`)
  }
  
}

document.addEventListener('DOMContentLoaded', () => atualizarDados() )

document.getElementById('update-button').addEventListener('click', ()  => {
  atualizarDados()
})