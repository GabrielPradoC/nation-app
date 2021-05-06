(self["webpackChunknations_app"] = self["webpackChunknations_app"] || []).push([[928,903],{

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

/***/ 928:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _aux_getOpts_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(903);

const callCode = ["+93","+355","+213","+1684","+376","+244","+1264","+1268","+54","+374","+297","+43","+994","+1242","+973","+880","+1246","+375","+32","+501","+229","+1441","+975","+591","+387","+267","+55","+246","+673","+359","+226","+257","+855","+237","+1","+238","+1345","+236","+235","+56","+86","+61","+57","+269","+242","+682","+506","+385","+53","+357","+420","+243","+45","+253","+1767","+1849","+593","+20","+503","+240","+291","+372","+268","+251","+298","+679","+358","+33","+594","+689","+241","+220","+995","+49","+233","+350","+30","+299","+1473","+1671","+502","+224","+245","+592","+509","+379","+504","+852","+36","+354","+91","+62","+98","+964","+353","+972","+39","+225","+1876","+81","+962","+77","+254","+686","+850","+82","+383","+965","+996","+856","+371","+961","+266","+231","+218","+423","+370","+352","+853","+261","+265","+60","+960","+223","+356","+692","+596","+222","+230","+52","+691","+373","+377","+976","+382","+1664","+212","+258","+95","+264","+674","+977","+31","+599","+687","+64","+505","+227","+234","+683","+672","+389","+1670","+47","+968","+92","+680","+970","+507","+675","+595","+51","+63","+48","+351","+1939","+974","+262","+40","+7","+250","+290","+1869","+1758","+590","+508","+1784","+685","+378","+239","+966","+221","+381","+248","+232","+65","+1721","+421","+386","+677","+252","+27","+500","+211","+34","+94","+249","+597","+46","+41","+963","+886","+992","+255","+66","+670","+228","+690","+676","+1868","+216","+90","+993","+1649","+688","+256","+380","+971","+44","+598","+998","+678","+58","+84","+1284","+681","+967","+260","+263"];
const Arr = (0,_aux_getOpts_js__WEBPACK_IMPORTED_MODULE_0__.default)(callCode.sort((a,b)=>a-b));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Arr);

/***/ })

}]);