var heading = document.querySelector(".head");
var btnTranslate = document.querySelector("#btn-translate");
var inputTxt = document.querySelector("#txtInput")
var outputTxt = document.querySelector("#text-output");
// console.log(heading);

// var message = prompt("What is your name? ");
// alert("Welcome "+ message);

btnTranslate.addEventListener('click', clickHandler)

function clickHandler(){
    console.log("clicked")
    console.log("Input:- " + inputTxt.value)
    outputTxt.innerText = inputTxt.value
}
