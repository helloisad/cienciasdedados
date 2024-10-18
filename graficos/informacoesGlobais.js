const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'


async function visualizarInformacoesGlobais(){
    const res=await fetch(url)
    const dados=res.json()
    const paragrafo=document.createElement('p')
    paragrafo.classList.add('graficos-container__texto')
    paragrafo.innerHTML=`você sabia que o mundo tem <span>${dados.total_pessoas_mundo}</span> de pessoas e que aproximadamente <span>${dados.total_pessoas_conectadas}</span> de pessoas nas redes sociais e média <span>${dados.tempo_medio}</span> horas conectadas.`
    

const container=document.getElementById('graficos-container')
container.appendChild(paragrafo)

}
visualizarInformacoesGlobais()