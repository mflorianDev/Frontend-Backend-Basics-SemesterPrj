/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/controller.js":
/*!***************************!*\
  !*** ./src/controller.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Controller)\n/* harmony export */ });\n/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./request */ \"./src/request.js\");\n/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view */ \"./src/view.js\");\n\r\n\r\n;\r\n\r\n\r\n\r\nclass Controller {\r\n\r\n    constructor() {\r\n        this.serverIndexPath = \"http://localhost/XAMPP_Projekte/FH%20-%20Frontend%20Basics/05%20H%c3%9c%20-%20%c3%bcberarbeitet/Haus%c3%bcbung%205%20-%20%c3%bcberarbeitet/Server/index.php\"\r\n        this.request = new _request__WEBPACK_IMPORTED_MODULE_0__.default()\r\n        this.view = new _view__WEBPACK_IMPORTED_MODULE_1__.default()\r\n    }\r\n\r\n    // sets a clicklistener for the \"Actual Order\"-navbar-item\r\n    setOrderTabClickListener(){\r\n        const $oderTab = $('#order-tab')\r\n        $oderTab.on('click', (event) => {\r\n            event.preventDefault()\r\n            this.showCart()\r\n        })\r\n    }\r\n\r\n    // shows the product-category-list in the \"Products\"-navbar-item\r\n    showProductCategories() {\r\n        let param = {}\r\n        param.url = this.serverIndexPath\r\n        param.method = \"GET\"\r\n        param.data = {}\r\n        param.data.action = \"listTypes\"\r\n        this.request.doAjaxRequest(param)\r\n            .then((response) => {\r\n                response = JSON.parse(response)\r\n                if (response.error) {\r\n                    this.view.outputJsonErrorAlert(response)\r\n                }\r\n                this.view.outputProductTypesFromJSON(response)\r\n            })\r\n    }\r\n    \r\n    // shows a product-list of the selected product-category in the \"Products\"-navbar-item\r\n    showProductsByTypeId(productTypeId) {\r\n        let param = {}\r\n        param.url = this.serverIndexPath\r\n        param.method = \"GET\"\r\n        param.data = {}\r\n        param.data.action = \"listProductsByTypeId\"\r\n        param.data.typeId = productTypeId\r\n        this.request.doAjaxRequest(param)\r\n            .then((response) => {\r\n                response = JSON.parse(response)\r\n                if (response.error) {\r\n                    this.view.outputJsonErrorAlert(response)\r\n                }\r\n                this.view.outputProductsByTypeIdFromJSON(response)\r\n            })\r\n    }\r\n\r\n    // adds/increases selected article from a product-list to/in the cart-list shown at the \"Actual Order\"-navbar-tab\r\n    addArticleToCart(articleId, articleName){\r\n        let param = {}\r\n        param.url = this.serverIndexPath\r\n        param.method = \"GET\"\r\n        param.data = {}\r\n        param.data.action = \"addArticle\"\r\n        param.data.articleId = articleId\r\n        param.data.articleName = articleName\r\n        console.log(param);\r\n        this.request.doAjaxRequest(param)\r\n            .then((response) => {\r\n                // Ajax liefert \"obejct\" anstatt \"string\" -> keine Ahnung warum!!\r\n                //response = JSON.parse(response)\r\n                if (response.error) {\r\n                    this.view.outputJsonErrorAlert(response)\r\n                }\r\n                $('.modal-title').text(\"Erfolgreich hinzugefügt\")\r\n                $('.modal-body').text(\"Produkt \" + articleName + \" wurde bestellt\")\r\n                $('#myModal').modal(\"show\")\r\n                this.showCart()\r\n            })\r\n    }\r\n\r\n    // removes/decreases selected article from a product-list from/in the cart-list shown at the \"Actual Order\"-navbar-tab\r\n    removeArticleFromCart(articleId, articleName){\r\n        let param = {}\r\n        param.url = this.serverIndexPath\r\n        param.method = \"GET\"\r\n        param.data = {}\r\n        param.data.action = \"removeArticle\"\r\n        param.data.articleId = articleId\r\n        param.data.articleName = articleName\r\n        console.log(param);\r\n        this.request.doAjaxRequest(param)\r\n            .then((response) => {\r\n                // Ajax liefert \"obejct\" anstatt \"string\" -> keine Ahnung warum!!\r\n                //response = JSON.parse(response)\r\n                if (response.error) {\r\n                    this.view.outputJsonErrorAlert(response)\r\n                }\r\n                $('.modal-title').text(\"Erfolgreich entfernt\")\r\n                $('.modal-body').text(\"Produkt \" + articleName + \" wurde entfernt\")\r\n                $('#myModal').modal(\"show\")\r\n                this.showCart()\r\n            })\r\n    }\r\n\r\n    // gets the actual cart-list from the server and shows it at the \"Actual Order\"-navbar-tab\r\n    showCart(){\r\n        let param = {}\r\n        param.url = this.serverIndexPath\r\n        param.method = \"GET\"\r\n        param.data = {}\r\n        param.data.action = \"listCart\"\r\n        this.request.doAjaxRequest(param)\r\n            .then((response) => {\r\n                // Ajax liefert \"obejct\" anstatt \"string\" -> keine Ahnung warum!!\r\n                //response = JSON.parse(response)\r\n                if (response.error) {\r\n                    this.view.outputJsonErrorAlert(response)\r\n                }\r\n                this.view.outputCartFromJSON(response)\r\n            })\r\n    }\r\n\r\n}\r\n\n\n//# sourceURL=webpack://ha5-fb/./src/controller.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controller */ \"./src/controller.js\");\n\r\n\r\n;\r\n\r\n\r\n$(document).ready(function () {\r\n\r\n    let controller = new _controller__WEBPACK_IMPORTED_MODULE_0__.default()\r\n    controller.setOrderTabClickListener()\r\n    controller.showProductCategories()\r\n})\n\n//# sourceURL=webpack://ha5-fb/./src/index.js?");

/***/ }),

/***/ "./src/request.js":
/*!************************!*\
  !*** ./src/request.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Request)\n/* harmony export */ });\n\r\n\r\nclass Request {\r\n\r\n    // an ajax-request to the server with passed parameter is done\r\n    // whole request-function is returned!\r\n    doAjaxRequest(param) {\r\n        return $.ajax({\r\n            method: param.method,\r\n            url: param.url,\r\n            data: param.data\r\n        })\r\n            .done(function (data, textStatus, jqXHR) {\r\n                console.log(\"response data: \", data)\r\n                console.log(\"response type: \", typeof data)\r\n            })\r\n            .fail(function (error) {\r\n                console.log(\"Error: \", error)\r\n                console.log(error.status)\r\n                alert(error.statusText + \": \" + error.status + \"\\n\\nresponseText: \\n\" + error.responseText)\r\n            })\r\n            .always(function () {\r\n                console.log(\"request completed\");\r\n            });\r\n        }\r\n\r\n}\n\n//# sourceURL=webpack://ha5-fb/./src/request.js?");

/***/ }),

/***/ "./src/view.js":
/*!*********************!*\
  !*** ./src/view.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ View)\n/* harmony export */ });\n/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controller */ \"./src/controller.js\");\n\r\n\r\n;\r\n\r\nclass View {\r\n\r\n    // generates the product-category-list shown in the \"Products\"-navbar-tab\r\n    outputProductTypesFromJSON(productTypesList) {\r\n        let $productViewOutput = $(\"#productViewOutput\")\r\n        $productViewOutput.empty()\r\n        let $listHeader = $('<li class=\"list-group-item list-group-item-dark fw-bold\">' + \"Product Type\" + '</li>')\r\n        $productViewOutput.append($listHeader)\r\n        productTypesList.forEach(productType => {\r\n            const $listItem = $('<li class=\"list-group-item productType\" data-id=' + productType.id + ' data-url=' + productType.url + '>' + productType.productType + '</li>')\r\n            let controller = new _controller__WEBPACK_IMPORTED_MODULE_0__.default()\r\n            $listItem.on(\"click\", (event) => {\r\n                const $listId = event.target.dataset.id\r\n                controller.showProductsByTypeId($listId)\r\n            })\r\n            $listItem.css(\"cursor\", \"pointer\")\r\n            $productViewOutput.append($listItem)\r\n        });\r\n    }\r\n\r\n    // generates the products-list of selected category and shows it at the \"Products\"-navbar-tab\r\n    outputProductsByTypeIdFromJSON(productsList) {\r\n        let $productViewOutput = $(\"#productViewOutput\")\r\n        $productViewOutput.empty()\r\n        const productHeader = '<div class=\"col-10\">Product</div>'\r\n        const optionsHeader = '<div class=\"col-2 text-center\">Options</div>'\r\n        let $listHeader = $('<li class=\"list-group-item list-group-item-dark fw-bold d-flex\">' + productHeader + optionsHeader + '</li>')\r\n        $productViewOutput.append($listHeader)\r\n        let controller = new _controller__WEBPACK_IMPORTED_MODULE_0__.default()\r\n        let isListEmpty = list => Array.isArray(list) && list.every(isListEmpty)\r\n        if (!isListEmpty(productsList.products)) {\r\n            productsList.products.forEach(product => {\r\n                const productDiv = '<div class=\"col-10\">' + product.name + '</div>'\r\n                const optionsDiv = '<div class=\"col-2 text-center addArticle\">+</div>'\r\n                const $listItem = $('<li class=\"list-group-item d-flex\" data-id=' + product.id + ' data-name=' + JSON.stringify(product.name) + '>' + productDiv + optionsDiv + '</li>')\r\n                $listItem.find('.addArticle').css(\"cursor\", \"pointer\")\r\n                $listItem.on('click', '.addArticle', function () {\r\n                    const articleId = $(this).parent()[0].dataset.id\r\n                    const articleName = $(this).parent()[0].dataset.name\r\n                    controller.addArticleToCart(articleId, articleName)\r\n                })\r\n                $productViewOutput.append($listItem)\r\n            });\r\n        }\r\n        const $button = $('<button type=\"button\" class=\"col-12 btn btn-primary mt-3\" id=\"showProductCategoryButton\">Show Product-Types</button>')\r\n        $button.on('click', function (event) {\r\n            $(event.target).remove()\r\n            controller.showProductCategories()\r\n        });\r\n        $productViewOutput.after($button)\r\n    }\r\n\r\n    // generates the cart-list shown in the \"Actual Order\"-navbar-tab\r\n    outputCartFromJSON(cartObject) {\r\n        let $orderViewOutput = $(\"#orderViewOutput\")\r\n        $orderViewOutput.empty()\r\n        const articleHeader = '<div class=\"col-8\">Article</div>'\r\n        const amountHeader = '<div class=\"col-1\">Amount</div>'\r\n        const priceHeader = '<div class=\"col-1\">Price</div>'\r\n        const optionsHeader = '<div class=\"col-2 text-center\">Options</div>'\r\n        let $listHeader = $('<li class=\"list-group-item list-group-item-dark fw-bold d-flex\">' + articleHeader + amountHeader + priceHeader + optionsHeader + '</li>')\r\n        $orderViewOutput.append($listHeader)\r\n        let controller = new _controller__WEBPACK_IMPORTED_MODULE_0__.default()\r\n        let total = 0\r\n        let isListEmpty = list => Array.isArray(list) && list.every(isListEmpty)\r\n        if (!isListEmpty(cartObject)) {\r\n            cartObject.forEach(article => {\r\n                total += parseFloat(article.price)\r\n                const articleDiv = '<div class=\"col-8\">' + article.articleName + '</div>'\r\n                const amountDiv = '<div class=\"col-1\">' + article.amount + '</div>'\r\n                const priceDiv = '<div class=\"col-1\">€ ' + article.price + '</div>'\r\n                const optionsDiv = '<div class=\"col-2 text-center\"><span id=\"increaseArticle\">&nbsp+&nbsp</span><span id=\"decreaseArticle\">&nbsp-&nbsp</span></div>'\r\n                const $listItem = $('<li class=\"list-group-item d-flex\" data-id=' + article.id + ' data-name=' + JSON.stringify(article.articleName) + '>' + articleDiv + amountDiv + priceDiv + optionsDiv + '</li>')\r\n                $listItem.find('#increaseArticle, #decreaseArticle').css(\"cursor\", \"pointer\")\r\n                $listItem.on('click', '#increaseArticle', function () {\r\n                    const articleId = $(this).parent().parent()[0].dataset.id\r\n                    const articleName = $(this).parent().parent()[0].dataset.name\r\n                    controller.addArticleToCart(articleId, articleName)\r\n                })\r\n                $listItem.on('click', '#decreaseArticle', function () {\r\n                    const articleId = $(this).parent().parent()[0].dataset.id\r\n                    const articleName = $(this).parent().parent()[0].dataset.name\r\n                    controller.removeArticleFromCart(articleId, articleName)\r\n                })\r\n                $orderViewOutput.append($listItem)\r\n            });\r\n            const $listItemTotalPrice = $('<li class=\"list-group-item d-flex justify-content-end fw-bold\">Total € ' + total + '</li>')\r\n            $orderViewOutput.append($listItemTotalPrice)\r\n        }\r\n    }\r\n\r\n    outputJsonErrorAlert(errorObject) {\r\n        alert(errorObject.error)\r\n        throw new Error(\"Something went wrong!\")\r\n    }\r\n\r\n    outputStringAsAlert(stringMessage) {\r\n        alert(stringMessage)\r\n    }\r\n\r\n}\n\n//# sourceURL=webpack://ha5-fb/./src/view.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;