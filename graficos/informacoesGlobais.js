const url ='https;//raw.githubusercontent.com/guilhermeorails/api/main/dados-globais.json'
async function visualizarInformacoesGlobais(){
    const res=await fetch(url)
    const dados=res.json()
    const paragrafo=document.createElement('p')
    paragrafo.classList.add('graficos-container_texto')
    paragrafo.innerHTML=`você sabia que o mundo tem ${dados.total_pessoas_mundo}de pessoas que aproximadamente ${dados.total_pessoas_conectadas}
    ${dados.tempo_medio} horas conectadas.`
    console.log(paragrafo)

const container=document.getElementById('graficos-container')
container.appendChild(paragrafo)

}