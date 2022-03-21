/**
 * createPrevNextButtons
 * 
 * Cria dois botões de paginação
 * Um com o id 'next' e com o texto de '>'
 * Um com o id de 'prev' e com o texto de '<'
 * 
 * @returns Um array contendo os botões de previous e next, respectivamente
 */
function createPrevNextButtons() {
    const btn = document.createElement('button');
    const btnPrev = btn.cloneNode();
    const btnNext = btn.cloneNode();
    btnNext.id = 'next';
    btnPrev.id = 'prev';
    btnNext.innerText = '˃';
    btnPrev.innerText = '˂';
    return [btnPrev, btnNext];
}

export default createPrevNextButtons;