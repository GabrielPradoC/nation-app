/**
 * flagClickHandler
 * 
 * Trata do evento quando o usuário clica em uma bandeira
 * 
 * @param {Event} event - Evento do clique
 */
function flagClickHandler(event){
    if (event.target.tagName === 'IMG') {
        window.open(
            `./index2.html?name=${event.target.countryName}`,
            '_blank',
            'noopener=yes',
        );
    }
}

export default flagClickHandler;