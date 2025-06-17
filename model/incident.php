<?php

error_reporting(E_ALL);


/* include library for MeekroDB */
require_once '/home4/nsevradi/public_html/dev-lotoja/model/meekrodb.2.3.class.php';

/* set up connection to database*/
DB::$host = 'localhost'; //defaults to localhost if omitted
DB::$user = 'nsevradi_lotoja';
DB::$password = 'L0t0ja313!';
DB::$dbName = 'nsevradi_event';

/* do query to database */

/* get form contents */
/*
$obj = new Incident();

$bibNumber = $obj->bibNumber;
$tactical = $obj->tactical;
$details = $obj->details;
$location = $obj->location;
$category = $obj->category;
*/

/* send to model */
/* instantiate the class and call the method in the class */
/* figure out how to instantiate the class and include the model file*/

/*the code here should be in the model */

class sqlHelper {

public fuction insertIncident( $bibNumber, $tactical, $details, $location, $category
	DB:insert('Test', array(
		'bibNumber' => $bibNumber,
		'tactical' => $tactical,
		'details' => $details,
		'location' => $location,
		'category' => $category
	));

}


/*initialize the class */
    /*Insert mydata= new data();*/
    /*run the method of the class with the given parameters that are defined */
   /* mydata.insertIncident($_POST["bibNumber"], $_POST["tactical"], $_POST["details"], $_POST["location"], $_POST["category"]);*/
   
  /* select with MeekrboDB  and echo that out*/

?>