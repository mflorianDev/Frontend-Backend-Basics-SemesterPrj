<?php

class RouteController {
    /**
     * Object class DatabaseQuery
     * @var DatabaseQuery
     */
    public $dbQuery;
    /**
     * Object class JSONView
     * @var JSONView
     */
    public $jsonView;
    /**
     * Object class ErrorView
     * @var ErrorView
     */
    public $errorView;

    /**
     * constructor of class RouteController
     */
    public function __construct() {
        $this->dbQuery = new DatabaseQuery();
        $this->jsonView = new JSONView();
        $this->errorView = new ErrorView();
    }

    /**
     * function route initializes all classes needed and controls the program stream 
     */
    public function route() {
        $action = filter_input(INPUT_GET, 'action', FILTER_SANITIZE_SPECIAL_CHARS);
        $this->chooseModel($action);
    }

    /**
     * chooseModel-function chooses route depending on "action"-variable-value
     * @param string $action
     */
    private function chooseModel(string $action) {
        switch ($action) {
            case "listTypes":
                $this->runProductTypesModel();
                break;
            case "listProductsByTypeId":
                $this->runProductsByTypeIdModel();
                break;
            case "addArticle":
            case "removeArticle":
            case "listCart":
                $cartModel = new CartModel();
                $cartModel->init();
                break;    
            default:
                $errorObject = new \stdClass();
                $errorObject->error = "ERROR => Parameter missing or incorrect!\n";
                $this->jsonView->streamOutput($errorObject);
                exit;      
        }
    }

    /**
     * get product-types from Model and response result to client
     */
    private function runProductTypesModel() {
        $productTypesModel = new ProductTypesModel();
        $productTypes = $productTypesModel->getProductTypes();
        $this->jsonView->streamOutput($productTypes);
    }

    /**
     * get products for selected product-type from Model and response result to client
     */
    private function runProductsByTypeIdModel() {
        $productsByTypeIdModel = new ProductsByTypeId();
        $productsByTypeId = $productsByTypeIdModel->getProductsByTypeId();
        $this->jsonView->streamOutput($productsByTypeId);
    }
    
}