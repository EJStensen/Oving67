/**
 * 
 */
    
$(document).ready(function(){
    $('#Booking').DataTable( {
		ajax: {
			url: 'rest/restaurant',
			dataSrc: ''
		},
		columns: [
			{data: 'bordnr'},
			{data: 'dato'},
			{data: 'navn'},
			{data: 'gjester'},
			{data: 'forrett'},
			{data: 'hovedrett'},
			{data: 'dessert'},
			{data: 'drikke'}
		]
    });
});