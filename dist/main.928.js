(self["webpackChunknations_app"] = self["webpackChunknations_app"] || []).push([[928,154],{

/***/ 154:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * generateOptionsElements
 * 
 * Função que recebe um array de objetos ou strings e retorna um array de elementos 'option'
 * 
 * @param {Array<String | {name: string, code: string}>} optionsArray Array de strings ou objetos
 * @returns Array de elementos html 'option'
 */
function generateOptionElements(optionsArray) {
    return optionsArray.map(createOptionElement);
} 

/**
 * createOptionElement
 * 
 * Função que recebe uma string ou um objeto e retorna um elemento html
 * 
 * @param {String | {name: string, code: string}} option String ou objeto
 * @returns Elemento html 'option'
 */
function createOptionElement(option){
    const optionElement = document.createElement('option');
    const isObject = (option instanceof Object);
    if(isObject){
        const { name, code } = option;
        optionElement.innerText = name;
        optionElement.code = code;
    }else{
        optionElement.innerText = option;
        optionElement.code = option.replace('+', '');
    }
    return optionElement;
}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generateOptionElements);

/***/ }),

/***/ 928:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helpers_generateOptionElements_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(154);
/* harmony import */ var _options_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(259);



const optionsArray = (0,_helpers_generateOptionElements_js__WEBPACK_IMPORTED_MODULE_0__.default)(_options_json__WEBPACK_IMPORTED_MODULE_1__.callCodes.sort((a,b)=>a-b));

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (optionsArray);

/***/ })

}]);