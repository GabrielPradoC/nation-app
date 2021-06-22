import {l as langObjArr} from "./searchParams/languages.js";
const pagesButtonsDiv = document.querySelector('.btns-page');
const bordersDiv = document.querySelector('.borders');
const backBtn = document.querySelector('.btn1');
import axios from 'axios';

//on page load get the url parameters
window.addEventListener('load', ()=>{
    let name = '';
    try {
        const url_string = window.location.href.toLocaleLowerCase();
        const url = new URL(url_string);
        name = url.searchParams.get('name');
    } catch (error) {
        console.log(error);
    }
    if (name) {
        //make api request using url parameter
        makeSearchRequest(name);
    } else {
        //make default api request to show one flag on page load
        makeSearchRequest('russia');
    }
});

//button for returning to the first page
backBtn.addEventListener('click', ()=>{
    window.open(`./index.html`, '_self', 'noopener=yes');
})

//add one event listener on the parent div, listen for clicks on images and then redirect to the second page
bordersDiv.addEventListener('click', (event) => {
    if (event.target.tagName === 'IMG') {
        window.open(
            `./index2.html?name=${event.target.countryName}`,
            '_blank',
            'noopener=yes',
        );
    }
});

pagesButtonsDiv.addEventListener('click', event=>{
    //check if the clicked element is a button
    const activePageButton = document.querySelector('.active');
    if (event.target.tagName !== 'BUTTON' || event.target.value == activePageButton.value) return;
    
    //check if the clicked button is a page button or a arow to switch to next/previous page
    if (!/[0-9]/.test(event.target.value)) {
        if (event.target.id === 'next') {
            //next
            changeGlobalActiveBtn('next', activePageButton);
        } else {
            //previous
            changeGlobalActiveBtn('prev', activePageButton);
        }
        //if the paging div has more than 7 buttons AND the view width is less than 380
        //i made this to prevent the buttons glitching when there isn't enough space for all of them
        return;
    }
    //if the event target is a button with a number the toggle the active button
    activePageButton.classList.toggle('active');
    event.target.classList.toggle('active');
    //create the flags of the selected page and render them
    const flagsFragment = createFlagsFragment(
        globalThis.responseParams[event.target.value - 1],
    );
    appendElementToDiv(bordersDiv, flagsFragment);
});    

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
    const countryLangsMap = langObjArr.filter(language => countryLangs.includes(language.code)).map(language => language.name);
    const languagesP = createPElement(`Línguas: ${!countryLangsMap[1]? countryLangsMap[0]: countryLangsMap.join(', ')}`)
    appendToElement(fragment, nameP, capitalP, regionP, subregionP, populationP, languagesP);
    const textDiv = document.querySelector('.text');
    textDiv.appendChild(fragment);
    //make request for country borders
    apiRequestBorders(countryData.borders)
}

function appendToElement(parent, ...childrens){
    childrens.forEach(element =>{
        parent.appendChild(element);
    });   
}

async function apiRequestBorders(codes){
    if(codes.length<1) return;
    try {
        const response = await axios.get(`https://restcountries.eu/rest/v2/alpha?codes=${codes.join(';')}`);
        renderBorderFlags(response.data);
    } catch (error) {
        console.log(error);
    }    
}

function renderBorderFlags(flags){
    globalThis.responseParams = [];
    const numOfPages = Math.ceil(flags.length / 12);
    if (numOfPages > 1) {
        createPages(flags, numOfPages);
    } else {
        const flagsSplit = flags.splice(0, 12);
        globalThis.responseParams.push(flagsSplit);
    }
    const flagsFragment = createFlagsFragment(globalThis.responseParams[0]);
    appendElementToDiv(bordersDiv, flagsFragment);
}

function createPElement(innerText){
    const pElement = document.createElement('p');
    const text = document.createTextNode(innerText);
    pElement.appendChild(text);
    return pElement;
}

//function to change wich button is currently the active when the arrows are clicked
function changeGlobalActiveBtn(param, activeButton) {
    const prevEl = activeButton.previousElementSibling;
    const nextEl = activeButton.nextElementSibling;
    if (param == 'next' && nextEl.id !== 'next') {
        activeButton.classList.toggle('active');
        nextEl.classList.toggle('active');
        //create the flags and append them
        const flagsFragment = createFlagsFragment(
            globalThis.responseParams[nextEl.value - 1],
        );
        appendElementToDiv(bordersDiv, flagsFragment);
    } else if (param == 'prev' && prevEl.id !== 'prev') {
        activeButton.classList.toggle('active');
        prevEl.classList.toggle('active');
        const flagsFragment = createFlagsFragment(
            globalThis.responseParams[prevEl.value - 1],
        );
        appendElementToDiv(bordersDiv, flagsFragment);
    }
}

async function makeSearchRequest(countryName) {
    removeChildren(bordersDiv);
    removeChildren(pagesButtonsDiv);
    try {
            const response = await axios.get(
                `https://restcountries.eu/rest/v2/name/${countryName}`,
            );        
        //these results were returning more than one flag, that's why i'm filtering the response data
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


function appendElementToDiv(div, element) {
    removeChildren(div);
    div.append(element);
}

function renderButtons(array) {
    removeChildren(pagesButtonsDiv);
    const fragment = document.createDocumentFragment();
    const [btnPrev, btnNext] = createPrevNextBtn();
    fragment.appendChild(btnPrev);
    array.forEach((item, index) => {
        if (index === 0) {
            item.classList.toggle('active');
        }
        fragment.appendChild(item);
    });
    fragment.appendChild(btnNext);
    pagesButtonsDiv.appendChild(fragment);
}



function removeChildren(divElement) {
    while (divElement.firstChild) {
        divElement.removeChild(divElement.lastChild);
    }
}

function createPages(array, numOfPages) {
    const buttons = [];
    for (let i = 1; i <= numOfPages; i++) {
        const flags = array.splice(0, 12);
        globalThis.responseParams.push(flags);
        buttons.push(createButton(i));
    }
    renderButtons(buttons);
}

function createButton(pageNumber) {
    const btn = document.createElement('button');
    btn.innerText = pageNumber;
    btn.value = pageNumber;
    return btn;
}

function createPrevNextBtn() {
    const btn = document.createElement('button');
    const btnPrev = btn.cloneNode();
    const btnNext = btn.cloneNode();
    btnNext.id = 'next';
    btnPrev.id = 'prev';
    btnNext.innerText = '˃';
    btnPrev.innerText = '˂';
    return [btnPrev, btnNext];
}

function createFlagsFragment(resFlagsArray) {
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < resFlagsArray.length; i++) {
        const imgEl = document.createElement('img');
        imgEl.src = resFlagsArray[i].flag;
        imgEl.countryName = resFlagsArray[i].name;
        imgEl.alt = `Flag of ${resFlagsArray[i].name}`;
        imgEl.classList.add('flag');
        fragment.appendChild(imgEl);
    }
    return fragment;
}
