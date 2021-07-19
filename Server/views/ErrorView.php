<?php

class ErrorView {

    /**
     * constructor of class ErrorView
     */
    public function __construct() {
        header('Content-Type: text/plain; charset=utf-8');
    }
    
    /**
     * error-message from object.error-parameter
     * takes an stdClass-object and generates an error-response to client
     * @param stdClass $errorMessage
     */
    public function errorOutput(stdClass $errorObject){
            echo $errorObject->error;
    }

    /**
     * error-message from array
     * takes an array and generates an error-response to client for each array-element
     * @param Array $errorOutputArray
     */
    public function errorOutputArray($errorOutputArray){
        foreach ($errorOutputArray as $element) {
            echo $element;
        }
    }

}