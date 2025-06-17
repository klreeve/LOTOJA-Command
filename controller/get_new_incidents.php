<?php
	require_once '/home4/nsevradi/public_html/dev-lotoja/model/sqlHelper.php';

	$incidentID = "";
	$newIncidents = "";

	if(isset($_POST['incidentID']))
	{
    		$incidentID = $_POST['incidentID'];

	}
	else
	{
		echo "testincident";
	}


$myhelperincidents = new sqlHelper;

$newIncidents = $myhelperincidents->selectnewincidents($incidentID);


echo json_encode($newIncidents);
?>