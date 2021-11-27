const cardContainer = document.getElementById("cardIndex");
function renderIndex(card){
    const aelement = document.createElement("a");
    aelement.className += "cardLink";
    aelement.setAttribute('href', card.html)
    aelement.innerHTML = `<div class="cardContentFlexMini"><img src=${card.img} class="cardSvgSize">
    <span class="cardTextSize">${card.section}</span></div>`
    cardContainer.appendChild(aelement);
}
indexData.forEach(renderIndex);
const filterCategory = category => {
    indexFiltered = indexData.filter(function(element){
        return element.id.toLowerCase().indexOf(category.toLowerCase()) > -1;
}
)}
function filterSections(selectedObject){
    const value = selectedObject.value;  
    switch(value){
        case "Math":
            filterCategory("m")
            $(cardIndex).empty();
            indexFiltered.forEach(renderIndex);
            break;
        case "Geometry":
            filterCategory("g")
            $(cardIndex).empty();
            indexFiltered.forEach(renderIndex);
            break;
        case "Physic":
            filterCategory("f")
            $(cardIndex).empty();
            indexFiltered.forEach(renderIndex);
            break;
        case "Health":
            filterCategory("h")
            $(cardIndex).empty();
            indexFiltered.forEach(renderIndex);
            break;
        case "Conversion":
            filterCategory("c")
            $(cardIndex).empty();
            indexFiltered.forEach(renderIndex);
            break;
        case "Economy":
            filterCategory("e")
            $(cardIndex).empty();
            indexFiltered.forEach(renderIndex);
            break;
        case "General":
            $(cardIndex).empty();
            indexData.forEach(renderIndex);
            break;
    }
}
