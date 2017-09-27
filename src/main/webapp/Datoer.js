var months = new Array("Januar","Februar","Mars","April","Mai","Juni","Juli","August","September","Oktober","November","Desember");

var days = new Array("1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17",
					 "18","19","20","21","22","23","24","25","26","27","28","29","30","31");


var dropdown = document.getElementById("selectMonth");

function fillMonths(){
	for (var i = 0; i < months.length; i++) {
		dropdown[dropdown.length] = new Option(months[i]);
	}
}

domReady(fillMonths);