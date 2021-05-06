import {l as langObjArr} from "./searchParams/languages.js";
const pagesDiv = document.querySelector('.btns-page');
const flagsDiv = document.querySelector('.borders');
const backBtn = document.querySelector('.btn1');
import axios from 'axios';

window.addEventListener('load', ()=>{
    try {
        const url_string = (window.location.href).toLocaleLowerCase();
        const url = new URL(url_string);
        const name = url.searchParams.get('name');
        apiRequest(name || 'brazil');
    } catch (error) {
        console.log(error)
    }
});

backBtn.addEventListener('click', ()=>{
    window.open(`./index.html`, '_self', 'noopener=yes');
})

flagsDiv.addEventListener('click',ev=>{
    if(ev.target.tagName == 'IMG'){
        window.open(`./index2.html?name=${ev.target.countryName}`, '_blank', 'noopener=yes');
    }
})

pagesDiv.addEventListener('click', ev=>{
    if(!/[0-9]/.test(ev.target.value)){
        if(ev.target.id == 'next'){
            changeGlobalActiveBtn('next');
        }else{
            changeGlobalActiveBtn('prev');
        }
        return;
    }
    globalThis.activeBtn.classList.toggle('active');
    globalThis.activeBtn = ev.target;
    globalThis.activeBtn.classList.toggle('active');
    if(ev.target.params){
        renderFlags(ev.target.params);
    }    
});    

async function apiRequest(code){
    try {
        const response = await axios.get(`https://restcountries.eu/rest/v2/name/${code}`);
        const flag = code == 'india'||code == 'guinea' || code == 'samoa' || code == 'sudan'? response.data[1]: response.data[0];
        renderMainFlag(flag);
    } catch (error) {
        console.log(error);
    }
}

async function apiRequestCountryBorders(code){
    if(code.length<1) return;
    try {
        const response = await axios.get(`https://restcountries.eu/rest/v2/alpha?codes=${code.join(';')}`);
        createFlags(response.data);
    } catch (error) {
        console.log(error);
    }
}

function renderMainFlag(country){
    const img = document.createElement('img');
    img.src = country.flag;
    document.querySelector('.main-country').prepend(img);
    const aEl = document.createElement('a');
    const regionTxt = document.createTextNode(`${country.region}`);
    aEl.appendChild(regionTxt);
    aEl.href = `./index.html?name=${country.region.toLocaleLowerCase()}`;
    const pEl = document.createElement('p');
    const copy = pEl.cloneNode();
    copy.appendChild(document.createTextNode('Região: '));
    copy.appendChild(aEl);
    const textArr = [];
    textArr.push(cloneElAndSetText(pEl, `Nome: ${country.translations.pt || country.name}`))
    textArr.push(cloneElAndSetText(pEl, `Capital: ${country.capital}`))
    textArr.push(copy)
    textArr.push(cloneElAndSetText(pEl, `Sub-região: ${country.subregion}`))
    textArr.push(cloneElAndSetText(pEl, `População: ${country.population}`))
    const resLangs = country.languages.map(x=>x.iso639_1);
    const resLangsMap = langObjArr.filter(i=> resLangs.includes(i.code)).map(i=>i.name);
    textArr.push(cloneElAndSetText(pEl, `Línguas: ${!resLangsMap[1]?resLangsMap[0]:resLangsMap.join(', ')}`))
    const outputDiv = document.querySelector('.text');
    textArr.forEach(a=>outputDiv.appendChild(a));
    apiRequestCountryBorders(country.borders);
}

function cloneElAndSetText(originalEl, text){
    const elClone = originalEl.cloneNode();
        elClone.innerText = text;
        return elClone;
}

function createPageBtn(func, pageNum) {
	const btn = document.createElement("button");
    btn.innerText = pageNum;
	btn.value = pageNum;
	btn.params = func(pageNum - 1);
	return btn;
}

function flagPage(flags) {
	return (page = 0) => {
		const arr = [];
		for (let i = 0; i < 12; i++) {
			if (!flags[i + page * 12]) break;
			arr.push(flags[i + page * 12]);
		}
		return arr;
	};
}

function renderPagingBtns(arr) {
	pagesDiv.innerHTML = "";
	const btn = document.createElement("button");
	const btnPrev = btn.cloneNode();
	const btnNext = btn.cloneNode();
	btnNext.id = "next";
	btnPrev.id = "prev";
	btnNext.innerText = "˃";
	btnPrev.innerText = "˂";
	pagesDiv.appendChild(btnPrev);
	arr.forEach((it, ind) => {
		if (ind == 0) {
			it.classList.toggle("active");
			globalThis.activeBtn = it;
		}
		pagesDiv.appendChild(it);
	});
	pagesDiv.appendChild(btnNext);
}

function createFlags(responseObj) {
	const imgArr = responseObj.map(item=> {
		const imgEl = document.createElement("img");
		imgEl.src = item.flag;
		imgEl.style.height = 'auto';
		imgEl.style.width = 'auto';
		imgEl.countryName = item.name;
		imgEl.alt = `${item.name} flag`
		imgEl.classList.add("flag");
		return imgEl;
	});
	const pages = Math.ceil(imgArr.length / 12);
	const x = flagPage(imgArr);
	if (pages > 1) {
		const btns = [];
		for (let i = 1; i <= pages; i++) {
			btns.push(createPageBtn(x, i));
		}
		renderPagingBtns(btns);
	}
	renderFlags(x());
}

function renderFlags(flags) {
	flagsDiv.innerHTML = "";
	flags.forEach(i=> flagsDiv.append(i));
}

function changeGlobalActiveBtn(param) {
	globalThis.activeBtn.classList.toggle("active");
	if (
		param == "next" &&
		globalThis.activeBtn.nextElementSibling.params != undefined
	) {
		renderFlags(globalThis.activeBtn.nextElementSibling.params);
		globalThis.activeBtn = globalThis.activeBtn.nextElementSibling;
	} else if (
		param == "prev" &&
		globalThis.activeBtn.previousElementSibling.params != undefined
	) {
		renderFlags(globalThis.activeBtn.previousElementSibling.params);
		globalThis.activeBtn = globalThis.activeBtn.previousElementSibling;
	}
	globalThis.activeBtn.classList.toggle("active");
}