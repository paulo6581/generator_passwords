import generatePassword from './generators';

const generatedPassword = document.querySelector('.generated-password');
const qtdCaracteres = document.querySelector('.qtd-caracteres');
const lettersUppercase = document.querySelector('.letters-uppercase');
const lettersLowercase = document.querySelector('.letters-lowercase');
const numbers = document.querySelector('.numbers');
const symbols = document.querySelector('.symbols');
const generatorButton = document.querySelector('.generator-button');

const formGeneratePass = () => {
    generatorButton.addEventListener('click', () => {
        generatedPassword.innerHTML = generat();
    });
};

const generat = () => {
    const password = generatePassword(
        qtdCaracteres.value, 
        lettersUppercase.checked,
        lettersLowercase.checked,
        numbers.checked,
        symbols.checked
    );
    return password || 'Nada foi selecionado!';
}

export default formGeneratePass;