import changeGlobalActiveBtn from "./changeGlobalActiveButton";
import createFlagsFragment from "./createFlagsFragment";
import appendElementToParent from "./appendElementToParent";
import fixPagination from "./fixPagination";

/**
 * paginationClickHandler
 * 
 * Cuida da mudança de página quando o usuário clica na paginação do site
 * 
 * @param {Event} event - Evento de clique do usuário
 * @param {HTMLElement} buttonsDiv - Elemento que contém os botões de paginação
 * @param {HTMLElement} flagsParentElement - Elemento para renderizar as bandeiras
 */
function paginationClickHandler(event, buttonsDiv, flagsParentElement){
    const activePageButton = document.querySelector('.active');
    if (event.target.tagName !== 'BUTTON' || event.target.value == activePageButton.value) return;
    
    //Caso o botão clicado seja uma das setas apenas altera a página atual
    if (!/[0-9]/.test(event.target.value)) {
        changeGlobalActiveBtn(event.target.id, activePageButton, flagsParentElement, buttonsDiv);
        return;
    }

    activePageButton.classList.toggle('active');
    event.target.classList.toggle('active');
    
    fixPagination(event.target, buttonsDiv);

    const flagsFragment = createFlagsFragment(
        globalThis.responseParams[event.target.value - 1],
    );
    appendElementToParent(flagsParentElement, flagsFragment);
}

export default paginationClickHandler;