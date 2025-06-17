<?php

require_once '/home4/nsevradi/public_html/dev-lotoja/model/sqlHelper.php';

$incidentID = "";

if(isset($_POST['incidentID']))
{
    $incidentID = $_POST['incidentID'];

    // Do whatever you want with the $uid
}

/* create sqlhelper object and use selectsingleincident method */

$myhelper = new sqlHelper;

$storedData = $myhelper->singleSelect($incidentID);
$json_array = json_encode($storedData);
echo $json_array;

?>