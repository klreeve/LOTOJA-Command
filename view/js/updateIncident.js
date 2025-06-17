$('.incidentTable tbody').on("click", "tr", function(e) {
      
      //pull datatable to the left
      $('.incidents').addClass('pull-left');

      //show additional info form
      $('.additionalInfoWrapper').addClass('showInfo');
      $('.additionalInfoWrapper').removeClass('hideInfo');
      $('.incidentTable').removeClass('wordbreak');

	//getting incidentID of the row clicked
	var incidentID = $(this).children("td:nth-child(2)").html();

        /*using ajax send off info to controller */
        var $request = $.ajax({
	/* send of data to controller */
          url: "../controller/selectsingleincident.php",
	/* way the information is being sent off */
          type: "post",
	/* the data */
          data: { incidentID : incidentID },
	/* the way it is being encoded */
	  dataType: "json",
	/* if everything seemed good - run this success */
	  success: function(data){
		console.log(data);
		console.log(data[0].IncidentID);
		$("#time").val(data[0].TimeStamp);
		$("#incident").val(data[0].IncidentID);
		$("#type").val(data[0].IncidentType);
		$("#bib").val(data[0].BibNum);
		$("#tact").val(data[0].TacticalID);
		$("#det").val(data[0].Details);
		$("#loc").val(data[0].Location);
		$("#commandcenter").val(data[0].CommandCenter);
		if(data[0].Status == null || data[0].Status == "open")
 		{
			console.log("open incident");
			$("#changeStatus").html('closed');
		}
		else if(data[0].Status == "closed")
		{
			console.log("closed incident");
			$("#changeStatus").html('open');
		}
	  },

	  error: function(){
	  	$("#outdata").html("There was a problem with updating the incident");
	  }

        });
      //floats table to left

      //

  });

  /***
	Handles functionality of when clicking the close button for the Additional Info Form
  ***/
  $('.additionalInfoWrapper').on('click', '.closeInfo', function() {

        alert("All unsaved info will be lost");

        //floats table to left

        //

        $('.additionalInfoWrapper').removeClass('showInfo');

	$('.additionalInfoWrapper').addClass('hideInfo');

	$('.incidentTable').addClass('wordbreak');

        $('.incidents').removeClass('pull-left');

        //clear input fields

	$("#time").val("");
	$("#incident").val("");
	$("#type").val("");
	$("#bib").val("");
	$("#tact").val("");
	$("#det").val("");
	$("#loc").val("");
	$("#commandcenter").val("");
	$("#changeStatus").html("");

   });





/*

  add comment, cancel comment, save comment functionality here 

on add comment, remove add comment button and display new input field to add new comment, as well as save and cancel buttons
on save, the save will disappear and the add comment will reappear
on cancel, the add comment button will reappear and the save button disappears

*/

$('.additionalInfoWrapper').on('click', '#changeStatus', function() {
	var incidentID = $("#incident").val();
	var status = $("#changeStatus").html();
	var inputs = {};

	if(status == "open")
	{
		//change status to closed
		status = "open";
		console.log("open incident");
	}
	else
	{
		status = "closed";
		console.log("close incident");
	}

	var inputs = {};

	inputs["incidentID"] = incidentID;
	inputs["status"] = status;

	  /*using ajax send off info to controller */
        var $request = $.ajax({
	/* send of data to controller */
          url: "../controller/update_status_controller.php",
	/* way the information is being sent off */
          type: "post",
	/* the data */
          data: inputs,
	/* the way it is being encoded */
	  dataType: "json",
	/* if everything seemed good - run this success */
	  success: function(data){

		/* displays updated details and cells in the row of data table */
		$('.'+ incidentID + ' td:nth-child(9)').text(status);
	  },

	  error: function(){
	  	$("#outdata").html("There was an error when saving the status");
	  }

        });

	//hide additional info form
	$('.additionalInfoWrapper').removeClass('showInfo');
	$('.additionalInfoWrapper').addClass('hideInfo');
	$('.incidents').removeClass('pull-left');
	$('.incidentTable').addClass('wordbreak');

	//clear input fields in form

	$("#time").val("");
	$("#incident").val("");
	$("#type").val("");
	$("#bib").val("");
	$("#tact").val("");
	$("#det").val("");
	$("#loc").val("");
	$("#commandcenter").val("");
	$("#status").val("");
	$("#addeddetail").val("");
	$("#reportedupdate").val("");
	$("#changeStatus").html("");
	
});

$('.additionalInfoWrapper').on('click', '.saveComment', function() {

	//pull the values from the form and assign them to variables
	var incidentID = $("#incident").val();
	var originalDetail = $("#det").val();
	var additionalDetail = $("#addeddetail").val();
	var incidentType = $("#type").val();
	var bibNumber = $("#bib").val();
	var reportedBy = $("#tact").val();
	var location = $("#loc").val();
	var reportedByUpdate = $("#reportedupdate").val();
	var inputs = {};
	
	//console.log("before inputs: IncidentID " + incidentID + " originalDetail : " + originalDetail + " additionalDetail: " + additionalDetail);
	console.log("look " + incidentType  +" bib " + bibNumber + " report " +  reportedBy + "loc" + location);
	
	/*in a sense make a object out of it for inputs */
        inputs["incidentID"] = incidentID;
        inputs["originalDetail"] = originalDetail;
        inputs["additionalDetail"] = additionalDetail;
	inputs["incidentType"] = incidentType;
	inputs["bibNumber"] = bibNumber;
	inputs["reportedBy"] = reportedBy;
	inputs["location"] = location;
	inputs["reportedByUpdate"] = reportedByUpdate;

        /*using ajax send off info to controller */
        var $request = $.ajax({
	/* send of data to controller */
          url: "../controller/update_controller.php",
	/* way the information is being sent off */
          type: "post",
	/* the data */
          data: inputs,
	/* the way it is being encoded */
	  dataType: "json",
	/* if everything seemed good - run this success */
	  success: function(data){
		console.log(data['location']);
		/* displays updated details and cells in the row of data table */
		$('.'+ incidentID + ' td:nth-child(3)').text(data['incidentType']);
		$('.'+ incidentID + ' td:nth-child(4)').text(data['bibNumber']);
		$('.'+ incidentID + ' td:nth-child(5)').text(data['reportedBy']);
		$('.'+ incidentID + ' td:nth-child(6)').text(data['newDetail']);
		$('.'+ incidentID + ' td:nth-child(7)').text(data['location']);
	  },

	  error: function(){
	  	$("#outdata").html("There was an error when saving the new comment");
	  }

        });

	//hide additional info form
	$('.additionalInfoWrapper').removeClass('showInfo');
	$('.additionalInfoWrapper').addClass('hideInfo');
	$('.incidents').removeClass('pull-left');
	$('.incidentTable').addClass('wordbreak');

	//clear input fields in form

	$("#time").val("");
	$("#incident").val("");
	$("#type").val("");
	$("#bib").val("");
	$("#tact").val("");
	$("#det").val("");
	$("#loc").val("");
	$("#commandcenter").val("");
	$("#status").val("");
	$("#addeddetail").val("");
	$("#reportedupdate").val("");

});



$('.additionalInfoWrapper').on('click', '.cancelComment', function() {

  alert("All unsaved info will be lost");

        //floats table to left

        $('.additionalInfoWrapper').removeClass('showInfo');
	$('.additionalInfoWrapper').addClass('hideInfo');
        $('.incidents').removeClass('pull-left');
	$('.incidentTable').addClass('wordbreak');

        //clear input fields

	$("#time").val("");
	$("#incident").val("");
	$("#type").val("");
	$("#bib").val("");
	$("#tact").val("");
	$("#det").val("");
	$("#loc").val("");
	$("#commandcenter").val("");
	$("#status").val("");
	$("#addeddetail").val("");
	$("#reportedupdate").val("");

});



$('.additionalInfoWrapper').on('click', '.addComment', function() {

  $('.addComment').remove();

  $('.comments').append('<div class="commentWrapper row"><form><label class="col-sm-10 control-label">Additional Details:</label><div class="col-sm-10"><input class="form-control" id="addeddetail" type="text" value=""></div><label class="col-sm-10 control-label">Reported By:</label><div class="col-sm-10"><input class="form-control" id="disabledInput" type="text" value=""></div><label class="timestamp"></label></form></div><button type="button" class="btn btn-danger cancelComment">Cancel</span></button><button type="button" class="btn btn-success saveComment">Save</span></button>');

});



/*

  On close it should reset the modal. It should say "Cancel" instead of "Close"

  Clicking outside of the modal shouldn't close it

*/