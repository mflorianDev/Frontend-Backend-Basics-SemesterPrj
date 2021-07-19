"use strict"

export default class Request {

    // an ajax-request to the server with passed parameter is done
    // whole request-function is returned!
    doAjaxRequest(param) {
        return $.ajax({
            method: param.method,
            url: param.url,
            data: param.data
        })
            .done(function (data, textStatus, jqXHR) {
                console.log("response data: ", data)
                console.log("response type: ", typeof data)
            })
            .fail(function (error) {
                console.log("Error: ", error)
                console.log(error.status)
                alert(error.statusText + ": " + error.status + "\n\nresponseText: \n" + error.responseText)
            })
            .always(function () {
                console.log("request completed");
            });
        }

}