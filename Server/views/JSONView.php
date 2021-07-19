<?php

class JSONView {

    /**
     * constructor of class JSONView
     */
    public function __construct() {
        header('Content-Type: application/json');
    }
    
    /**
     * generates a response of type JSON from passed data
     * @param mixed $data
     */
    public function streamOutput(mixed $data){
        $jsonOutput = json_encode($data);
        echo $jsonOutput;
    }

}