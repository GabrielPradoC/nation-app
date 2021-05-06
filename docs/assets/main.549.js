(self["webpackChunknations_app"] = self["webpackChunknations_app"] || []).push([[549,903,208],{

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

/***/ 549:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _aux_getOpts_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(903);
/* harmony import */ var _languages_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(208);


const Arr = (0,_aux_getOpts_js__WEBPACK_IMPORTED_MODULE_0__.default)(_languages_js__WEBPACK_IMPORTED_MODULE_1__.l);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Arr);

/***/ }),

/***/ 208:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "l": () => (/* binding */ l)
/* harmony export */ });
const l=[{name:"Africâner",code:"af"},{name:"Albanês",code:"sq"},{name:"Amárico",code:"am"},{name:"Árabe",code:"ar"},{name:"Armênio",code:"hy"},{name:"Aymará",code:"ay"},{name:"Azerbaijano",code:"az"},{name:"Bielorrusso",code:"be"},{name:"Bengali",code:"bn"},{name:"Bislamá",code:"bi"},{name:"Bósnio",code:"bs"},{name:"Búlgaro",code:"bg"},{name:"Birmanês",code:"my"},{name:"Catalão",code:"ca"},{name:"Chamorro",code:"ch"},{name:"Chichewa",code:"ny"},{name:"Chinês",code:"zh"},{name:"Croata",code:"hr"},{name:"hrv",code:"cs"},{name:"Dinamarquês",code:"da"},{name:"Divehi",code:"dv"},{name:"Holandês",code:"nl"},{name:"Dzongkha",code:"dz"},{name:"Inglês",code:"en"},{name:"Estoniano",code:"et"},{name:"Faroês",code:"fo"},{name:"Fijiano",code:"fj"},{name:"Finlandês",code:"fi"},{name:"Francês",code:"fr"},{name:"Fula",code:"ff"},{name:"Georgiano",code:"ka"},{name:"Alemão",code:"de"},{name:"Grego",code:"el"},{name:"Guarani",code:"gn"},{name:"Crioulo haitiano",code:"ht"},{name:"Hebraico",code:"he"},{name:"Hindi",code:"hi"},{name:"Húngaro",code:"hu"},{name:"Indonésio",code:"id"},{name:"Irlandês",code:"ga"},{name:"Islandês",code:"is"},{name:"Italiano",code:"it"},{name:"Japonês",code:"ja"},{name:"Kalaallisut",code:"kl"},{name:"Cazaque",code:"kk"},{name:"Khmer",code:"km"},{name:"Kinyarwanda",code:"rw"},{name:"Quirguiz",code:"ky"},{name:"Congolês",code:"kg"},{name:"Coreano",code:"ko"},{name:"Curdo",code:"ku"},{name:"Latim",code:"la"},{name:"Luxemburguês",code:"lb"},{name:"Lingala",code:"ln"},{name:"Lao",code:"lo"},{name:"Lituano",code:"lt"},{name:"Luba-Katanga",code:"lu"},{name:"Letão",code:"lv"},{name:"Manx",code:"gv"},{name:"Macedônio",code:"mk"},{name:"Malgaxe",code:"mg"},{name:"Malaio",code:"ms"},{name:"Maltês",code:"mt"},{name:"Maori",code:"mi"},{name:"Marshalês",code:"mh"},{name:"Mongol",code:"mn"},{name:"Nauru",code:"na"},{name:"Bokmål norueguês",code:"nb"},{name:"Ndebele do Norte",code:"nd"},{name:"Nepali",code:"ne"},{name:"Norueguês Nynorsk",code:"nn"},{name:"Norueguês",code:"no"},{name:"Ndebele do Sul",code:"nr"},{name:"Panjabi",code:"pa"},{name:"Persa",code:"fa"},{name:"Polonês",code:"pl"},{name:"Pachto",code:"ps"},{name:"Português",code:"pt"},{name:"Quechua",code:"qu"},{name:"Kirundi",code:"rn"},{name:"Romeno",code:"ro"},{name:"Russo",code:"ru"},{name:"Samoano",code:"sm"},{name:"Sango",code:"sg"},{name:"Sérvio",code:"sr"},{name:"Shona",code:"sn"},{name:"Sinhala",code:"si"},{name:"Eslovaco",code:"sk"},{name:"Esloveno",code:"sl"},{name:"Somali",code:"so"},{name:"Southern Sotho",code:"st"},{name:"Espanhol",code:"es"},{name:"Suaíli",code:"sw"},{name:"Suazi",code:"ss"},{name:"Sueco",code:"sv"},{name:"Tâmil",code:"ta"},{name:"Tajique",code:"tg"},{name:"Tailandês",code:"th"},{name:"Tigrínia",code:"ti"},{name:"Turcomeno",code:"tk"},{name:"Tsuana",code:"tn"},{name:"Tonga",code:"to"},{name:"Turco",code:"tr"},{name:"Tsonga",code:"ts"},{name:"Ucraniano",code:"uk"},{name:"Urdu",code:"ur"},{name:"Uzbeque",code:"uz"},{name:"Venda",code:"ve"},{name:"Vietnamita",code:"vi"},{name:"Xhosa",code:"xh"},{name:"Zulu",code:"zu"},].sort((a,b)=>(a.name>b.name)?1:-1)

/***/ })

}]);