<?php

class DatabaseQuery {

    /**
     * a database query in form of prepared statement is done passing parameter for query-string
     * @param string $sqlQuery
     * @return array
     */ 
    public function init(string $sqlQuery){
        $DBName = constant("databasename");
        $pdo = new PDO("mysql:host=localhost;dbname=".$DBName.";charset=utf8", "root", "");
        $pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);

        $stmt = $pdo->prepare($sqlQuery);

        $result = array();
        if ($stmt->execute()) {
            while ($row = $stmt->fetch()) {
                $result[] = $row;
            }
        }
        return $result;
    }
    
}