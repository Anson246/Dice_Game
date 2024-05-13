
// For the First Dice 
var randnumb1 = Math.floor((Math.random() * 6) + 1); // Gives a randon number between 1 and 6.
var randima1 = "images/dice" + randnumb1 + ".png"; // Used to select random images from the dice1.png - dice6.png.
document.querySelectorAll("img")[0].setAttribute("src",randima1);

// For the Second Dice.
var randnumb2 = Math.floor((Math.random() * 6) + 1); // Gives a randon number between 1 and 6.
var randima2 = "images/dice" + randnumb2 + ".png"; // Used to select random images from the dice1.png - dice6.png.
document.querySelectorAll("img")[1].setAttribute("src",randima2);

if(randnumb1 > randnumb2){
    document.querySelector("h1").innerHTML="👑 Player 1 Wins"
}
else if(randnumb1<randnumb2){
    document.querySelector("h1").innerHTML="Player 2 Wins 👑"
}
else {
    document.querySelector("h1").innerHTML="🤝 It's a draw 🤝"
}