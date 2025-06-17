<?php

   $return_array = array();
	
   $return_array['bibNumber'] = $_POST["bibNumber"];

   $return_array['tactical'] = $_POST["tactical"];

  


   $json_array = json_encode($return_array);

   echo $json_array;

?>