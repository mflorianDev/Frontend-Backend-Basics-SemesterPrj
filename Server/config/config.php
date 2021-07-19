<?php

include "controller/routeController.php";
include "database/databaseQuery.php";
include "models/productTypesModel.php";
include "models/productsByTypeIdModel.php";
include "models/cartModel.php";
include "views/JSONView.php";
include "views/ErrorView.php";

// actual request-url is generated an stored in global "url"-variable
define("url", "http://localhost" . $_SERVER["REQUEST_URI"]);
// constant for databasename
define("databasename", "backendbasics_db");