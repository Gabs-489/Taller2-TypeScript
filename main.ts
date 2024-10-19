import {Serie} from './serie.js'
import {series} from './data.js'


let seriesTable: HTMLElement = document.getElementById("tablaSeries")!;
let serieCard:HTMLElement = document.getElementById("infoSerie")!;

mostrarSeries(series);

let links: NodeListOf<Element> = document.querySelectorAll('.link');

links.forEach(link => {
    link.addEventListener("click", function(event) {
        event.preventDefault(); 
        serieCard.classList.remove('hidden');
        let clickedLinkId = (event.target as HTMLElement).id;
        let id_num: number = Number(clickedLinkId.slice(4));
        mostrarInfoSerie(series[id_num - 1]); 
    });
});


function mostrarSeries(ser:Serie[]):void{
    let seriesTbody:HTMLElement = document.createElement("tbody");
    for (let serie of ser)
    {
        let trElement:HTMLElement = document.createElement("tr");
        trElement.innerHTML = `<td class="table-active">${serie.id}</td>
        <td class="table-active"> <a class="link" id="Card${serie.id}"> ${serie.nombre} </a></td>
        <td class="table-active">${serie.canal}</td>
        <td class="table-active">${serie.numTemporadas}</td>`;
        seriesTbody.appendChild(trElement);
    }

    let temporadasP: number = temporadasPromedio(ser);
    let trElement:HTMLElement = document.createElement("p");
    trElement.className = "single-line";
    trElement.innerHTML = `Seasons average: ${temporadasP}`;
    seriesTbody.appendChild(trElement);
    seriesTable.appendChild(seriesTbody);

}

function temporadasPromedio(ser:Serie[]):number{
    let promedio:number = 0;
    for(let serie of ser)
    {
        promedio+=serie.numTemporadas;
    }

    promedio=Math.floor(promedio/ser.length);
    return promedio;
}


function mostrarInfoSerie(serie:Serie):void{
    let seriesTbody: HTMLElement = document.querySelector("#infoSerie div")!;
    if (seriesTbody) {
        seriesTbody.innerHTML = "";
    } else {
        seriesTbody = document.createElement("div");
    }
    seriesTbody.innerHTML = `<img class="card-img-top" src=${serie.linkImg} alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">${serie.nombre}</h5>
      <p class="card-text">${serie.sinopsis}</p>
      <a href=${serie.linkVer} target="_blank">${serie.linkVer}</a>
    </div>`;
    serieCard.appendChild(seriesTbody);
}