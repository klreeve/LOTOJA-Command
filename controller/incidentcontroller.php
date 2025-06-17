<?php
/* include of class file for insert incident*/

  /*require_once '/home4/nsevradi/public_html/dev-lotoja/model/incident.php';*/

$date = new DateTime();

/* create array to return */
    $return_array = array();

    $return_array['timeStamp'] = $date->format('Y-m-d H:i:s');
    $return_array['bibNumber'] = $_POST["bibNumber"];
    $return_array['tactical'] = $_POST["tactical"];
    $return_array['details'] = $_POST["details"];
    $return_array['location'] = $_POST["location"];
    $return_array['category'] = $_POST["category"];
   
/* make a json array to send back */
    $json_array = json_encode($return_array);
/* send contents back */    
    echo $json_array;
/*initialize the class */
	

    /* require_once ("Insert.php") */


    /*Insert mydata= new data();*/

 /*run the method of the class with the given parameters that are defined */
    
    /* $insert = new Insert();*/
    
 /* mydata.insertIncident($_POST["bibNumber"], $_POST["tactical"], $_POST["details"], $_POST["location"], $_POST["category"]);*/
    


?>