/**
 * Created by abuasi on 1/24/16.
 */



$(document).ready( function() {
    $('.subMenu').smint({
        'scrollSpeed' : 1000
    });
});


$(window).ready(function(){
    $('div[id="s1"]').css('min-height', $(window).height());
})