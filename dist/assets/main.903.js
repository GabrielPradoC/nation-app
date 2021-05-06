(self["webpackChunknations_app"] = self["webpackChunknations_app"] || []).push([[903],{

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

/***/ })

}]);