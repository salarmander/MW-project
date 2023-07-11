$(document).ready(function() {
    $('#autoWidth, #autoWidths').lightSlider({
        autoWidth:true,
        loop:false,
        onSliderLoad: function() {
            $('#autoWidth, #autoWidths').removeClass('cS-hidden');
        } 
    }); 
    $('.home_slider').slick({
        arrows: true,
        autoplay: true,
        autoplaySpeed: 1500,
    });
});