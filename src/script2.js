import options from "./searchParams/options.json";
import api from './api/BackEnd';
import getUrlParams from './utils/getUrlParams';
import appendElementToParent from "./utils/appendElementToParent";
import removeChildren from "./utils/removeChildren";
import createPages from "./utils/createPages";
import createFlagsFragment from "./utils/createFlagsFragment";
import paginationClickHandler from "./utils/paginationClickHandler";
import flagClickHandler from "./utils/flagClickHandler";

const pagesButtonsDiv = document.querySelector('.btns-page');
const bordersDiv = document.querySelector('.borders');
const backBtn = document.querySelector('.btn1');

window.addEventListener('load', ()=>{
    let name = getUrlParams('name');
    makeSearchRequest(name ?? 'german');
});

backBtn.addEventListener('click', ()=>{
    window.open(`./index.html`, '_self', 'noopener=yes');
})

bordersDiv.addEventListener('click', flagClickHandler);

pagesButtonsDiv.addEventListener('click', event => paginationClickHandler(event, pagesButtonsDiv, bordersDiv));    

/**
 * renderMainFlag
 * 
 * Anexa a bandeira junto com as informações do país escolhido na página
 * 
 * @param {*} countryData - Resposta da API com as informações do país
 */
function renderMainFlag(countryData){
    const fragment = document.createDocumentFragment();
    const flag = createFlagsFragment([countryData]);
    document.querySelector('.main-country').prepend(flag);

    const linkElement = document.createElement('a');
    const regionText = document.createTextNode(`${countryData.region}`);
    linkElement.appendChild(regionText);
    linkElement.href = `./index.html?name=${countryData.region.toLowerCase()}`;

    const regionP = createPElement('Região: ');
    regionP.appendChild(linkElement);

    const nameP = createPElement(`Nome: ${countryData.translations.pt || countryData.name}`);
    const capitalP = createPElement(`Capital: ${countryData.capital}`);
    const subregionP = createPElement(`Sub-região: ${countryData.subregion}`);
    const populationP = createPElement(`População: ${countryData.population}`);
    const countryLangs = countryData.languages.map(language => language.iso639_1);
    const countryLangsMap = options.languages.filter(language => countryLangs.includes(language.code)).map(language => language.name);
    const languagesP = createPElement(`Línguas: ${!countryLangsMap[1]? countryLangsMap[0]: countryLangsMap.join(', ')}`)
    appendToElement(fragment, nameP, capitalP, regionP, subregionP, populationP, languagesP);

    const textDiv = document.querySelector('.text');
    textDiv.appendChild(fragment);

    if(countryData.borders){
        apiRequestBorders(countryData.borders);
    }
}

/**
 * appendToElement
 * 
 * Anexa um ou mais elementos ao elemento pai informado
 * 
 * @param {HTMLElement} parent - Elemento pai 
 * @param  {...HTMLElement} childrens - Um ou mais elementos filhos
 */
function appendToElement(parent, ...childrens){
    childrens.forEach(element =>{
        parent.appendChild(element);
    });   
}

/**
 * apiRequestBorders
 * 
 * Faz a requisição para a API e retorna os dados dos países informados
 * 
 * @param {Array<String>} codes - Uma ou mais strings ISO 3166-1 representantes de cada país
 */
async function apiRequestBorders(codes){
    if(codes.length<1) return;

    try {
        const response = await api('alpha', `?codes=${codes.join(',')}`);
        renderBorderFlags(response.data);
    } catch (error) {
        console.log(error);
    }    
}

/**
 * renderBorderFlags
 * 
 * Anexa as bandeiras recebidas na página
 * 
 * @param {Array<*>} flags 
 */
function renderBorderFlags(flags){

    globalThis.responseParams = [];
    const numOfPages = Math.ceil(flags.length / 12);
    if (numOfPages > 1) {
        createPages(flags, numOfPages, pagesButtonsDiv);
    } else {
        const flagsSplit = flags.splice(0, 12);
        globalThis.responseParams.push(flagsSplit);
    }
    const flagsFragment = createFlagsFragment(globalThis.responseParams[0]);
    appendElementToParent(bordersDiv, flagsFragment);
}

/**
 * createPElement
 * 
 * Cria um elemento p com o texto informado e o retorna
 * 
 * @param {String} innerText - Texto para ser anexado ao elemento
 * @returns Elemento p com o texto
 */
function createPElement(innerText){
    const pElement = document.createElement('p');
    const textNode = document.createTextNode(innerText);
    pElement.appendChild(textNode);
    return pElement;
}

/**
 * makeSearchRequest
 * 
 * Faz a chamada para a API
 * 
 * @param {string} countryName - Nome do país para ser buscado
 */
async function makeSearchRequest(countryName) {
    removeChildren(bordersDiv);
    removeChildren(pagesButtonsDiv);

    try {
        const response = await api('name/', countryName);        
        // No caso desses países específicos a API estava retornando mais de um resultado
        // Então é necessário fazer o tratamento da resposta
        const responseData = countryName === 'India' ||
                  countryName === 'Guinea' ||
                  countryName === 'Samoa' ||
                  countryName === 'Sudan'
                    ? response.data[1]
                    : response.data[0];
        renderMainFlag(responseData)
    } catch (error) {
        console.error(error);
        alert('Something went wrong, please try again later');
    }
}