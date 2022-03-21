import(/* webpackPreload: true */ './searchParams/country.js');
import(/* webpackPreload: true */ './searchParams/options.json');
import(/* webpackPreload: true */ './helpers/generateOptionElements.js');
import api from './api/BackEnd';
import getUrlParams from './utils/getUrlParams';
import options from './searchParams/options.json';
import removeChildren from './utils/removeChildren';
import appendElementToParent from './utils/appendElementToParent';
import createPages from './utils/createPages';
import createFlagsFragment from './utils/createFlagsFragment';
import paginationClickHandler from './utils/paginationClickHandler';
import flagClickHandler from './utils/flagClickHandler';

const selectFilter = document.getElementById('select-search');
const searchBtn = document.getElementById('search-btn');
const pagesButtonsDiv = document.querySelector('.btns-page');
const flagsDiv = document.querySelector('.flags-display');

window.addEventListener('load', () => {
    let name = getUrlParams('name');

    if (name) {
        makeSearchRequest('region', name);
    } else {
        makeSearchRequest('name', options.countries[0].code);
    }
});

pagesButtonsDiv.addEventListener('click', event => paginationClickHandler(event, pagesButtonsDiv,flagsDiv));

selectFilter.addEventListener('change', () => {
    const optionName = selectFilter.options[selectFilter.selectedIndex].value;
    const filter2Text = document.querySelector('#txt');
    switch (optionName) {
        case 'region':
            importSearchParams('regions');
            filter2Text.innerText = 'Região';
            break;
        case 'capital':
            importSearchParams('capital');
            filter2Text.innerText = 'Capital';
            break;
        case 'lang':
            importSearchParams('language');
            filter2Text.innerText = 'Língua';
            break;
        case 'name':
            importSearchParams('country');
            filter2Text.innerText = 'País';
            break;
        case 'callingcode':
            importSearchParams('callCode');
            filter2Text.innerText = 'Código de ligação';
            break;
    }
});

searchBtn.addEventListener('click', () => makeSearchRequest());


flagsDiv.addEventListener('click', flagClickHandler);

/**
 * makeSearchRequest
 * 
 * Faz a chamada para a API
 * 
 * @param {'region'|'capital'|'lang'|'name'|'callingcode'} route - Rota da requisição
 * @param {string} searchParam - Parâmetro para ser buscado
 */
async function makeSearchRequest(route, searchParam) {
    removeChildren(flagsDiv);
    removeChildren(pagesButtonsDiv);

    const selectedOptionRoute = selectFilter.options[selectFilter.selectedIndex].value;
    const selectElementParameters = document.getElementById('2filter-options');
    const selectedOptionSearchParam = selectElementParameters.options[selectElementParameters.selectedIndex].code;
    const Route = route || selectedOptionRoute;
    const SearchParam = searchParam || selectedOptionSearchParam;
    const encodedString2 = Route === 'capital' ? encodeURIComponent(SearchParam) : SearchParam;

    try {
        const response = await api(`${Route}/`, encodedString2);
        // No caso desses países específicos a API estava retornando mais de um resultado
        // Então é necessário fazer o tratamento da resposta
        const responseArray =
            Route === 'name'
                ? SearchParam === 'India' ||
                  SearchParam === 'Guinea' ||
                  SearchParam === 'Samoa' ||
                  SearchParam === 'Sudan'
                    ? [response.data[1]]
                    : [response.data[0]]
                : response.data;
        globalThis.responseParams = [];
        const numOfPages = Math.ceil(responseArray.length / 12);

        if (numOfPages > 1) {
            createPages(responseArray, numOfPages, pagesButtonsDiv);
        } else {
            const flags = responseArray.splice(0, 12);
            globalThis.responseParams.push(flags);
        }

        const flagsFragment = createFlagsFragment(globalThis.responseParams[0]);
        appendElementToParent(flagsDiv, flagsFragment);
    } catch (error) {
        console.error(error);
        alert('Something went wrong, please try again later');
    }
}

/**
 * importSearchParams
 * 
 * Importa os parâmetros de pesquisa dinâmicamente e os anexa no elemento Select de opções de busca
 * 
 * @param {'region'|'capital'|'lang'|'name'|'callingcode'} option - Opção para ser importada
 */
async function importSearchParams(option) {
    const options = await import(`./searchParams/${option}.js`);
    setSelectOptions(options.default);
}

/**
 * setSelectOptions
 * 
 * Anexa todas as opções recebidas no select de parâmetros de busca
 * 
 * @param {Array<HTMLOptionElement>} optionsArray - Array com todas as opções
 */
function setSelectOptions(optionsArray) {
    const searchParamSelect = document.getElementById('2filter-options');
    removeChildren(searchParamSelect);
    const fragment = document.createDocumentFragment();
    optionsArray.map(option => {
        fragment.appendChild(option);
    });
    searchParamSelect.appendChild(fragment);
    const parentDiv = searchParamSelect.closest('div');
    if (parentDiv.classList.contains('hide')) {
        parentDiv.classList.remove('hide');
    }
}

// Popula o select de parâmetros de busca no final do carregamento da página
fireChangeEvent(selectFilter);

/**
 * fireChangeEvent
 * 
 * Função para disparar um evento de 'change' em um elemento html
 * 
 * @param {HTMLElement} htmlElement - Elemento html para disparar o evento
 */
function fireChangeEvent(htmlElement) {
    const changeEvent = new Event('change');
    htmlElement.dispatchEvent(changeEvent);
}
