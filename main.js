const elements = ["w", "h", "o", "re", "ho", "r"]
let solutions = [];

// Fuck this function. Doesn't even work right.
function getSymbols(text, symbols = []){

    console.log(text, symbols);
    if (text.length == 0){ solutions.push(symbols); return; }

    let newText;
    let newSymbols;

    console.log("Checking if", text.substr(0, 1), "exists...");
    if (elements.includes( text.substr(0, 1) )){

        newText = text.substr(1);
        newSymbols = symbols;
        newSymbols.push(text.substr(0, 1));

        getSymbols(newText, newSymbols);

    }

    console.log("Checking if", text.substr(0, 2), "exists...");
    if (elements.includes( text.substr(0, 2) )){

        newText = text.substr(2);
        newSymbols = symbols;
        newSymbols.push(text.substr(0, 2));

        getSymbols(newText, newSymbols);

    }
}

function generate(){

    // Read text from input
    text = document.getElementById("textInput").value;

    // Convert to list of element symbols
    solutions = []
    // getSymbols(text);
    symbols = ["Ho", "Ho", "Ho"];

    // Add symbols
    div = document.getElementById("blocks");
    for (symbol of symbols){
        block = document.createElement("div")
        block.innerHTML = symbol;
        block.classList.add("block");
        block.style.backgroundColor = "#99ff99";
        div.appendChild(block)
    }
}

getSymbols("whore");
console.log(solutions);