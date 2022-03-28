const elements = ["h", "he", "li", "be", "b", "c", "n", "o", "f", "ne", "na", "mg", "al", "si", "p", "s", "cl", "ar", "k", "ca", "sc", "ti", "v", "cr", "mn", "fe", "co", "ni", "cu", "zn", "ga", "ge", "as", "se", "br", "kr", "rb", "sr", "y", "zr", "nb", "mo", "tc", "ru", "rh", "pd", "ag", "cd", "in", "sn", "sb", "te", "i", "xe", "cs", "ba", "la", "ce", "pr", "nd", "pm", "sm", "eu", "gd", "tb", "dy", "ho", "er", "tm", "yb", "lu", "hf", "ta", "w", "re", "os", "ir", "pt", "au", "hg", "tl", "pb", "bi", "po", "at", "rn", "fr", "ra", "ac", "th", "pa", "u", "np", "pu", "am", "cm", "bk", "cf", "es", "fm", "md", "no", "lr", "rf", "db", "sg", "bh", "hs", "mt", "ds", "rg", "cn", "nh", "fl", "mc", "lv", "ts", "og", "uue"]
let solutions;

function recursiveSolve(text, symbolList){

    if (text.length == 0){ solutions.push(symbolList); return; }

    if (elements.includes( text.substr(0, 2) )){

        let newText = text.substr(2);
        let newSymbolList = symbolList.concat([text.substr(0, 2)]);
        recursiveSolve(newText, newSymbolList);

    }

    if (elements.includes( text.substr(0, 1) )){

        let newText = text.substr(1);
        let newSymbolList = symbolList.concat([text.substr(0, 1)]);
        recursiveSolve(newText, newSymbolList);

    }

}

function generate(){

    // Read text from input
    text = document.getElementById("textInput").value.toLowerCase();

    // Convert to list of element symbols
    solutions = [];
    recursiveSolve(text, []);

    div = document.getElementById("blocks");
    
    // Remove already present blocks
    while (div.firstChild){ div.removeChild(div.firstChild); }
    
    // Check if a solution was even found
    // If not, display error message
    if (solutions.length == 0){
        block = document.createElement("div")
        block.innerHTML = "Not possible :(";
        block.classList.add("blockerror");

        block.style.backgroundColor = "#ED0000";
        div.appendChild(block);
    }

    // If so, Add symbols
    else {
        for (symbol of solutions[0]){
            // Create element
            block = document.createElement("div")
            block.innerHTML = symbol.charAt(0).toUpperCase() + symbol.slice(1);
            block.classList.add("block");

            let colorString = "#ffffff";
            // Choose color for block based on chemical group
            // Non-metals
            if (["h","c","n","o","p","s","se"].includes(symbol)){
                colorString = "#20C8D3";
            // Halogens
            } else if (["f","cl","br","i","at","ts"].includes(symbol)){
                colorString = "#9FBF35";
            // Noble gases
            } else if (["he","ne","ar","kr","xe","rn","og"].includes(symbol)){
                colorString = "#30C337";
            // Metalloids
            } else if (["b","si","ge","as","sb","te"].includes(symbol)){
                colorString = "#4F38E2";
            // Post-transition metals (?)
            } else if (["al","ga","in","sn","tl","pb","bi","po","nh","fl","mc","ts"].includes(symbol)){
                colorString = "#C179C2";
            // Transition metals
            } else if (["sc","ti","v","cr","mn","fe","co","ni","cu","zn","y","zr","nb","mo","tc","ru","rh","pd","ag","cd","hf","ta","w","re","os","ir","pt","au","hg","rf","db","sg","bh","hs","mt","ds","rg","cn"].includes(symbol)){
                colorString = "#ED1312";
            // Alkali metals
            } else if (["li","na","k","rb","cs","fr"].includes(symbol)){
                colorString = "#EDEE16";
            // Earth alkali metals
            } else if (["be","mg","ca","st","ba","ra"].includes(symbol)){
                colorString = "#ED7912";
            // Lanthanides
            } else if (["la","ce","pr","nd","pm","sm","eu","gd","tb","dy","ho","er","tm","yt","lu"].includes(symbol)){
                colorString = "#F68B81";
            // Actinides
            } else if (["ac","th","pa","u","np","pu","am","cm","bk","cf","es","fm","md","no","lr"].includes(symbol)){
                colorString = "#82DAE8";
            }

            block.style.backgroundColor = colorString;
            div.appendChild(block)
        }
    }
}
