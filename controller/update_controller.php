<?php

require_once '/home4/nsevradi/public_html/dev-lotoja/model/sqlHelper.php';

$date = new DateTime();


    $incidentID = "";
    $originalDetail = "";
    $additionalDetail = "";
    $incidentType = "";
    $bibNumber = "";
    $reportedBy = "";
    $location = "";
    $reportedByUpdate = "";
    $timeStamp = $date->format('Y-m-d H:i:s');

if(isset($_POST['incidentID']) && isset($_POST['originalDetail']) && isset($_POST['additionalDetail']) && isset($_POST['incidentType']) && isset($_POST['bibNumber']) && isset($_POST['reportedBy']) && isset($_POST['location']))
{
    $incidentID = $_POST['incidentID'];
    $originalDetail = $_POST['originalDetail'];
    $additionalDetail = $_POST['additionalDetail'];
    $incidentType = $_POST['incidentType'];
    $bibNumber = $_POST['bibNumber'];
    $reportedBy = $_POST['reportedBy'];
    $location = $_POST['location'];
    $reportedByUpdate = $_POST['reportedByUpdate'];

    // Do whatever you want with the $uid
}
else
{
	echo "broken";
}

/* create sqlhelper object and use update method */

$myhelperupdate = new sqlHelper;

$newDetail= $myhelperupdate->update($incidentID, $originalDetail, $additionalDetail, $incidentType, $bibNumber, $reportedBy, $location, $reportedByUpdate, $timeStamp);

$array = array(
		"incidentType" => $incidentType,
		"bibNumber" => $bibNumber,
		"reportedBy" => $reportedBy,
		"newDetail" => $newDetail,
		"location" => $location);

$json_array = json_encode($array);
echo ($json_array);

?>