const theoryContainer = document.getElementById("theory");
function renderTheory(theory){
    const div = document.createElement("div");
    div.className += "themeTheory";
    div.innerHTML = `<h2>${theory.title}</h2>
    <p>${theory.paragraph}</p>
    <img class="imageTheory" src="${theory.img}">`
    theoryContainer.appendChild(div);
}
theoryData.forEach(renderTheory);