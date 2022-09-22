
const generator = (length = 8, useNumbers = true, useSymbols = false) => {
    let characters = "abcdefghijklmnopqrstuvwxyz";
    characters += useNumbers ? "0123456789" : ""; 
    characters += useSymbols ? ".-?%:;!@#()/$" : "";  // &. <. > may cause trouble

    return Array(length).fill(0).map(i => 
        Math.random() > 0.5
            ? characters.charAt(Math.random() * characters.length)
            : characters.charAt(Math.random() * characters.length).toUpperCase()
    ).join("");

};


export default generator;