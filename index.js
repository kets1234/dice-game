var randonNumber1 = Math.ceil(Math.random() * 6);

var randomDiceImage = "dice" + randonNumber1 + ".png";

var randomImageSource = "images/" + randomDiceImage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);

var randonNumber2 = Math.ceil(Math.random() * 6);

var randomImageSource2 = "images/dice" + randonNumber2 + ".png";

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImageSource2);

if (randonNumber1 > randonNumber2){
    document.querySelector("h1").innerHTML = "🚩 Player 1 wins!";
} else if (randonNumber2 == randonNumber1){
    document.querySelector("h1").innerHTML = "Its a TIE!";
} else{
    document.querySelector("h1").innerHTML ="🚩 Player 2 wins!";
}