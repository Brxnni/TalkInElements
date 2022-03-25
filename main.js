function getSymbols(text){
    // 
}

function generate(){

    // Read text from input
    text = document.getElementById("textInput").value;

    // Convert to list of element symbols
    // symbols = getSymbols(text);
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