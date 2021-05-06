(self["webpackChunknations_app"] = self["webpackChunknations_app"] || []).push([[674,903],{

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

/***/ 674:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _aux_getOpts_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(903);

const capital = ["Kabul","Mariehamn","Tirana","Algiers","Pago Pago","Andorra la Vella","Luanda","The Valley","Saint John's","Buenos Aires","Yerevan","Oranjestad","Canberra","Vienna","Baku","Nassau","Manama","Dhaka","Bridgetown","Minsk","Brussels","Belmopan","Porto-Novo","Hamilton","Thimphu","Sucre","Kralendijk","Sarajevo","Gaborone","Brasília","Diego Garcia","Road Town","Charlotte Amalie","Bandar Seri Begawan","Sofia","Ouagadougou","Bujumbura","Phnom Penh","Yaoundé","Ottawa","Praia","George Town","Bangui","N'Djamena","Santiago","Beijing","Flying Fish Cove","West Island","Bogotá","Moroni","Brazzaville","Kinshasa","Avarua","San José","Zagreb","Havana","Willemstad","Nicosia","Prague","Copenhagen","Djibouti","Roseau","Santo Domingo","Quito","Cairo","San Salvador","Malabo","Asmara","Tallinn","Addis Ababa","Stanley","Tórshavn","Suva","Helsinki","Paris","Cayenne","Papeetē","Port-aux-Français","Libreville","Banjul","Tbilisi","Berlin","Accra","Gibraltar","Athens","Nuuk","St. George's","Basse-Terre","Hagåtña","Guatemala City","St. Peter Port","Conakry","Bissau","Georgetown","Port-au-Prince","Rome","Tegucigalpa","City of Victoria","Budapest","Reykjavík","New Delhi","Jakarta","Yamoussoukro","Tehran","Baghdad","Dublin","Douglas","Jerusalem","Rome","Kingston","Tokyo","Saint Helier","Amman","Astana","Nairobi","South Tarawa","Kuwait City","Bishkek","Vientiane","Riga","Beirut","Maseru","Monrovia","Tripoli","Vaduz","Vilnius","Luxembourg","Skopje","Antananarivo","Lilongwe","Kuala Lumpur","Malé","Bamako","Valletta","Majuro","Fort-de-France","Nouakchott","Port Louis","Mamoudzou","Mexico City","Palikir","Chișinău","Monaco","Ulan Bator","Podgorica","Plymouth","Rabat","Maputo","Naypyidaw","Windhoek","Yaren","Kathmandu","Amsterdam","Nouméa","Wellington","Managua","Niamey","Abuja","Alofi","Kingston","Pyongyang","Saipan","Oslo","Muscat","Islamabad","Ngerulmud","Ramallah","Panama City","Port Moresby","Asunción","Lima","Manila","Adamstown","Warsaw","Lisbon","San Juan","Doha","Pristina","Saint-Denis","Bucharest","Moscow","Kigali","Gustavia","Jamestown","Basseterre","Castries","Marigot","Saint-Pierre","Kingstown","Apia","City of San Marino","São Tomé","Riyadh","Dakar","Belgrade","Victoria","Freetown","Singapore","Philipsburg","Bratislava","Ljubljana","Honiara","Mogadishu","Pretoria","King Edward Point","Seoul","Juba","Madrid","Colombo","Khartoum","Paramaribo","Longyearbyen","Lobamba","Stockholm","Bern","Damascus","Taipei","Dushanbe","Dodoma","Bangkok","Dili","Lomé","Fakaofo","Nuku'alofa","Port of Spain","Tunis","Ankara","Ashgabat","Cockburn Town","Funafuti","Kampala","Kiev","Abu Dhabi","London","Washington, D.C.","Montevideo","Tashkent","Port Vila","Caracas","Hanoi","Mata-Utu","El Aaiún","Sana'a","Lusaka","Harare"]
const Arr = (0,_aux_getOpts_js__WEBPACK_IMPORTED_MODULE_0__.default)(capital.sort());

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Arr);

/***/ })

}]);