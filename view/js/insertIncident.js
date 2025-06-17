$("#saveIncident").click( function(e) {
	e.preventDefault();
	/*get information from form */
        var bibNumber = $("#bibNumber").val();
        var tactical = $("#tactical").val();
        var details = $("#details").val();
        var location = $("#location").val();
        var incidentType= $("#incidentType").val();
	var commandCenter = $("#ccLabel").text();
        var status = 'open'
        var inputs = {};
/*in a sense make a object out of it for inputs */
        inputs["bibNumber"] = bibNumber;
        inputs["tactical"] = tactical;
        inputs["details"] = details;
        inputs["location"] = location;
        inputs["incidentType"] = incidentType;
	inputs["commandCenter"] = commandCenter;

        /*i dont know if this next line matters */
        var serializedData = $(inputs).serialize();
        /*using ajax send off info to controller */
        var $request = $.ajax({
	/* send of data to controller */
          url: "../controller/insert_update_controller.php",
	/* way the information is being sent off */
          type: "post",
	/* the data */
          data: inputs,
	/* the way it is being encoded */
	  dataType: "json",
	/* if everything seemed good - run this success */
	  success: function(data){
	  	console.log("success");
		console.log(data);
		console.log(data.tactical);

		/* reset input values of form to blank */
		$('.incidentForm ').find('input').val('');
		$('.incidentForm ').find('textarea').val('');
		$('#bibNumber').focus();

		/* need to do this for row.add() for dataTables */
   		/*row = $('<tr class="incidentID traffic even gradeA"></tr>');*/
		/* initializing the table for dataTables */
		var myTable = $('#dataTables-example').DataTable();
		/* add in row using the data json object */
		console.log("status " + data.status);
		myTable.row.add( [data.timeStamp,data.incidentID,data.incidentType,data.bibNumber,data.tactical,data.details,data.location,data.commandCenter,"open"] ).draw().nodes().to$().addClass( '' + data.incidentID + '' );

/*incidentTable */
		console.log("add to table");
	  },

	  error: function(){
	  	$("#outdata").html(textInfo);
	  }

        });
        

});