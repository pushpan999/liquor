$(document).ready(function() {
    $('#rate-lists').DataTable( {  
        "ordering": true,           
        "pageLength": 50,
        "ajax": "https://liquor.pushpan.com.np/api/items/?format=datatables",
	"columns": [
            { "data": "title" },
            { "data": "category" },
            { "data": "vol" },
            { "data": "mrp" },
            { "data": "ws_aft_vat" },
            { "data": "retail_bf_vat" },
	    { "data": "retail_aft_vat" },

        ]
    } );
} );    

$(document).ready(function() {
    $('#old-rate-lists').DataTable( {  
        "ordering": true,           
        "pageLength": 50,
        "ajax": "data.json",
	"columns": [
            { "data": "title" },
            { "data": "category" },
            { "data": "vol" },
            { "data": "mrp" },
            { "data": "ws_aft_vat" },
            { "data": "retail_bf_vat" },
	    { "data": "retail_aft_vat" },

        ]
    } );
} ); 

$(function() {
    $('#promotion').modal('show');
});
