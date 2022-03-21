/**
 * createFlagsFragment
 * 
 * Recebe o array de bandeiras da api e mapeia eles para imagens
 * 
 * @param {Array<{name: String, flag: String}>} flagsArray - Array com as informações das bandeiras
 * @returns 
 */
 function createFlagsFragment(flagsArray) {
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < flagsArray.length; i++) {
        const imageElement = document.createElement('img');
        imageElement.src = flagsArray[i].flag;
        imageElement.countryName = flagsArray[i].name;
        imageElement.alt = `Flag of ${flagsArray[i].name}`;
        imageElement.title = `Flag of ${flagsArray[i].name}`;
        imageElement.classList.add('flag');
        fragment.appendChild(imageElement);
    }
    return fragment;
}

export default createFlagsFragment;