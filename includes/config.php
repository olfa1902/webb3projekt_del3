<?php
session_start();

function __autoload($class_name){
    include "includes/" . $class_name . ".class.php";
}

error_reporting(-1);
ini_set("display_errors", 1);

/*define("DBHOST", "localhost");
define("DBUSER", "moment3");
define("DBPASS", "password");
define("DBDATABASE", "moment3");*/

define("DBHOST", "studentmysql.miun.se");
define("DBUSER", "olfa1902");
define("DBPASS", "qc9fenyg");
define("DBDATABASE", "olfa1902");

