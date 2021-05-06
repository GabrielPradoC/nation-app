import getOpts from "../aux/getOpts.js";
import {countriesObjArr} from "./countries.js";

const countryOptElsArr = getOpts(countriesObjArr);

export default countryOptElsArr;