import removeChildren from "./removeChildren";

/**
 * appendElementToParent
 * 
 * Limpa os elementos filhos do elemento pai e anexa o elemento informado
 * 
 * @param {HTMLElement} parent - Elemento Pai
 * @param {HTMLElement} element - Elemento para ser anexado
 */
function appendElementToParent(parent, element){
    removeChildren(parent);
    parent.append(element);
}

export default appendElementToParent;