
const inputColor = document.querySelector("#inputColor")
const visualizar = document.querySelector("#btnVisualizar")
const parrafoHexa = document.querySelector("#parrafoHexa")
const cardColor = document.querySelector("#cardColor")

btnVisualizar.addEventListener("click", () => {
    parrafoHexa.textContent = inputColor.value
    cardColor.style.backgroundColor = inputColor.value
    visualizar.style.backgroundColor = inputColor.value
})


















