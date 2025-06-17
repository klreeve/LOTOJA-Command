var recentID = 0;

function getIncidents() {
        var status = 'open';
        var inputs = {};

/*in a sense make a object out of it for inputs */

        /*using ajax send off info to controller */
        var $request = $.ajax({

	/* send of data to controller */
          url: "../controller/selectincidents.php",
	/* way the information is being sent off */
          type: "post",
	/* the data */
          data: inputs,
	/* the way it is being encoded */
	  dataType: "json",
	/* if everything seemed good - run this success */
	  success: function(data){

		/* need to do this for row.add() for dataTables */
   	
		/* initializing the table for dataTables */
		var myTable = $('#dataTables-example').DataTable();
		$.each(data, function(key, value) {
			myTable.row.add( [value["TimeStamp"],value["IncidentID"],value["IncidentType"],value["BibNum"],value["TacticalID"],'<div class="scroll">' + value["Details"].replace(/(\n)+/g,'<br>') + '</div>',value["Location"],value["CommandCenter"],value["Status"]] ).draw().nodes().to$().addClass( '' + value["IncidentID"] + '' );


    		});
		recentID = $("#dataTables-example .list").children("tr:nth-child(1)").children("td:nth-child(2)").html();

		doPoll();


	  },

	  error: function(){
	  	$("#outdata").html("stuff");
	  }

        });
 } 

function getNewIncidents() {

	/*in a sense make a object out of it for inputs */
	var incidentID = $("#dataTables-example .list").children("tr:nth-child(1)").children("td:nth-child(2)").html();
	console.log("IncidentID " + incidentID);
	console.log("RecentID " + recentID);
	
	if(typeof incidentID !== "undefined")
	{
		console.log("before ajax");
        	/*using ajax send off info to controller */
        	var $request = $.ajax({

		/* send of data to controller */
          	url: "../controller/get_new_incidents.php",
		/* way the information is being sent off */
          	type: "post",
		/* the data */
          	data: { incidentID : incidentID },
		/* the way it is being encoded */
	  	dataType: "json",
		/* if everything seemed good - run this success */
	  	success: function(data){
			

	
			/* need to do this for row.add() for dataTables */
   	
			/* initializing the table for dataTables */

				var myTable = $('#dataTables-example').DataTable();
				console.log(data);
				$.each(data, function(key, value) {
					console.log("New IncidentID " + value["IncidentID"]);
					console.log("compare new incidentID to recent ID: " + recentID);
					if(value["IncidentID"] > recentID)
					{
						recentID = value["IncidentID"];
						console.log("doing poll");
						console.log("New IncidentID " + value["IncidentID"]);
						myTable.row.add( [value["TimeStamp"],value["IncidentID"],value["IncidentType"],value["BibNum"],value["TacticalID"],value["Details"],value["Location"],value["CommandCenter"],value["Status"]] ).draw().nodes().to$().addClass( '' + value["IncidentID"] + '' );


    					}
				});
	
			doPoll();


	  	},

	  	error: function(){
	  		$("#outdata").html("stuff");
	  	}

        	});

	}
	else
	{
		console.log("no new incidents");
		doPoll();
	}

}

function doPoll() {
	setTimeout(getNewIncidents,10000);
}

$( document ).ready( function(e) {
	
	/*get information from form */
	getIncidents();

});