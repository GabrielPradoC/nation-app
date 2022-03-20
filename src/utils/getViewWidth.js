/**
 * getViewWidth
 * 
 * Retorna a largura da tela atual
 * 
 * @returns A largura da tela atual em pixels
 */
function getViewWidth(){
    return Math.max(
        document.documentElement.clientWidth || 0,
        window.innerWidth || 0,
    );
}

export default getViewWidth;