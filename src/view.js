"use strict"

import Controller from "./controller"

export default class View {

    // generates the product-category-list shown in the "Products"-navbar-tab
    outputProductTypesFromJSON(productTypesList) {
        let $productViewOutput = $("#productViewOutput")
        $productViewOutput.empty()
        let $listHeader = $('<li class="list-group-item list-group-item-dark fw-bold">' + "Product Type" + '</li>')
        $productViewOutput.append($listHeader)
        productTypesList.forEach(productType => {
            const $listItem = $('<li class="list-group-item productType" data-id=' + productType.id + ' data-url=' + productType.url + '>' + productType.productType + '</li>')
            let controller = new Controller()
            $listItem.on("click", (event) => {
                const $listId = event.target.dataset.id
                controller.showProductsByTypeId($listId)
            })
            $listItem.css("cursor", "pointer")
            $productViewOutput.append($listItem)
        });
    }

    // generates the products-list of selected category and shows it at the "Products"-navbar-tab
    outputProductsByTypeIdFromJSON(productsList) {
        let $productViewOutput = $("#productViewOutput")
        $productViewOutput.empty()
        const productHeader = '<div class="col-10">Product</div>'
        const optionsHeader = '<div class="col-2 text-center">Options</div>'
        let $listHeader = $('<li class="list-group-item list-group-item-dark fw-bold d-flex">' + productHeader + optionsHeader + '</li>')
        $productViewOutput.append($listHeader)
        let controller = new Controller()
        let isListEmpty = list => Array.isArray(list) && list.every(isListEmpty)
        if (!isListEmpty(productsList.products)) {
            productsList.products.forEach(product => {
                const productDiv = '<div class="col-10">' + product.name + '</div>'
                const optionsDiv = '<div class="col-2 text-center addArticle">+</div>'
                const $listItem = $('<li class="list-group-item d-flex" data-id=' + product.id + ' data-name=' + JSON.stringify(product.name) + '>' + productDiv + optionsDiv + '</li>')
                $listItem.find('.addArticle').css("cursor", "pointer")
                $listItem.on('click', '.addArticle', function () {
                    const articleId = $(this).parent()[0].dataset.id
                    const articleName = $(this).parent()[0].dataset.name
                    controller.addArticleToCart(articleId, articleName)
                })
                $productViewOutput.append($listItem)
            });
        }
        const $button = $('<button type="button" class="col-12 btn btn-primary mt-3" id="showProductCategoryButton">Show Product-Types</button>')
        $button.on('click', function (event) {
            $(event.target).remove()
            controller.showProductCategories()
        });
        $productViewOutput.after($button)
    }

    // generates the cart-list shown in the "Actual Order"-navbar-tab
    outputCartFromJSON(cartObject) {
        let $orderViewOutput = $("#orderViewOutput")
        $orderViewOutput.empty()
        const articleHeader = '<div class="col-8">Article</div>'
        const amountHeader = '<div class="col-1">Amount</div>'
        const priceHeader = '<div class="col-1">Price</div>'
        const optionsHeader = '<div class="col-2 text-center">Options</div>'
        let $listHeader = $('<li class="list-group-item list-group-item-dark fw-bold d-flex">' + articleHeader + amountHeader + priceHeader + optionsHeader + '</li>')
        $orderViewOutput.append($listHeader)
        let controller = new Controller()
        let total = 0
        let isListEmpty = list => Array.isArray(list) && list.every(isListEmpty)
        if (!isListEmpty(cartObject)) {
            cartObject.forEach(article => {
                total += parseFloat(article.price)
                const articleDiv = '<div class="col-8">' + article.articleName + '</div>'
                const amountDiv = '<div class="col-1">' + article.amount + '</div>'
                const priceDiv = '<div class="col-1">€ ' + article.price + '</div>'
                const optionsDiv = '<div class="col-2 text-center"><span id="increaseArticle">&nbsp+&nbsp</span><span id="decreaseArticle">&nbsp-&nbsp</span></div>'
                const $listItem = $('<li class="list-group-item d-flex" data-id=' + article.id + ' data-name=' + JSON.stringify(article.articleName) + '>' + articleDiv + amountDiv + priceDiv + optionsDiv + '</li>')
                $listItem.find('#increaseArticle, #decreaseArticle').css("cursor", "pointer")
                $listItem.on('click', '#increaseArticle', function () {
                    const articleId = $(this).parent().parent()[0].dataset.id
                    const articleName = $(this).parent().parent()[0].dataset.name
                    controller.addArticleToCart(articleId, articleName)
                })
                $listItem.on('click', '#decreaseArticle', function () {
                    const articleId = $(this).parent().parent()[0].dataset.id
                    const articleName = $(this).parent().parent()[0].dataset.name
                    controller.removeArticleFromCart(articleId, articleName)
                })
                $orderViewOutput.append($listItem)
            });
            const $listItemTotalPrice = $('<li class="list-group-item d-flex justify-content-end fw-bold">Total € ' + total + '</li>')
            $orderViewOutput.append($listItemTotalPrice)
        }
    }

    outputJsonErrorAlert(errorObject) {
        alert(errorObject.error)
        throw new Error("Something went wrong!")
    }

    outputStringAsAlert(stringMessage) {
        alert(stringMessage)
    }

}