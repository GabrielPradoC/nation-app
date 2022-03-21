import getOpts from "../helpers/generateOptionElements.js";
import options from './options.json';

const optionsArray = getOpts(options.callCodes.sort((a,b)=>a-b));

export default optionsArray;