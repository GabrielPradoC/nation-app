import fixPagination from "./fixPagination";
import createFlagsFragment from "./createFlagsFragment";
import appendElementToParent from "./appendElementToParent";

/**
 * changeGlobalActiveBtn
 * 
 *  Trata da troca de páginas quando as setas da paginação são clicados
 * 
 * @param {'prev' | 'next'} direction - Se é para ir para a página anterior ou a próxima 
 * @param {HTMLButtonElement} activeButton - O botão da página ativa no momento
 * @param {HTMLElement} parentElement - O elemento pai para adicionar as bandeiras
 * @param {HTMLElement} buttonsDiv - Elemento que contém os botões de paginação
 */
 function changeGlobalActiveBtn(direction, activeButton, parentElement, buttonsDiv) {
    const previousElement = activeButton.previousElementSibling;
    const nextElement = activeButton.nextElementSibling;

    if (direction == 'next' && nextElement.id !== 'next') {
        activeButton.classList.toggle('active');
        nextElement.classList.toggle('active');

        const flagsFragment = createFlagsFragment(
            globalThis.responseParams[nextElement.value - 1],
        );

        fixPagination(nextElement, buttonsDiv);
        appendElementToParent(parentElement,flagsFragment);
    } else if (direction == 'prev' && previousElement.id !== 'prev') {
        activeButton.classList.toggle('active');
        previousElement.classList.toggle('active');

        const flagsFragment = createFlagsFragment(
            globalThis.responseParams[previousElement.value - 1],
        );

        fixPagination(previousElement, buttonsDiv);
        appendElementToParent(parentElement, flagsFragment);
    }
}

export default changeGlobalActiveBtn;