$(document).ready(function() {
    $('#rate-lists').DataTable( {  
        "ordering": true,           
        "pageLength": 50,
        "ajax": "data.json"
    } );
} );     

$(function() {
    $('#promotion').modal('show');
});
