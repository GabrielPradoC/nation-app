/**
 * removeChildren
 * 
 * Remove todos os elementos filhos do elemento pai informado
 * 
 * @param {HTMLElement} element - Elemento pai
 */
function removeChildren(element) {
    while (element.firstChild) {
        element.removeChild(element.lastChild);
    }
}

export default removeChildren;