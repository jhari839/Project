$(document).ready(function(){
	var jsonObj = [
{"name": "Test Task #1", "date": "12/01/2012", "assigned": "John Doe" },	
{"name": "Test Task #2", "date": "12/02/2012", "assigned": "John Doe" },	
{"name": "Test Task #3", "date": "12/03/2012", "assigned": "John Doe" },	
{"name": "Test Task #4", "date": "12/04/2012", "assigned": "John Doe" },	
{"name": "Test Task #5", "date": "12/05/2012", "assigned": "John Doe" },	
{"name": "Test Task #6", "date": "12/06/2012", "assigned": "John Doe" },	
{"name": "Test Task #7", "date": "12/07/2012", "assigned": "John Doe" }
];
	$("#submit").click(function(event){
		event.preventDefault();
		var tn=$("#taskname").val();
		var dt=$("#date").val();
		var at=$("#assignedto").val();
		if(tn.length !=0 && dt.length !=0 && at.length !=0){
		$("#table").append("<div class='row'><div class='cell'>"+ tn +"</div><div class='cell'>"+ dt +"</div><div class='cell'>"+ at +"</div></div>");
		}
	})
	
	function dataPopulate(){
		for(var i=0;i<jsonObj.length;i++){
			$("#table").append("<div class='row'><div class='cell'>"+ jsonObj[i].name +"</div><div class='cell'>"+ jsonObj[i].date +"</div><div class='cell'>"+ jsonObj[i].assigned +"</div></div>");
		}
		
	}
	dataPopulate();
})