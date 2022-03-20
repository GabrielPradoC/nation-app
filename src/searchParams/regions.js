import getOpts from "../helpers/generateOptionElements.js";
import options from './options.json';

const optionsArray = getOpts(options.regions);

export default optionsArray;