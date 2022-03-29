const elements = ["h", "he", "li", "be", "b", "c", "n", "o", "f", "ne", "na", "mg", "al", "si", "p", "s", "cl", "ar", "k", "ca", "sc", "ti", "v", "cr", "mn", "fe", "co", "ni", "cu", "zn", "ga", "ge", "as", "se", "br", "kr", "rb", "sr", "y", "zr", "nb", "mo", "tc", "ru", "rh", "pd", "ag", "cd", "in", "sn", "sb", "te", "i", "xe", "cs", "ba", "la", "ce", "pr", "nd", "pm", "sm", "eu", "gd", "tb", "dy", "ho", "er", "tm", "yb", "lu", "hf", "ta", "w", "re", "os", "ir", "pt", "au", "hg", "tl", "pb", "bi", "po", "at", "rn", "fr", "ra", "ac", "th", "pa", "u", "np", "pu", "am", "cm", "bk", "cf", "es", "fm", "md", "no", "lr", "rf", "db", "sg", "bh", "hs", "mt", "ds", "rg", "cn", "nh", "fl", "mc", "lv", "ts", "og", "uue", "d", "t"]
const namesEN = {"h": "Hydrogen", "d": "Deuterium", "t": "Tritium", "he": "Helium", "li": "Lithium", "be": "Beryllium", "b": "Boron", "c": "Carbon", "n": "Nitrogen", "o": "Oxygen", "f": "Fluorine", "ne": "Neon", "na": "Sodium", "mg": "Magnesium", "al": "Aluminium", "si": "Silicon", "p": "Phosphorus", "s": "Sulfur", "cl": "Chlorine", "ar": "Argon", "k": "Potassium", "ca": "Calcium", "sc": "Scandium", "ti": "Titanium", "v": "Vanadium", "cr": "Chromium", "mn": "Manganese", "fe": "Iron", "co": "Cobalt", "ni": "Nickel", "cu": "Copper", "zn": "Zinc", "ga": "Gallium", "ge": "Germanium", "as": "Arsenic", "se": "Selenium", "br": "Bromine", "kr": "Krypton", "rb": "Rubidium", "sr": "Strontium", "y": "Yttrium", "zr": "Zirconium", "nb": "Niobium", "mo": "Molybdenum", "tc": "Technetium", "ru": "Ruthenium", "rh": "Rhodium", "pd": "Palladium", "ag": "Silver", "cd": "Cadmium", "in": "Indium", "sn": "Tin", "sb": "Antimony", "te": "Tellurium", "i": "Iodine", "xe": "Xenon", "cs": "Cesium", "ba": "Barium", "la": "Lanthanum", "ce": "Cerium", "pr": "Praseodymium", "nd": "Neodymium", "pm": "Promethium", "sm": "Samarium", "eu": "Europium", "gd": "Gadolinium", "tb": "Terbium", "dy": "Dysprosium", "ho": "Holmium", "er": "Erbium", "tm": "Thulium", "yb": "Ytterbium", "lu": "Lutetium", "hf": "Hafnium", "ta": "Tantalum", "w": "Tungsten", "re": "Rhenium", "os": "Osmium", "ir": "Iridium", "pt": "Platinum", "au": "Gold", "hg": "Mercury", "tl": "Thallium", "pb": "Lead", "bi": "Bismuth", "po": "Polonium", "at": "Astatine", "rn": "Radon", "fr": "Francium", "ra": "Radium", "ac": "Actinium", "th": "Thorium", "pa": "Protactinium", "u": "Uranium", "np": "Neptunium", "pu": "Plutonium", "am": "Americium", "cm": "Curium", "bk": "Berkelium", "cf": "Californium", "es": "Einsteinium", "fm": "Fermium", "md": "Mendelevium", "no": "Nobelium", "lr": "Lawrencium", "rf": "Rutherfordium", "db": "Dubnium", "sg": "Seaborgium", "bh": "Bohrium", "hs": "Hassium", "mt": "Meitnerium", "ds": "Darmstadtium", "rg": "Roentgenium", "cn": "Copernicium", "nh": "Nihonium", "fl": "Flerovium", "mc": "Moscovium", "lv": "Livermorium", "ts": "Tennessine", "og": "Oganesson"}
const namesDE = {"h": "Wasserstoff", "d": "Deuterium", "t": "Tritium", "he": "Helium", "li": "Lithium", "be": "Beryllium", "b": "Bor", "c": "Kohlenstoff", "n": "Stickstoff", "o": "Sauerstoff", "f": "Fluor", "ne": "Neon", "na": "Natrium", "mg": "Magnesium", "al": "Aluminium", "si": "Silizium", "p": "Phosphor", "s": "Schwefel", "cl": "Chlor", "ar": "Argon", "k": "Kalium", "ca": "Kalzium", "sc": "Scandium", "ti": "Titan", "v": "Vanadium", "cr": "Chrom", "mn": "Mangan", "fe": "Eisen", "co": "Kobalt", "ni": "Nickel", "cu": "Copper", "zn": "Zink", "ga": "Gallium", "ge": "Germanium", "as": "Arsen", "se": "Selen", "br": "Brom", "kr": "Krypton", "rb": "Rubidium", "sr": "Strontium", "y": "Yttrium", "zr": "Zirkonium", "nb": "Niob", "mo": "Molybdän", "tc": "Technetium", "ru": "Ruthenium", "rh": "Rhodium", "pd": "Palladium", "ag": "Silber", "cd": "Cadmium", "in": "Indium", "sn": "Zinn", "sb": "Antimon", "te": "Tellur", "i": "Iod", "xe": "Xenon", "cs": "Cäsium", "ba": "Barium", "la": "Lanthan", "ce": "Cer", "pr": "Praseodym", "nd": "Neodym", "pm": "Promethium", "sm": "Samarium", "eu": "Europium", "gd": "Gadolinium", "tb": "Terbium", "dy": "Dysprosium", "ho": "Holmium", "er": "Erbium", "tm": "Thulium", "yb": "Ytterbium", "lu": "Lutetium", "hf": "Hafnium", "ta": "Tantal", "w": "Wolfram", "re": "Rhenium", "os": "Osmium", "ir": "Iridium", "pt": "Platin", "au": "Gold", "hg": "Quecksilber", "tl": "Thallium", "pb": "Blei", "bi": "Bismut", "po": "Polonium", "at": "Astat", "rn": "Radon", "fr": "Francium", "ra": "Radium", "ac": "Actinium", "th": "Thorium", "pa": "Protactinium", "u": "Uran", "np": "Neptunium", "pu": "Plutonium", "am": "Americium", "cm": "Curium", "bk": "Berkelium", "cf": "Californium", "es": "Einsteinium", "fm": "Fermium", "md": "Mendelevium", "no": "Nobelium", "lr": "Lawrencium", "rf": "Rutherfordium", "db": "Dubnium", "sg": "Seaborgium", "bh": "Bohrium", "hs": "Hassium", "mt": "Meitnerium", "ds": "Darmstadtium", "rg": "Roentgenium", "cn": "Copernicium", "nh": "Nihonium", "fl": "Flerovium", "mc": "Moscovium", "lv": "Livermorium", "ts": "Tennessine", "og": "Oganesson"}

let solutions;
let useEnglish = true;

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
    // Delete non-alphabetical characters
    text = text.replace(/[^a-z ]/, "");
    // Split by spaces
    text = text.split(" ");

    blockContainer = document.getElementById("blocks");
    // Remove already present blocks
    while (blockContainer.firstChild){ blockContainer.removeChild(blockContainer.firstChild); }

    for (word of text){
        // Convert to list of element symbols
        solutions = [];
        recursiveSolve(word, []);
        
        // Check if a solution was even found
        // If not, display error message
        if (solutions.length == 0){
            block = document.createElement("div")
            block.innerHTML = "Not possible :(";
            block.classList.add("blockerror");

            block.style.backgroundColor = "#ED0000";
            blockContainer.appendChild(block);
        }

        // If so, Add symbols
        else {
            for (symbol of solutions[0]){
                // Create element
                block = document.createElement("div")
                childDiv1 = document.createElement("div")
                childDiv1.innerHTML = symbol.charAt(0).toUpperCase() + symbol.slice(1);
                block.appendChild(childDiv1);
                block.classList.add("block");
                block.classList.add(`__${symbol}__`)

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
                // Pseudoelements
                } else if (["d","t"].includes(symbol)){
                    colorString = "#DDDDDD";
                }

                // Create corner text
                childDiv2 = document.createElement("div");
                if (["d", "t"].includes(symbol)){ childDiv2.innerHTML = "1"; }
                else { childDiv2.innerHTML = elements.indexOf(symbol) + 1; }
                childDiv2.classList.add("cornertext")
                block.appendChild(childDiv2);

                // Create bottom text
                childDiv3 = document.createElement("div");
                if (useEnglish){ childDiv3.innerHTML = namesEN[symbol]; }
                else { childDiv3.innerHTML = namesDE[symbol]; }
                childDiv3.classList.add("bottomtext")
                block.appendChild(childDiv3);

                block.style.backgroundColor = colorString;
                blockContainer.appendChild(block)
            }
        }

        block = document.createElement("div");
        block.classList.add("block");
        block.classList.add("space");
        block.style.backgroundColor = "#252525";
        blockContainer.appendChild(block);

    }

    // Delete last pace
    blockContainer.removeChild(blockContainer.lastChild);
}

function changeLanguage(){

    useEnglish = !useEnglish;
    blockContainer = document.getElementById("blocks");

    let children = blockContainer.children;
    for (var i = 0; i < children.length; i++) {
        let block = children[i];
        let classes = block.className.split(" ");
        let symbol = classes[1].replaceAll("_", "");
        let textDiv = block.children[2];
        if (useEnglish){ textDiv.innerHTML = namesEN[symbol]; }
        else { textDiv.innerHTML = namesDE[symbol]; }
    }

    button = document.getElementById("changeLanguage");
    if (useEnglish){ button.innerHTML = "Sprache ändern (EN)"; }
    else { button.innerHTML = "Sprache ändern (DE)"; }

}