<?php
function connectDatabase($sn, $un, $pw, $db)
{
     $link = mysqli_connect($sn, $un, $pw, $db); //connect to db
     
     //check db
     if(!$link)
          die("Connection failed: " .mysqli_connect_error());
     else
          return($link);
}
?>