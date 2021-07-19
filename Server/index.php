<?php

// index.php is the entry point for backend-requests

include "config/config.php";

// new controller is generated and routing function initialized
$controller = new RouteController();
$controller->route();
