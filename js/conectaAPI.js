async function listaVideos() {

        const conexcao = await fetch('http://localhost:3000/videos');
        const conexcaoConvertida = await conexcao.json();
        return conexcaoConvertida
   
}

async function criaVideo(titulo, descricao, url, imagem){
    const conexao = await fetch("http://localhost:3000/videos", {
        method:'POST',
        headers:{
            "content-type":"application/json"
        },
        body: JSON.stringify({
            titulo:titulo,
            descricao:`${descricao} mil visualizações`,
            url:url,
            imagem:imagem
        })
    })

    if(!conexao.ok){
        throw new Error('Não foi possível enviar o vídeo') 
    }

    const conexcaoConvertida = await conexao.json()
    return conexcaoConvertida
}

async function buscaVideo(termoDeBusca) {
    const conexao = await fetch(`http://localhost:3000/videos?q=${termoDeBusca}`)
    const conexcaoConvertida = conexao.json()

    return conexcaoConvertida
}

export const conectaAPI = {
    listaVideos,
    criaVideo,
    buscaVideo
}