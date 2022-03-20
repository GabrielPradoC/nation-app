/**
 * createButton
 * 
 * Cria um único botão e o retorna
 * 
 * @param {Number | String} content - Conteúdo do botão
 * @returns - O botão gerado com o texto dentro
 */
function createButton(pageNumber) {
    const btn = document.createElement('button');
    btn.innerText = pageNumber;
    btn.value = pageNumber;
    return btn;
}

export default createButton;