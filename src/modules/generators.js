const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);
const generatesUppercase = () => String.fromCharCode(rand(65, 91));
const generatesLowercase = () => String.fromCharCode(rand(97, 123));
const generatesNumbers = () => String.fromCharCode(rand(48, 58));
const symbols = ',.;~^[]{}!@#$%*()_+&=-?/:><';
const generatesSymbols = () => symbols[rand(0, symbols.length)];

const generatePassword = (qtd, uppercase, lowercase, numbers, symbols) => {
    const passwordArray = [];
    qtd = Number(qtd);

    for(let i = 0; i < qtd; i++) {
        uppercase && passwordArray.push(generatesUppercase());
        lowercase && passwordArray.push(generatesLowercase());
        numbers && passwordArray.push(generatesNumbers());
        symbols && passwordArray.push(generatesSymbols());
    }
    return passwordArray.join('').slice(0, qtd);
}

export default generatePassword;