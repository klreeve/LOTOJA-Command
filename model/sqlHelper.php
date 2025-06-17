<?php

error_reporting(E_ALL);

/* include library for MeekroDB */
require_once '/home4/nsevradi/public_html/dev-lotoja/model/meekrodb.2.3.class.php';

/* set up connection to database*/
DB::$host = 'localhost'; //defaults to localhost if omitted
DB::$user = 'nsevradi_lotoja';
DB::$password = 'L0t0ja313!';
DB::$dbName = 'nsevradi_event';

/* do all needed transactions to database */

class sqlHelper {
	/***
		select function 
		Returns all records of table Test
	***/
    	function select() {
        	return DB::query("SELECT * FROM Test");
     	}

	/***
		selectnewincidents function
		Returns all records of table Test with IncidentID great than most recent
		Incident found on table in website.
	***/
	function selectnewincidents($incidentID) {
		return DB::query("SELECT * FROM Test WHERE  IncidentID > %i", $incidentID);
	}

	//insert function meekro db has an insert update sql function

	/***
		insert function
		Creates a new incident from fields in input form on top.
		Also returns the incremented ID
	***/
	function insert($bibNumber, $tactical, $details, $location, $commandCenter, $incidentType, $timeStamp) {
		/* insert incident to table Test */
		DB::insert('Test', array(
			'BibNum' => $bibNumber,
			'TacticalID' => $tactical,
  			'Details' => $details,
			'Location' => $location,
			'CommandCenter' => $commandCenter,
			'IncidentType' => $incidentType,
			'TimeStamp' => $timeStamp,
			'Status' => "open"
		));
		/* returns incremented ID */
		$returnedID = DB::insertId();

		return $returnedID;
	}

	/***
		singleSelect function
		Selects and returns all information of selected incident in table on website
	***/
	function singleSelect($incidentID) {
		return DB::query("SELECT * FROM Test WHERE IncidentID = %i", $incidentID);
	}

	/***
		update function
		gets all information allowed to be updated and inserts into 
		the details field in database with old and new information
		Returns old and new details
	***/
	function update($incidentID, $originalDetail, $additionalDetail, $incidentType, $bibNumber, $reportedBy, $location, $reportedByUpdate, $timeStamp) {
		if ($additionalDetail == "")
		{
			$newDetail = $originalDetail;
		}
		else
		{
			//$newDetail = $originalDetail . " " . $timeStamp . " Reported By: " . $reportedByUpdate . ". " . $additionalDetail;

			/*
			This gets added details in the format Kevin wants in the update form, but not in the data table.
			*/
			$newDetail = $originalDetail . "\n----------------------------\n" . $timeStamp . "\nReported By: " . $reportedByUpdate . ".\n" . $additionalDetail;
			
		}

		DB::update('Test', array(
			'Details' => $newDetail,
			'IncidentType' => $incidentType,
			'BibNum' => $bibNumber,
			'TacticalID' => $reportedBy,
			'Location' => $location
			), "IncidentID=%i", $incidentID);

		return $newDetail;

	}
	
	function updateStatus($incidentID, $status) {
		DB::update('Test', array(
			'Status' => $status
			), "IncidentID=%i", $incidentID);
	}

}

?>