
const RaMURL = "https://rickandmortyapi.com/api/character";
if(sessionStorage.getItem("character") != null){
    number = sessionStorage.getItem("character");
    characterDiv(5);
}
else{
    $("#character").click(() => {
        number = parseInt(document.getElementById('name').value);
        characterDiv(1000);
})
}
// Personajes creación de div en navbar
function characterDiv (a){
    $.get(RaMURL, function (res, status) {
        if (status === "success") {
            if (number <= 20 & number >= 0) {
                $(".characterContainer").empty();
                $(".characterContainer").append(`<div class="container-character">
                <div><img src="${res.results[number].image}" class="characterImage"></div>
                <div class="characterName">${res.results[number].name}</div>
            </div>`)
                $(".navUser").slideUp(a);
            }
            sessionStorage.setItem("character", number);
        }
    })
}

