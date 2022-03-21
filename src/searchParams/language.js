import getOpts from "../helpers/generateOptionElements.js";
import options from './options.json';

const optionsArray = getOpts(options.languages.sort(sortLanguages));

function sortLanguages(language1, language2){
    return language1.name.localeCompare(language2.name, 'en', { sensitivity: 'base' });
}

export default optionsArray;