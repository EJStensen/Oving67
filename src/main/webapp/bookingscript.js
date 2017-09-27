/**
 * 
 */

$(document).ready(function(){
	$("input[type=text]").keyup(function(){
	    var count = 0, attr = "disabled", $sub = $("#BookBord"), $inputs = $("input[type=text]");  
	    $inputs.each(function(){
	        count += ($.trim($(this).val())) ? 1:0;
	    });
	    (count >= $inputs.length ) ? $sub.removeAttr(attr):$sub.attr(attr,attr);       
	});
});

$(document).ready(function(){	
	$('#BookBord').click(function(){
		var a = $("#gjester").val(), b = $("#kortnr").val(), c = $("#utdato").val(), d = $("#kontrollsifre").val();
		var check1 = ($.isNumeric(a) && $.isNumeric(b) && $.isNumeric(c) && $.isNumeric(d));
		if (check1){
			$.ajax({
				url: 'rest/restaurant',
				type: 'POST',
				data: JSON.stringify({
					bordnr: $("#bordnr").val(),
					dato: $("#resdato").val(),
					navn: $("#navn").val(),
					gjester: $("#gjester").val(),
					forrett: $("#forrett").val(),
					hovedrett: $("#hovedrett").val(),
					dessert: $("#dessert").val(),
					drikke: $("#drikke").val(),
				}),
				contentType: 'application/json; charset=utf-8',
				dataType: 'json',
				success: function(result){
					alert("reservert");
					location.href = "http://localhost:8080/restaurant/";
				}
			});
		} else {
			alert("Sjekk at gjester og feltene under betaling ikke inneholder bokstaver!");
		}
	});
});

$(function () {
    $('#datetimepicker11').datetimepicker({
        daysOfWeekDisabled: [0, 6],
        sideBySide: true
    });
});