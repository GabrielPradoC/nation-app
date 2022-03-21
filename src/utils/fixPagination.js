import getViewWidth from './getViewWidth';
import jqueryRemoveClass from './jqueryRemoveClass';

/**
 * fixPagination
 * 
 * Corrige a disposição dos botões em telas com a largura menor que 425 pixels 
 * 
 * @param {HTMLButtonElement} activeButton - O botão da página ativa no momento
 * @param {HTMLElement} parentElement - O elemento pai
 */
 async function fixPagination(activeButton, parentElement) {
    const viewWidth = getViewWidth();
    if (viewWidth <= 425 && parentElement.children.length > 7) {
        const jquery = await import('jquery/dist/jquery.slim.min.js');
        const $ = jquery.default;

        $.fn.exists = function () {
            return this.length !== 0;
        };

        const pagingButtonsArray = $('.btns-page button');
        const activeButtonIndex = pagingButtonsArray.index(activeButton);
        pagingButtonsArray.addClass('hide');
        
        switch (activeButtonIndex) {
            case 1:
                jqueryRemoveClass(pagingButtonsArray, 1, 2, 3, 4);
                break;
            case 2:
                jqueryRemoveClass(pagingButtonsArray, 1, 2, 3, 4);
                break;
            case 3:
                jqueryRemoveClass(pagingButtonsArray, 1, 2, 3, 4);
                break;
            case 7:
                jqueryRemoveClass(pagingButtonsArray, 1, 5, 6, 7);
                break;
            case 8:
                jqueryRemoveClass(pagingButtonsArray, 1, 5, 6, 7);
                break;
            default:
                jqueryRemoveClass(pagingButtonsArray, 1, activeButtonIndex -1, activeButtonIndex, activeButtonIndex +1);
                break;

        }
        const secondToLastButton = document.querySelector(
            '.btns-page button:nth-last-child(2)',
        );
        secondToLastButton.classList.remove('hide');
    }
}

export default fixPagination;