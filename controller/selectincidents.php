<?php

require_once '/home4/nsevradi/public_html/dev-lotoja/model/sqlHelper.php';

// create an object

$selecthelper = new sqlHelper;

$select = $selecthelper->select();

echo json_encode($select);


?>