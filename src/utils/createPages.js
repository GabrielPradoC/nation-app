import renderButtons from "./renderButtons";
import createButton from "./createButton";

/**
 * createPages
 * 
 * Separa o array informado no número de páginas informados, de 12 em 12
 * Depois os anexa no elemento pai informado
 * 
 * @param {Array<HTMLButtonElement>} buttonsArray - Array com os botões
 * @param {Number} numOfPages - Número total de páginas
 * @param {HTMLElement} parentElement - Elemento pai
 */
function createPages(buttonsArray, numOfPages, parentElement){
    const buttons = [];
    for (let i = 1; i <= numOfPages; i++) {
        const flags = buttonsArray.splice(0, 12);
        globalThis.responseParams.push(flags);
        buttons.push(createButton(i));
    }
    renderButtons(parentElement,buttons);
}

export default createPages;