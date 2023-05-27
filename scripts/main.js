function getRandomInt(max) {
    return Math.floor(Math.random() * max)+1;
}

function wiseFrog(){
    var randomImage = getRandomInt(9)
    document.getElementById("wiseFrogImage").src="assets/wise/wise"+randomImage+".png";
}