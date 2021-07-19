"use strict"

import Request from "./request"
import View from "./view"


export default class Controller {

    constructor() {
        this.serverIndexPath = "http://localhost/XAMPP_Projekte/GitHub%20Public%20Projects/Frontend-Backend-Basics%20Summary/Server/index.php"
        this.request = new Request()
        this.view = new View()
    }

    // sets a clicklistener for the "Actual Order"-navbar-item
    setOrderTabClickListener(){
        const $oderTab = $('#order-tab')
        $oderTab.on('click', (event) => {
            event.preventDefault()
            this.showCart()
        })
    }

    // shows the product-category-list in the "Products"-navbar-item
    showProductCategories() {
        let param = {}
        param.url = this.serverIndexPath
        param.method = "GET"
        param.data = {}
        param.data.action = "listTypes"
        this.request.doAjaxRequest(param)
            .then((response) => {
                response = JSON.parse(response)
                if (response.error) {
                    this.view.outputJsonErrorAlert(response)
                }
                this.view.outputProductTypesFromJSON(response)
            })
    }
    
    // shows a product-list of the selected product-category in the "Products"-navbar-item
    showProductsByTypeId(productTypeId) {
        let param = {}
        param.url = this.serverIndexPath
        param.method = "GET"
        param.data = {}
        param.data.action = "listProductsByTypeId"
        param.data.typeId = productTypeId
        this.request.doAjaxRequest(param)
            .then((response) => {
                response = JSON.parse(response)
                if (response.error) {
                    this.view.outputJsonErrorAlert(response)
                }
                this.view.outputProductsByTypeIdFromJSON(response)
            })
    }

    // adds/increases selected article from a product-list to/in the cart-list shown at the "Actual Order"-navbar-tab
    addArticleToCart(articleId, articleName){
        let param = {}
        param.url = this.serverIndexPath
        param.method = "GET"
        param.data = {}
        param.data.action = "addArticle"
        param.data.articleId = articleId
        param.data.articleName = articleName
        console.log(param);
        this.request.doAjaxRequest(param)
            .then((response) => {
                // Ajax liefert "obejct" anstatt "string" -> keine Ahnung warum!!
                //response = JSON.parse(response)
                if (response.error) {
                    this.view.outputJsonErrorAlert(response)
                }
                $('.modal-title').text("Erfolgreich hinzugefügt")
                $('.modal-body').text("Produkt " + articleName + " wurde bestellt")
                $('#myModal').modal("show")
                this.showCart()
            })
    }

    // removes/decreases selected article from a product-list from/in the cart-list shown at the "Actual Order"-navbar-tab
    removeArticleFromCart(articleId, articleName){
        let param = {}
        param.url = this.serverIndexPath
        param.method = "GET"
        param.data = {}
        param.data.action = "removeArticle"
        param.data.articleId = articleId
        param.data.articleName = articleName
        console.log(param);
        this.request.doAjaxRequest(param)
            .then((response) => {
                // Ajax liefert "obejct" anstatt "string" -> keine Ahnung warum!!
                //response = JSON.parse(response)
                if (response.error) {
                    this.view.outputJsonErrorAlert(response)
                }
                $('.modal-title').text("Erfolgreich entfernt")
                $('.modal-body').text("Produkt " + articleName + " wurde entfernt")
                $('#myModal').modal("show")
                this.showCart()
            })
    }

    // gets the actual cart-list from the server and shows it at the "Actual Order"-navbar-tab
    showCart(){
        let param = {}
        param.url = this.serverIndexPath
        param.method = "GET"
        param.data = {}
        param.data.action = "listCart"
        this.request.doAjaxRequest(param)
            .then((response) => {
                // Ajax liefert "obejct" anstatt "string" -> keine Ahnung warum!!
                //response = JSON.parse(response)
                if (response.error) {
                    this.view.outputJsonErrorAlert(response)
                }
                this.view.outputCartFromJSON(response)
            })
    }

}
