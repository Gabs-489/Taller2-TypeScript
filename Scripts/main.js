import { series } from './data.js';
var seriesTable = document.getElementById("tablaSeries");
var serieCard = document.getElementById("infoSerie");
mostrarSeries(series);
var links = document.querySelectorAll('.link');
links.forEach(function (link) {
    link.addEventListener("click", function (event) {
        event.preventDefault();
        serieCard.classList.remove('hidden');
        var clickedLinkId = event.target.id;
        var id_num = Number(clickedLinkId.slice(4));
        mostrarInfoSerie(series[id_num - 1]);
    });
});
function mostrarSeries(ser) {
    var seriesTbody = document.createElement("tbody");
    for (var _i = 0, ser_1 = ser; _i < ser_1.length; _i++) {
        var serie = ser_1[_i];
        var trElement_1 = document.createElement("tr");
        trElement_1.innerHTML = "<td class=\"table-active\">".concat(serie.id, "</td>\n        <td class=\"table-active\"> <a class=\"link\" id=\"Card").concat(serie.id, "\"> ").concat(serie.nombre, " </a></td>\n        <td class=\"table-active\">").concat(serie.canal, "</td>\n        <td class=\"table-active\">").concat(serie.numTemporadas, "</td>");
        seriesTbody.appendChild(trElement_1);
    }
    var temporadasP = temporadasPromedio(ser);
    var trElement = document.createElement("p");
    trElement.className = "single-line";
    trElement.innerHTML = "Seasons average: ".concat(temporadasP);
    seriesTbody.appendChild(trElement);
    seriesTable.appendChild(seriesTbody);
}
function temporadasPromedio(ser) {
    var promedio = 0;
    for (var _i = 0, ser_2 = ser; _i < ser_2.length; _i++) {
        var serie = ser_2[_i];
        promedio += serie.numTemporadas;
    }
    promedio = Math.floor(promedio / ser.length);
    return promedio;
}
function mostrarInfoSerie(serie) {
    var seriesTbody = document.querySelector("#infoSerie div");
    if (seriesTbody) {
        seriesTbody.innerHTML = "";
    }
    else {
        seriesTbody = document.createElement("div");
    }
    seriesTbody.innerHTML = "<img class=\"card-img-top\" src=".concat(serie.linkImg, " alt=\"Card image cap\">\n    <div class=\"card-body\">\n      <h5 class=\"card-title\">").concat(serie.nombre, "</h5>\n      <p class=\"card-text\">").concat(serie.sinopsis, "</p>\n      <a href=").concat(serie.linkVer, " target=\"_blank\">").concat(serie.linkVer, "</a>\n    </div>");
    serieCard.appendChild(seriesTbody);
}
