/**
 * jqueryRemoveClass
 * 
 * Remove a classe 'hide' de um ou mais elementos html
 * 
 * @param {Array<HTMLButtonElement>} buttonsArray - Array com os botões
 * @param  {...Number} indexArray - Array com os indexes que serão removidos a classe hide
 */
 function jqueryRemoveClass(buttonsArray, ...indexArray) {
    indexArray.forEach((index) => {
        buttonsArray.eq(index).removeClass('hide');
    });
}

export default jqueryRemoveClass;