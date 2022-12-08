import { conectaAPI } from "./conectaAPI.js";

const lista = document.querySelector("[data-lista]")//buscando o ul

export default function constroiCard (titulo, descricao, url, imagem){
    const video = document.createElement("li") //criando o li para inserir no ul
    video.className = "videos__item"
    video.innerHTML= `
    <iframe width="100%" height="72%" src="${url}"
    title="${titulo}" frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen></iframe>
    <div class="descricao-video">
        <img src="${imagem}" alt="logo canal alura">
        <h3>${titulo}</h3>
        <p>${descricao}</p>
    </div>
    `
    return video
}

async function listaVideo() {
    try {
        const listaAPI = await conectaAPI.listaVideos()
        listaAPI.forEach(elemento => {
            lista.appendChild(constroiCard(
                elemento.titulo, elemento.descricao, elemento.url, elemento.imagem)); //vai anexar o li que foi criado no ul  
         });
    } catch {
        lista.innerHTML = `<h2 class="mensagem__titulo" >Não foi possivel carregar a lista de vídeos</h2>`
    }
   
}

listaVideo();