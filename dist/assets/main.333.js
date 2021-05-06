(self["webpackChunknations_app"] = self["webpackChunknations_app"] || []).push([[333,507,903],{

/***/ 903:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function getOpts(textArr){
    if(textArr[0] instanceof Object){
        const OptArr = [];
        textArr.forEach(obj=>{
            const el = document.createElement('option');
            el.innerText = obj.name;
            el.code = obj.code;
            OptArr.push(el);
        })
        return OptArr;
    }else{
        const OptArr = [];
        textArr.forEach(code=>{
            const el = document.createElement('option');
            el.innerText = code;
            if(code.includes('+')){
                code = code.replace('+', '');
            }
            el.code = code;
            OptArr.push(el);
    });
    return OptArr;
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getOpts);

/***/ }),

/***/ 507:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "countriesObjArr": () => (/* binding */ countriesObjArr)
/* harmony export */ });
const countriesObjArr=[{name:"Afeganistão",code:"Afghanistan",},{name:"África do Sul",code:"South%20Africa",},{name:"Albânia",code:"Albania",},{name:"Alemanha",code:"Germany",},{name:"Andorra",code:"Andorra",},{name:"Angola",code:"Angola",},{name:"Anguilla",code:"Anguilla",},{name:"Antártida",code:"Antarctica",},{name:"Antígua e Barbuda",code:"Antigua%20and%20Barbuda",},{name:"Arábia Saudita",code:"Saudi%20Arabia",},{name:"Argélia",code:"Algeria",},{name:"Argentina",code:"Argentina",},{name:"Armênia",code:"Armenia",},{name:"Aruba",code:"Aruba",},{name:"Austrália",code:"Australia",},{name:"Áustria",code:"Austria",},{name:"Azerbaijão",code:"Azerbaijan",},{name:"Bahamas",code:"Bahamas",},{name:"Bahrein",code:"Bahrain",},{name:"Bangladesh",code:"Bangladesh",},{name:"Barbados",code:"Barbados",},{name:"Belarus",code:"Belarus",},{name:"Bélgica",code:"Belgium",},{name:"Belize",code:"Belize",},{name:"Benin",code:"Benin",},{name:"Bermudas",code:"Bermuda",},{name:"Bonaire",code:"Bonaire",},{name:"Bolívia",code:"Bolivia",},{name:"Bósnia-Herzegóvina",code:"Bosnia%20and%20Herzegovina",},{name:"Botsuana",code:"Botswana",},{name:"Brasil",code:"Brazil",},{name:"Brunei",code:"Brunei%20Darussalam",},{name:"Bulgária",code:"Bulgaria",},{name:"Burkina Fasso",code:"Burkina%20Faso",},{name:"Burundi",code:"Burundi",},{name:"Butão",code:"Bhutan",},{name:"Cabo Verde",code:"Cabo%20Verde",},{name:"Camarões",code:"Cameroon",},{name:"Camboja",code:"Cambodia",},{name:"Canadá",code:"Canada",},{name:"Cazaquistão",code:"Kazakhstan",},{name:"Chade",code:"Chad",},{name:"Chile",code:"Chile",},{name:"China",code:"China",},{name:"Chipre",code:"Cyprus",},{name:"Cingapura",code:"Singapore",},{name:"Colômbia",code:"Colombia",},{name:"Comores",code:"Comoros",},{name:"Congo",code:"Congo",},{name:"Coréia do Norte",code:"Korea%20(Democratic%20People's%20Republic%20of)",},{name:"Coréia do Sul",code:"Korea%20(Republic%20of)",},{name:"Costa do Marfim",code:"C%C3%B4te%20d'Ivoire",},{name:"Costa Rica",code:"Costa%20Rica",},{name:"Croácia",code:"Croatia",},{name:"Cuba",code:"Cuba",},{name:"Curaçao",code:"Cura%C3%A7ao",},{name:"Dinamarca",code:"Denmark",},{name:"Djibuti",code:"Djibouti",},{name:"Dominica",code:"Dominica",},{name:"Egito",code:"Egypt",},{name:"El Salvador",code:"El%20Salvador",},{name:"Emirados Árabes Unidos",code:"United%20Arab%20Emirates",},{name:"Equador",code:"Ecuador",},{name:"Eritréia",code:"Eritrea",},{name:"Eslováquia",code:"Slovakia",},{name:"Eslovênia",code:"Slovenia",},{name:"Espanha",code:"Spain",},{name:"Estados Unidos",code:"United%20States%20of%20America",},{name:"Estônia",code:"Estonia",},{name:"Etiópia",code:"Ethiopia",},{name:"Fiji",code:"Fiji",},{name:"Filipinas",code:"Philippines",},{name:"Finlândia",code:"Finland",},{name:"França",code:"France",},{name:"Gabão",code:"Gabon",},{name:"Gâmbia",code:"Gambia",},{name:"Gana",code:"Ghana",},{name:"Geórgia",code:"Georgia",},{name:"Gibraltar",code:"Gibraltar",},{name:"Grã-Bretanha (Reino Unido, UK)",code:"United%20Kingdom",},{name:"Granada",code:"Grenada",},{name:"Grécia",code:"Greece",},{name:"Groelândia",code:"Greenland",},{name:"Guadalupe",code:"Guadeloupe",},{name:"Guam (Território dos Estados Unidos)",code:"Guam",},{name:"Guatemala",code:"Guatemala",},{name:"Guernsey",code:"Guernsey",},{name:"Guiana",code:"Guyana",},{name:"Guiana Francesa",code:"French%20Guiana",},{name:"Guiné",code:"Guinea",},{name:"Guiné Equatorial",code:"Equatorial%20Guinea",},{name:"Guiné-Bissau",code:"Guinea-Bissau",},{name:"Haiti",code:"Haiti",},{name:"Holanda",code:"Netherlands",},{name:"Honduras",code:"Honduras",},{name:"Hong Kong",code:"Hong%20Kong",},{name:"Hungria",code:"Hungary",},{name:"Iêmen",code:"Yemen",},{name:"Ilha Bouvet",code:"Bouvet%20Island",},{name:"Ilha de Man",code:"Isle%20of%20Man",},{name:"Ilha Natal",code:"Christmas%20Island",},{name:"Ilha Pitcairn",code:"Pitcairn",},{name:"Ilha Reunião",code:"R%C3%A9union",},{name:"Ilhas Aland",code:"%C3%85land%20Islands",},{name:"Ilhas Cayman",code:"Cayman%20Islands",},{name:"Ilhas Cocos",code:"Cocos%20(Keeling)%20Islands",},{name:"Ilhas Cook",code:"Cook%20Islands",},{name:"Ilhas Faroes",code:"Faroe%20Islands",},{name:"Ilhas Geórgia do Sul e Sandwich do Sul",code:"South%20Georgia",},{name:"Ilhas Heard e McDonald",code:"Heard%20Island%20and%20McDonald%20Islands",},{name:"Ilhas Malvinas",code:"Falkland%20Islands%20(Malvinas)",},{name:"Ilhas Marianas do Norte",code:"Northern%20Mariana%20Islands",},{name:"Ilhas Marshall",code:"Marshall%20Islands",},{name:"Ilhas Menores dos Estados Unidos",code:"United%20States%20Minor%20Outlying%20Islands",},{name:"Ilhas Norfolk",code:"Norfolk%20Island",},{name:"Ilhas Salomão",code:"Solomon%20Islands",},{name:"Ilhas Seychelles",code:"Seychelles",},{name:"Ilhas Tokelau",code:"Tokelau",},{name:"Ilhas Turks e Caicos",code:"Turks",},{name:"Ilhas Virgens (Estados Unidos)",code:"Virgin%20Islands%20(U.S.)",},{name:"Ilhas Virgens (Inglaterra)",code:"Virgin%20Islands%20(British)",},{name:"Índia",code:"India",},{name:"Indonésia",code:"Indonesia",},{name:"Irã",code:"Iran",},{name:"Iraque",code:"Iraq",},{name:"Irlanda",code:"Ireland",},{name:"Islândia",code:"Iceland",},{name:"Israel",code:"Israel",},{name:"Itália",code:"Italy",},{name:"Jamaica",code:"Jamaica",},{name:"Japão",code:"Japan",},{name:"Jersey",code:"Jersey",},{name:"Jordânia",code:"Jordan",},{name:"Kiribati",code:"Kiribati",},{name:"Kosovo",code:"Kosovo",},{name:"Kuait",code:"Kuwait",},{name:"Laos",code:"Lao%20People's%20Democratic%20Republic",},{name:"Lesoto",code:"Lesotho",},{name:"Letônia",code:"Latvia",},{name:"Líbano",code:"Lebanon",},{name:"Libéria",code:"Liberia",},{name:"Líbia",code:"Libya",},{name:"Liechtenstein",code:"Liechtenstein",},{name:"Lituânia",code:"Lithuania",},{name:"Luxemburgo",code:"Luxembourg",},{name:"Macau",code:"Macao",},{name:"Macedônia (República Yugoslava)",code:"Macedonia",},{name:"Madagascar",code:"Madagascar",},{name:"Malásia",code:"Malaysia",},{name:"Malaui",code:"Malawi",},{name:"Maldivas",code:"Maldives",},{name:"Mali",code:"Mali",},{name:"Malta",code:"Malta",},{name:"Marrocos",code:"Morocco",},{name:"Martinica",code:"Martinique",},{name:"Maurício",code:"Mauritius",},{name:"Mauritânia",code:"Mauritania",},{name:"Mayotte",code:"Mayotte",},{name:"México",code:"Mexico",},{name:"Micronésia",code:"Micronesia",},{name:"Moçambique",code:"Mozambique",},{name:"Moldova",code:"Moldova",},{name:"Mônaco",code:"Monaco",},{name:"Mongólia",code:"Mongolia",},{name:"Montenegro",code:"Montenegro",},{name:"Montserrat",code:"Montserrat",},{name:"Myanma",code:"Myanmar",},{name:"Namíbia",code:"Namibia",},{name:"Nauru",code:"Nauru",},{name:"Nepal",code:"Nepal",},{name:"Nicarágua",code:"Nicaragua",},{name:"Níger",code:"Niger",},{name:"Nigéria",code:"Nigeria",},{name:"Niue",code:"Niue",},{name:"Noruega",code:"Norway",},{name:"Nova Caledônia",code:"New%20Caledonia",},{name:"Nova Zelândia",code:"New%20Zealand",},{name:"Omã",code:"Oman",},{name:"Palau",code:"Palau",},{name:"Palestina",code:"Palestine",},{name:"Panamá",code:"Panama",},{name:"Papua-Nova Guiné",code:"Papua%20New%20Guinea",},{name:"Paquistão",code:"Pakistan",},{name:"Paraguai",code:"Paraguay",},{name:"Peru",code:"Peru",},{name:"Polinésia Francesa",code:"French%20Polynesia",},{name:"Polônia",code:"Poland",},{name:"Porto Rico",code:"Puerto%20Rico",},{name:"Portugal",code:"Portugal",},{name:"Qatar",code:"Qatar",},{name:"Quênia",code:"Kenya",},{name:"Quirguistão",code:"Kyrgyzstan",},{name:"República Centro-Africana",code:"Central%20African%20Republic",},{name:"República Democrática do Congo",code:"Congo%20(Democratic%20Republic%20of%20the)",},{name:"República Dominicana",code:"Dominican%20Republic",},{name:"República Tcheca",code:"Czech%20Republic",},{name:"Romênia",code:"Romania",},{name:"Ruanda",code:"Rwanda",},{name:"Rússia (antiga URSS) - Federação Russa",code:"Russia",},{name:"Saara Ocidental",code:"Western%20Sahara",},{name:"Saint-Pierre e Miquelon",code:"Saint%20Pierre",},{name:"Samoa Americana",code:"American%20Samoa",},{name:"Samoa Ocidental",code:"Samoa",},{name:"San Marino",code:"San%20Marino",},{name:"Santa Helena",code:"Saint%20Helena",},{name:"Santa Lúcia",code:"Saint%20Lucia",},{name:"São Bartolomeu",code:"Saint%20Barth%C3%A9lemy",},{name:"São Cristóvão e Névis",code:"Saint%20Kitts",},{name:"São Martim",code:"Saint%20Martin",},{name:"São Martinho",code:"Sint%20Maarten",},{name:"São Tomé e Príncipe",code:"Sao%20Tome",},{name:"São Vicente e Granadinas",code:"Saint%20Vincent",},{name:"Senegal",code:"Senegal",},{name:"Serra Leoa",code:"Sierra%20Leone",},{name:"Sérvia",code:"Serbia",},{name:"Síria",code:"Syria",},{name:"Somália",code:"Somalia",},{name:"Sri Lanka",code:"Sri%20Lanka",},{name:"Suazilândia",code:"Swaziland",},{name:"Sudão",code:"Sudan",},{name:"Sudão do Sul",code:"South%20Sudan",},{name:"Suécia",code:"Sweden",},{name:"Suíça",code:"Switzerland",},{name:"Suriname",code:"Suriname",},{name:"Svalbard",code:"Svalbard",},{name:"Tadjiquistão",code:"Tajikistan",},{name:"Tailândia",code:"Thailand",},{name:"Taiwan",code:"Taiwan",},{name:"Tanzânia",code:"Tanzania",},{name:"Território Britânico do Oceano índico",code:"British%20Indian%20Ocean%20Territory",},{name:"Territórios do Sul da França",code:"French%20Southern%20Territories",},{name:"Timor-Leste",code:"Timor-Leste",},{name:"Togo",code:"Togo",},{name:"Tonga",code:"Tonga",},{name:"Trinidad e Tobago",code:"Trinidad",},{name:"Tristão da Cunha",code:"Tristan%20da%20Cunha",},{name:"Tunísia",code:"Tunisia",},{name:"Turcomenistão",code:"Turkmenistan",},{name:"Turquia",code:"Turkey",},{name:"Tuvalu",code:"Tuvalu",},{name:"Ucrânia",code:"Ukraine",},{name:"Uganda",code:"Uganda",},{name:"Uruguai",code:"Uruguay",},{name:"Uzbequistão",code:"Uzbekistan",},{name:"Vanuatu",code:"Vanuatu",},{name:"Vaticano",code:"Holy%20See",},{name:"Venezuela",code:"Venezuela",},{name:"Vietnã",code:"Viet",},{name:"Wallis e Futuna",code:"Wallis",},{name:"Zâmbia",code:"Zambia",},{name:"Zimbábue",code:"Zimbabwe",}];

/***/ }),

/***/ 333:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _aux_getOpts_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(903);
/* harmony import */ var _countries_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(507);



const countryOptElsArr = (0,_aux_getOpts_js__WEBPACK_IMPORTED_MODULE_0__.default)(_countries_js__WEBPACK_IMPORTED_MODULE_1__.countriesObjArr);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (countryOptElsArr);

/***/ })

}]);