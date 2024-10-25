const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'


async function visualizarInformacoesGlobais(){
    const res=await fetch(url)
    const dados=res.json()
    const pessoasNoMundo=(dados.total_pessoas_mundo)
    const pessoasConectadas=(dados.total_pessoas_conectadas)
    const horas=parseInt(dados.tempo_medio)
    const minutos=((dados.tempo_medio-horas)*100)
    const porcentagemConecta=((pessoasConectadas/pessoasNoMundo)*100).toFixed(2)
    const paragrafo=document.createElement('p')
    paragrafo.classList.add('graficos-container__texto')
    paragrafo.innerHTML=`você sabia que o mundo tem <span>${pessoasNoMundo} billhoes</span> de pessoas e que aproximadamente <span>${pessoasConectadas}
    bilhoes </span> estao conectadas em alguma rede social e passam em media <span>${horas}</span> horas e <span>${minutos}</span> minutos conectadas.
<br> Isso significa que aproximadamente <span>${porcentagemConecta}%</span> de pessoas estao conectadas em alguma rede social.`
    

const container=document.getElementById('graficos-container')
container.appendChild(paragrafo)

}
visualizarInformacoesGlobais()