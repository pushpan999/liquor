$(document).ready(function() {
    document.addEventListener("offline", onOffline, false);
    document.addEventListener("online", onOnline, false);


    function onOffline() {
        $( "#network" ).removeClass( "d-none" );

    } 
    function onOnline() {
        $( "#network-online" ).removeClass( "d-none" );
        $( "#network-offline" ).addClass( "d-none" );
        $( "#network" ).addClass( "d-none" );

    }         
    } );  




   
