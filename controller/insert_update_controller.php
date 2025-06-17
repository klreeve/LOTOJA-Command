<?php

require_once '/home4/nsevradi/public_html/dev-lotoja/model/sqlHelper.php';

$date = new DateTime();

/* create array to return */
    $return_array = array();

    $timeStamp = $date->format('Y-m-d H:i:s');
    $bibNumber = $_POST["bibNumber"];
    $tactical = $_POST["tactical"];
    $details = $_POST["details"];
    $location = $_POST["location"];
    $incidentType= $_POST["incidentType"];
    $commandCenter = $_POST["commandCenter"];

/*
    $return_array['timeStamp'] = $date->format('Y-m-d H:i:s');
    $return_array['bibNumber'] = $_POST["bibNumber"];
    $return_array['tactical'] = $_POST["tactical"];
    $return_array['details'] = $_POST["details"];
    $return_array['location'] = $_POST["location"];
    $return_array['incidentType'] = $_POST["incidentType"];
*/

/*initialize the class */
	
$myhelper = new sqlHelper;

$incidentID = $myhelper->insert($bibNumber, $tactical, $details, $location, $commandCenter, $incidentType, $timeStamp);

    $return_array['incidentID'] = $incidentID ; 
    $return_array['timeStamp'] = $timeStamp; 
    $return_array['bibNumber'] = $bibNumber;
    $return_array['tactical'] = $tactical;
    $return_array['details'] = $details;
    $return_array['location'] = $location;
    $return_array['incidentType'] = $incidentType;
    $return_array['commandCenter'] = $commandCenter;
   /* $return_array['incidentID'] = $myhelper->timeStampSelect($timeStamp);*/

/* make a json array to send back */
    $json_array = json_encode($return_array);
/* send contents back */    
    echo $json_array;

    /* require_once ("Insert.php") */


    /*Insert mydata= new data();*/

 /*run the method of the class with the given parameters that are defined */
    
    /* $insert = new Insert();*/
    
 /* mydata.insertIncident($incidentID,$_POST["bibNumber"], $_POST["tactical"], $_POST["details"], $_POST["location"], $_POST["category"], $timeStamp);*/
  
?>