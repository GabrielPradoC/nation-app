import getOpts from "../auxFiles/getOpts.js";
import {countriesObjArr} from "./countries.js";

const countryOptElsArr = getOpts(countriesObjArr);

export default countryOptElsArr;