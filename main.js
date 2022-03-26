const elements = ["h", "he", "li", "be", "b", "c", "n", "o", "f", "ne", "na", "mg", "al", "si", "p", "s", "cl", "ar", "k", "ca", "sc", "ti", "v", "cr", "mn", "fe", "co", "ni", "cu", "zn", "ga", "ge", "as", "se", "br", "kr", "rb", "sr", "y", "zr", "nb", "mo", "tc", "ru", "rh", "pd", "ag", "cd", "in", "sn", "sb", "te", "i", "xe", "cs", "ba", "la", "ce", "pr", "nd", "pm", "sm", "eu", "gd", "tb", "dy", "ho", "er", "tm", "yb", "lu", "hf", "ta", "w", "re", "os", "ir", "pt", "au", "hg", "tl", "pb", "bi", "po", "at", "rn", "fr", "ra", "ac", "th", "pa", "u", "np", "pu", "am", "cm", "bk", "cf", "es", "fm", "md", "no", "lr", "rf", "db", "sg", "bh", "hs", "mt", "ds", "rg", "cn", "nh", "fl", "mc", "lv", "ts", "og", "uue"]
let solutions;

function recursiveSolve(text, symbolList){

    if (text.length == 0){ console.log("Done."); solutions.push(symbolList); return; }

    if (elements.includes( text.substr(0, 1) )){

        let newText = text.substr(1);
        let newSymbolList = symbolList;
        newSymbolList.push(text.substr(0, 1));

        recursiveSolve(newText, newSymbolList);

    }

    else if (elements.includes( text.substr(0, 2) )){

        let newText = text.substr(2);
        let newSymbolList = symbolList;
        newSymbolList.push(text.substr(0, 2));

        recursiveSolve(newText, newSymbolList);

    }

}

function generate(){

    // Read text from input
    text = document.getElementById("textInput").value;

    // Convert to list of element symbols
    solutions = [];
    recursiveSolve(text, []);

    div = document.getElementById("blocks");
    
    // Remove already present blocks
    while (div.firstChild){ div.removeChild(div.firstChild); }
    
    // Add symbols
    for (symbol of solutions[0]){
        block = document.createElement("div")
        block.innerHTML = symbol;
        block.classList.add("block");
        block.style.backgroundColor = "#99ff99";
        div.appendChild(block)
    }
}
