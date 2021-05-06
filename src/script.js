const selectFilter = document.getElementById("select-search");
const searchBtn = document.getElementById("search-btn");
const pagesDiv = document.querySelector(".btns-page");
const flagsDiv = document.querySelector(".flags-display");
import(/* webpackPreload: true */ './searchParams/country.js');
import(/* webpackPreload: true */ './searchParams/countries.js');
import(/* webpackPreload: true */ './aux/getOpts.js');
import axios from 'axios';
import $ from 'jquery/dist/jquery.slim.min.js';

$.fn.exists = function () {
	return this.length !== 0;
};

window.addEventListener("load", () => {
	let name = "";
	try {
		const url_string = window.location.href.toLocaleLowerCase();
		const url = new URL(url_string);
		name = url.searchParams.get("name");
	} catch (error) {
		console.log(error);
	}
	if (name) {
		apiSearchRequest("region", name);
	} else {
		setTimeout(apiSearchRequest.bind(this, "name", "japan"), 100);
	}
});

pagesDiv.addEventListener("click", (ev) => {
	if (ev.target.tagName !== "BUTTON") return;
	if (!/[0-9]/.test(ev.target.value)) {
		if (ev.target.id == "next") {
			changeGlobalActiveBtn("next");
		} else {
			changeGlobalActiveBtn("prev");
		}
		fixPagination();
		return;
	}
	globalThis.activeBtn.classList.toggle("active");
	globalThis.activeBtn = ev.target;
	globalThis.activeBtn.classList.toggle("active");
	fixPagination();
	if (ev.target.params) {
		renderFlags(ev.target.params);
	}
});

function fixPagination() {
	const vw = Math.max(
		document.documentElement.clientWidth || 0,
		window.innerWidth || 0
	);
	if (vw < 380 && pagesDiv.children.length > 7) {
		const btn = document.querySelector(".active");
		const pageBtnsArray = $(".btns-page button");
		const index = pageBtnsArray.index(btn);
		pageBtnsArray.addClass("hide");
		jqueryRemoveClass(pageBtnsArray, 1, index - 1, index, index + 1);
		if (!pageBtnsArray.eq(index + 2).exists()) {
			jqueryRemoveClass(pageBtnsArray, index - 2, index - 3);
		}
		if (!pageBtnsArray.eq(index + 3).exists()) {
			jqueryRemoveClass(pageBtnsArray, index - 2);
		}
		if (index == 1) {
			jqueryRemoveClass(pageBtnsArray, index + 1, index + 2, index + 3);
		}
		if (index == 2) {
			jqueryRemoveClass(pageBtnsArray, index + 1, index + 2);
		}
		const btnPen = document.querySelector(
			".btns-page button:nth-last-child(2)"
		);
		btnPen.classList.remove("hide");
	}
}

function jqueryRemoveClass(pageBtnsArray, ...array) {
	array.forEach((index) => {
		pageBtnsArray.eq(index).removeClass("hide");
	});
}

selectFilter.addEventListener("change", () => {
	const optName = selectFilter.options[selectFilter.selectedIndex].value;
	const filter2Text = document.querySelector("#txt");
	switch (optName) {
		case "region":
			importSearchParams("regions");
			filter2Text.innerText = "Região";
			break;
		case "capital":
			importSearchParams("capital");
			filter2Text.innerText = "Capital";
			break;
		case "lang":
			importSearchParams("language");
			filter2Text.innerText = "Língua";
			break;
		case "name":
			importSearchParams("country");
			filter2Text.innerText = "País";
			break;
		case "callingcode":
			importSearchParams("callCode");
			filter2Text.innerText = "Código de ligação";
			break;
	}
});

searchBtn.addEventListener("click", () => {
	apiSearchRequest();
});

flagsDiv.addEventListener("click", (ev) => {
	if (ev.target.tagName == "IMG") {
		window.open(
			`./index2.html?name=${ev.target.countryName}`,
			"_blank",
			"noopener=yes"
		);
	}
});

const event1 = new Event("change");
selectFilter.dispatchEvent(event1);

async function apiSearchRequest(urlParams1, urlParams2) {
	pagesDiv.innerText = "";
	if (!urlParams1) {
		var urlOpt = selectFilter.options[selectFilter.selectedIndex].value;
		var searchSelectObj = document.getElementById("2filter-options");
		var searchStr = searchSelectObj.options[searchSelectObj.selectedIndex].code;
	}
	try {
		const str1 = urlParams1
			? urlParams1 == "capital"
				? encodeURIComponent(urlParams2)
				: urlParams2
			: urlOpt == "capital"
			? encodeURIComponent(searchStr)
			: searchStr;
		const response = await axios.get(
			`https://restcountries.eu/rest/v2/${urlParams1 || urlOpt}/${str1}`
		);
		const str2 = urlParams1 ? urlParams1 : urlOpt;
		const flag =
			str2 == "name"
				? str1 == "India" ||
				  str1 == "Guinea" ||
				  str1 == "Samoa" ||
				  str1 == "Sudan"
					? [response.data[1]]
					: [response.data[0]]
				: response.data;
		createFlags(flag);
	} catch (error) {
		console.log(error);
	}
}

function setFilterOptions(elArray) {
	const filters2 = document.getElementById("2filter-options");
	filters2.innerText = "";
	elArray.forEach((option) => filters2.appendChild(option));
	const parentDiv = filters2.closest("div");
	if (parentDiv.classList.contains("hide")) {
		parentDiv.classList.remove("hide");
	}
}

async function importSearchParams(opt) {
	const Arr = await import(`./searchParams/${opt}.js`);
	setFilterOptions(Arr.default);
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
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
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
        if(ind > 3 && ind < arr.length-1 && vw < 380){
            it.classList.add('hide');
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