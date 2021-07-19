<?php

// model-class for products of defined-category from database
class ProductsByTypeId {

    /**
     * gets all products of selected category based on a database-query and returns the result as an associative list
     * @return array
     */ 
    public function getProductsByTypeId()
    {
        $dbQuery = new DatabaseQuery();
        $productTypeId = filter_input(INPUT_GET, 'typeId', FILTER_SANITIZE_NUMBER_INT);
        $sqlQuery = "SELECT t.name AS productType, p.name AS 'name', p.id FROM product_types t " .
            "JOIN products p ON t.id = p.id_product_types WHERE t.id = {$productTypeId}";
        $pdoResult = $dbQuery->init($sqlQuery);
        if (empty($pdoResult)){
            $sqlQuery = "SELECT name AS productType FROM product_types WHERE id = {$productTypeId}";
            $pdoResult = $dbQuery->init($sqlQuery);
        }
        $sortedProductsList = $this->sortProductsList($pdoResult);
        $result = $this->appendURL($sortedProductsList);
        return $result;
    }

    /**
     * result of database-query is rearranged and returned
     * @param array $pdoResult
     * @return array
     */ 
    private function sortProductsList(array $pdoResult) {
        $result = array();
        $result["productType"] = array_values($pdoResult)[0]["productType"];
        foreach ($pdoResult as &$product) {
            unset($product["productType"]);
        }
        $result["products"] = $pdoResult;
        return $result;
    }

    /**
     * appends the request url to the database-query-result
     * @param array $productsList
     * @return array
     */ 
    private function appendURL(array $productsList) {
        $productsList["url"] = constant("url");
        return $productsList;
    }


}
