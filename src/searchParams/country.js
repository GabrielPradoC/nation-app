import getOpts from "../helpers/generateOptionElements.js";
import options from './options.json';

const optionsArray = getOpts(options.countries);

export default optionsArray;