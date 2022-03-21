/**
 * getUrlParams
 * 
 * Recupera os parâmetros na query da url atual
 * 
 * @param {String} param - O nome da query para ser buscada
 * @returns O conteúdo da query caso ela exista ou null caso contrário
 */
function getUrlParams(param = ''){
    try {
        const url_string = window.location.href.toLocaleLowerCase();
        const url = new URL(url_string);
        return url.searchParams.get(param);
    } catch (error) {
        console.error(error);
    }
    return null;
}

export default getUrlParams;