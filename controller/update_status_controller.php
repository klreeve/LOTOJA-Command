<?php

require_once '/home4/nsevradi/public_html/dev-lotoja/model/sqlHelper.php';

    $incidentID = "";
    $status = "";


if(isset($_POST['incidentID']) && isset($_POST['status'])) 
{
    $incidentID = $_POST['incidentID'];
    $status = $_POST['status'];


    // Do whatever you want with the $uid
}
else
{
	echo "broken";
}

/* create sqlhelper object and use update method */

$myhelperupdate = new sqlHelper;

$newDetail= $myhelperupdate->updateStatus($incidentID, $status);

$array = array(
		"incidentType" => $incidentType,
		"status" => $status
	);

$json_array = json_encode($array);
echo ($json_array);

?>