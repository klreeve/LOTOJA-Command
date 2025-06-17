
$(document).ready(function() {
	$("#ccForm").submit(function(e) {
    		e.preventDefault();
	});
   	$("#ccSubmit").click(function(){
		console.log("here");
        	var ccInput = $("#ccInput").val();
        	$("#ccLabel").html(ccInput);
		$("#commandModal").modal('hide');
    	});


	$( "#incidentType" ).focusin(function(el) {
		$("#incidentTypeKey").removeClass("hidden");
	});
	$( "#incidentType" ).focusout(function(el) {
		$("#incidentTypeKey").addClass("hidden");
	});
/*
   Changes the form that shows for adding an incident
*/

console.log("im here");
     $('#saveIncident:input[type="submit"]').prop('disabled', true);
     $('#saveIncident:input[type="text"]').keyup(function() {
        if($(this).val() != '') {
           $('#saveIncident:input[type="submit"]').prop('disabled', false);
        }
     });
 
 
 




});



