
const RaMURL = "https://rickandmortyapi.com/api/character";

if(sessionStorage.getItem("character") != null){
    number = sessionStorage.getItem("character");
    characterDiv();
}
else{
    $("#character").click(() => {
        number = parseInt(document.getElementById('name').value);
        characterDiv();
})
}
