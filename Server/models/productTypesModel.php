<?php

// model-class for product-categories in the database
class ProductTypesModel {

    /**
     * gets all product-categories based on a database-query and returns the result as an associative list
     * @return array
     */ 
    public function getProductTypes () {
        $dbQuery = new DatabaseQuery();
        $sqlQuery = "SELECT id, name AS productType FROM product_types ORDER BY name";
        $pdoResult = $dbQuery->init($sqlQuery);
        $result = $this->appendURL($pdoResult);
        return $result;
    }

    /**
     * appends the request-url to all product-categories of the database-result
     * @param Array $pdoResult
     * @return array
     */ 
    private function appendURL(array $pdoResult) {
        foreach ($pdoResult as &$productType) {
            $productType["url"] = constant("url");
        }
        return $pdoResult;
    }
}