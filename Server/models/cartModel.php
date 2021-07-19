<?php

// model-class for cart and session management
class CartModel {
    /**
     * Object class DatabaseQuery
     * @var DatabaseQuery
     */
    public $jsonView;

    /**
     * constructor of class JSONView
     */
    public function __construct() {
        $this->jsonView = new JSONView();
    }

    /**
     * with init-function the class is initialized
     */
    public function init() {
        // session is started
        session_start();
        // set the "cart"- and "products"-session variable and set the actual value to the class-attribute "products"
        if (isset($_SESSION["cart"]["products"])) {
            $this->products = $_SESSION["cart"]["products"];
            // reset array-index-values so that the list index always starts with 0 and without gaps 
            $this->products = array_values($this->products);
        } else {
            $_SESSION["cart"] = array("products" => null);
            $this->products = $_SESSION["cart"]["products"];
        }
        $this->route();
    }

    /**
     * route-function gets the request-parameter for "action"-variable and selects the dependent route
     */
    private function route() {
        $action = filter_input(INPUT_GET, 'action', FILTER_SANITIZE_SPECIAL_CHARS);
        switch ($action) {
            case 'addArticle':
                $this->setAttributArticleIdAndArticleName();
                $this->addArticle();
                break;
            case 'removeArticle':
                $this->setAttributArticleIdAndArticleName();
                $this->removeArticle();
                break;
            case 'listCart':
                $this->listCart();
                break;
        }
    }

    /**
     * sets the class-attributes "articleId" and "articleName" dependent from the correspondig request-parameters
     */
    private function setAttributArticleIdAndArticleName() {
        $this->articleId = filter_input(INPUT_GET, 'articleId', FILTER_SANITIZE_NUMBER_INT);
        $this->articleName = filter_input(INPUT_GET, 'articleName', FILTER_SANITIZE_SPECIAL_CHARS);
    }

    /**
     * adds/increases an article to the session-products-variable 
     */
    private function addArticle() {
        $articleIndex = $this->getArticleIndexFromProductsList();
        if($articleIndex > -1){
            $this->products[$articleIndex]["price"] = ($this->products[$articleIndex]["price"]/$this->products[$articleIndex]["amount"])*($this->products[$articleIndex]["amount"] +1);
            $this->products[$articleIndex]["amount"]++;
            $this->setSessionProductsVariable();
            $this->jsonView->streamOutput( ["state" => "OK"] );
        } else {
            $articleProperties = $this->getArticlePropertiesFromDB();
            $this->products[] = array(
                "id" => $articleProperties['id'],
                "articleName" => $articleProperties['name'],
                "price" => $articleProperties['price'],
                "amount" => 1
            );
            $this->setSessionProductsVariable();
            $this->jsonView->streamOutput( ["state" => "OK"] );
        }
    }

    /**
     * removes/decreases an article from the session-products-variable 
     */ 
    private function removeArticle() {
        $articleIndex = $this->getArticleIndexFromProductsList();
        if($articleIndex > -1){
            if ($this->products[$articleIndex]["amount"] > 1){
                $this->products[$articleIndex]["price"] = ($this->products[$articleIndex]["price"]/$this->products[$articleIndex]["amount"])*($this->products[$articleIndex]["amount"] -1);
                $this->products[$articleIndex]["amount"]--;
                $this->setSessionProductsVariable();
                $this->jsonView->streamOutput( ["state" => "OK"] );
            } else {
                unset($this->products[$articleIndex]);
                $this->setSessionProductsVariable();
                $this->jsonView->streamOutput( ["state" => "OK"] );
            }
        } else {
            $this->jsonView->streamOutput( ["state" => "ERROR"] );
        }
    }

    /**
     * check if article is already in cart, if so return the product index, else return -1
     * @return integer
     */ 
    private function getArticleIndexFromProductsList() {
        $articleId = $this->articleId;
        $productArray = $this->products;
        if (empty($productArray)){
            return -1;
        } else {
            $key = "id";
            foreach ($productArray as $index => $product)
                if (isset($product[$key]) && $product[$key] == $articleId)
                    return $index;
            return -1;
        }
    }

    /**
     * set the session-products-variable to the actual value of the class-products-attribute
     */ 
    private function setSessionProductsVariable() {
        $_SESSION["cart"] = array( "products" => $this->products );
    }

    /**
     * returns as ajax-response the processed class-products-variable
     */ 
    public function listCart() {
        $this->jsonView->streamOutput( $this->products );
    }

    /**
     * get article-properties from database
     * @return array
     */ 
    private function getArticlePropertiesFromDB() {        
        $dbQuery = new DatabaseQuery();
        $articleId = filter_input(INPUT_GET, 'articleId', FILTER_SANITIZE_NUMBER_INT);
        $sqlQuery = "SELECT id, name, price_of_sale as 'price' FROM products WHERE id = {$articleId}";
        $pdoResult = $dbQuery->init($sqlQuery);
        return $pdoResult[0];
    }

}