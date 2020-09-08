  

$(document).ready(function() {
    $('#old-rate-lists').DataTable( {  
        "ordering": true,     
        "lengthChange": false,          
        "pageLength": 50,
        "ajax": "data.json"
    } );

    function onlineAjaxCall() {
        $('#rate-lists').DataTable( {  
            "ordering": true,
            "lengthChange": false,           
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
        
    }
    onlineAjaxCall();
} );  

document.addEventListener("offline", onOffline, false);
document.addEventListener("online", onOnline, false);

// function onOnline() {
//     $(document).ready(function() {
//         $('#rate-lists').DataTable( {  
//             "ordering": true,
//             "lengthChange": false,           
//             "pageLength": 50,
//             "ajax": "https://liquor.pushpan.com.np/api/items/?format=datatables",
//         "columns": [
//                 { "data": "title" },
//                 { "data": "category" },
//                 { "data": "vol" },
//                 { "data": "mrp" },
//                 { "data": "ws_aft_vat" },
//                 { "data": "retail_bf_vat" },
//             { "data": "retail_aft_vat" },
    
//             ]
//         } );
//     } );  
// }

function onOffline() {
    $(document).ready(function() {
        $('#rate-lists').DataTable( {  
            "ordering": true,     
            "lengthChange": false,          
            "pageLength": 50,
            "ajax": "db.json"
        } );
        $( "#network" ).removeClass( "d-none" );
    });  
}
function onOnline() {
    $(document).ready(function() {
        $( "#network" ).addClass( "d-none" );
    });  
    onlineAjaxCall();
    location.reload();
}

$(function() {
    $('#promotion').modal('show');
});
