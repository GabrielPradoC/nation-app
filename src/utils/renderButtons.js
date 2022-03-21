import removeChildren from "./removeChildren";
import createPrevNextButtons from "./createPrevNextButtons";
import getViewWidth from "./getViewWidth";

/**
 * renderButtons
 * 
 * Recebe um array de botões e os anexa no elemento pai
 * 
 * @param {HTMLElement} parentElement - Elemento pai
 * @param {Array<HTMLButtonElement>} buttonsArray - Array com os botões
 */
function renderButtons(parentElement, buttonsArray){
    removeChildren(parentElement)
    const fragment = document.createDocumentFragment();
    const [btnPrev, btnNext] = createPrevNextButtons();
    const viewWidth = getViewWidth();
    fragment.appendChild(btnPrev);
    buttonsArray.map((item, index) => {
        if (index === 0) {
            item.classList.toggle('active');
        }
        if (index > 3 && index < buttonsArray .length - 1 && viewWidth <= 425) {
            item.classList.add('hide');
        }
        fragment.appendChild(item);
    });
    fragment.appendChild(btnNext);
    parentElement.appendChild(fragment);
}

export default renderButtons;