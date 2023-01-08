var textInput = document.querySelector("#inputText");
var textOutput = document.querySelector("#outputText");
var textBtn = document.querySelector("#btn-trans");

textBtn.addEventListener('click', whenClicked)
var serverURL = "https://api.funtranslations.com/translate/minion.json"

function getTranslatedURL(text){
    return serverURL + "?" + "text=" + text
}

function errorHandler(error){
    console.log("error occured", error);
    alert("something went wrong with server! Please try again after sometime")
}

function whenClicked(){
    // console.log("Clicked!")
    // textOutput.innerText = textInput.value
    fetch(getTranslatedURL(textInput.value))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            textOutput.innerText = translatedText;
        })
        .catch(errorHandler)
}
