function addClass(idName, className){
    document.getElementById(idName).classList.add(className);
}

function removeClass(idName, className){
    document.getElementById(idName).classList.remove(className);
}

function start() {
    console.log("start");
    addClass('start', '');
}