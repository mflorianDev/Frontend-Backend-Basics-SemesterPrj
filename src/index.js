"use strict"

import Controller from "./controller"


$(document).ready(function () {

    let controller = new Controller()
    controller.setOrderTabClickListener()
    controller.showProductCategories()
})