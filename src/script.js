const selectFilter = document.getElementById('select-search');
const searchBtn = document.getElementById('search-btn');
const pagesButtonsDiv = document.querySelector('.btns-page');
const flagsDiv = document.querySelector('.flags-display');
import(/* webpackPreload: true */ './searchParams/country.js');
import(/* webpackPreload: true */ './searchParams/countries.js');
import(/* webpackPreload: true */ './aux/getOpts.js');
import axios from 'axios';

//on page load get the url parameters
window.addEventListener('load', () => {
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
        makeSearchRequest('region', name);
    } else {
        //make default api request to show one flag on page load
        setTimeout(makeSearchRequest.bind(this, 'name', 'japan'), 200);
    }
});

pagesButtonsDiv.addEventListener('click', (event) => {
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
    fixPagination(event.target);
    //create the flags of the selected page and render them
    const flagsFragment = createFlagsFragment(
        globalThis.responseParams[event.target.value - 1],
    );
    appendElementToFlagsDiv(flagsFragment);
});

//change the options for the second select accordingly to the first selected option
//also change the title for the second select
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

//make the api request when the search button is clicked
searchBtn.addEventListener('click', () => {
    makeSearchRequest();
});

//add one event listener on the parent div, listen for clicks on images and then redirect to the second page
flagsDiv.addEventListener('click', (event) => {
    if (event.target.tagName === 'IMG') {
        window.open(
            `./index2.html?name=${event.target.countryName}`,
            '_blank',
            'noopener=yes',
        );
    }
});

//load and display the "default" options on page load
updateSelect();

//to display the buttons in one line on small screens
async function fixPagination(activeButton) {
    const viewWidth = Math.max(
        document.documentElement.clientWidth || 0,
        window.innerWidth || 0,
    );
    if (viewWidth < 380 && pagesButtonsDiv.children.length > 7) {
        const jquery = await import('jquery/dist/jquery.slim.min.js');
        const $ = jquery.default;

        $.fn.exists = function () {
            return this.length !== 0;
        };

        const pagingButtonsArray = $('.btns-page button');
        const activeButtonIndex = pagingButtonsArray.index(activeButton);
        pagingButtonsArray.addClass('hide');
        
        switch (activeButtonIndex) {
            case 1:
                jqueryRemoveClass(pagingButtonsArray, 1, 2, 3, 4);
                break;
            case 2:
                jqueryRemoveClass(pagingButtonsArray, 1, 2, 3, 4);
                break;
            case 3:
                jqueryRemoveClass(pagingButtonsArray, 1, 2, 3, 4);
                break;
            case 7:
                jqueryRemoveClass(pagingButtonsArray, 1, 5, 6, 7);
                break;
            case 8:
                jqueryRemoveClass(pagingButtonsArray, 1, 5, 6, 7);
                break;
            default:
                jqueryRemoveClass(pagingButtonsArray, 1, activeButtonIndex -1, activeButtonIndex, activeButtonIndex +1);
                break;

        }
        const secLastBtn = document.querySelector(
            '.btns-page button:nth-last-child(2)',
        );
        secLastBtn.classList.remove('hide');
    }
}

//using jquery to remove a class from multiple buttons
function jqueryRemoveClass(buttonsArray, ...indexArray) {
    indexArray.forEach((index) => {
        buttonsArray.eq(index).removeClass('hide');
    });
}

//delete all childrens from the flags div and append a new element
function appendElementToFlagsDiv(element) {
    removeChildren(flagsDiv);
    flagsDiv.append(element);
}

//remove all children from a element
function removeChildren(divElement) {
    while (divElement.firstChild) {
        divElement.removeChild(divElement.lastChild);
    }
}

//create and return a document fragment with all flags
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
        fixPagination(nextEl);
        appendElementToFlagsDiv(flagsFragment);
    } else if (param == 'prev' && prevEl.id !== 'prev') {
        activeButton.classList.toggle('active');
        prevEl.classList.toggle('active');
        const flagsFragment = createFlagsFragment(
            globalThis.responseParams[prevEl.value - 1],
        );
        fixPagination(prevEl);
        appendElementToFlagsDiv(flagsFragment);
    }
}

async function makeSearchRequest(param1, param2) {
    removeChildren(flagsDiv);
    removeChildren(pagesButtonsDiv);
    //"1" is for the first param on the url and "2" is for the second
    const selectedOption1 =
        selectFilter.options[selectFilter.selectedIndex].value;
    const selectElement2 = document.getElementById('2filter-options');
    const selectedOption2 =
        selectElement2.options[selectElement2.selectedIndex].code;
    const string1 = param1 || selectedOption1;
    const string2 = param2 || selectedOption2;
    //encode the second string if the first string is "capital"
    const encodedString2 =
        string1 === 'capital' ? encodeURIComponent(string2) : string2;
    try {
        const response = await axios.get(
            `https://restcountries.eu/rest/v2/${string1}/${encodedString2}`,
        );
        //these results where returning more than one flag, that's why i'm filtering the response data
        const responseArray =
            string1 === 'name'
                ? string2 === 'India' ||
                  string2 === 'Guinea' ||
                  string2 === 'Samoa' ||
                  string2 === 'Sudan'
                    ? [response.data[1]]
                    : [response.data[0]]
                : response.data;
        globalThis.responseParams = [];
        const numOfPages = Math.ceil(responseArray.length / 12);
        if (numOfPages > 1) {
            createPages(responseArray, numOfPages);
        } else {
            const flags = responseArray.splice(0, 12);
            globalThis.responseParams.push(flags);
        }
        const flagsFragment = createFlagsFragment(globalThis.responseParams[0]);
        appendElementToFlagsDiv(flagsFragment);
    } catch (error) {
        console.error(error);
        alert('Something went wrong, please try again later');
    }
}

//create the buttons for paging
function createPages(array, numOfPages) {
    const buttons = [];
    for (let i = 1; i <= numOfPages; i++) {
        const flags = array.splice(0, 12);
        globalThis.responseParams.push(flags);
        buttons.push(createButton(i));
    }
    renderButtons(buttons);
}

//create each individual button
function createButton(pageNumber) {
    const btn = document.createElement('button');
    btn.innerText = pageNumber;
    btn.value = pageNumber;
    return btn;
}

//clean the old buttons and append the new ones
function renderButtons(array) {
    removeChildren(pagesButtonsDiv);
    const fragment = document.createDocumentFragment();
    const [btnPrev, btnNext] = createPrevNextBtn();
    const viewWidth = Math.max(
        document.documentElement.clientWidth || 0,
        window.innerWidth || 0,
    );
    fragment.appendChild(btnPrev);
    array.forEach((item, index) => {
        if (index === 0) {
            item.classList.toggle('active');
        }
        if (index > 3 && index < array.length - 1 && viewWidth < 380) {
            item.classList.add('hide');
        }
        fragment.appendChild(item);
    });
    fragment.appendChild(btnNext);
    pagesButtonsDiv.appendChild(fragment);
}

//create the previous and next arrow buttons
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

//for importing the search parameters
//i made this way for reducing the download size on the first visit
async function importSearchParams(option) {
    const Arr = await import(`./searchParams/${option}.js`);
    setSelectOptions(Arr.default);
}

//for appending the options 
function setSelectOptions(optionsArray) {
    const select2 = document.getElementById('2filter-options');
    removeChildren(select2);
    const fragment = document.createDocumentFragment();
    optionsArray.forEach((option) => {
        fragment.appendChild(option);
    });
    select2.appendChild(fragment);
    const parentDiv = select2.closest('div');
    if (parentDiv.classList.contains('hide')) {
        parentDiv.classList.remove('hide');
    }
}

//creating a dummy event for appending the default options on the select #2
function updateSelect() {
    const event1 = new Event('change');
    selectFilter.dispatchEvent(event1);
}
