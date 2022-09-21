
const generator = (length = 8) => {
    const characters = "0123456789abcdefghijklmnopqrstuvwxyz";

    return Array(length).fill(0).map((char, i) => 
        characters.charAt(Math.random() * characters.length)
    ).join("");

};


export default generator;