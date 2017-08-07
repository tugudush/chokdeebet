$(document).ready(function() {    
    $.fn.viewport_size();
    var viewport_width = $.fn.viewport_size('width');
    var viewport_height = $.fn.viewport_size('height');
    
    $.fn.initialize_body_height();
    $.fn.move_mobile_nav();
    $.fn.adjust_banner_size();
    $.fn.move_home_banner_contents();
    $('#game-categories-slider').lightSlider({
        item: 4,
        loop: true,
        auto: true,
        pager: false,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    item: 3
                }
            }
        ]
    });
    //$.fn.game_categories_size();
}); // End of document.ready

$(window).resize(function() {
    $.fn.viewport_size();
    var viewport_width = $.fn.viewport_size('width');
    var viewport_height = $.fn.viewport_size('height');
    
    $.fn.initialize_body_height();
    $.fn.move_mobile_nav();
    $.fn.adjust_banner_size();
    //$.fn.game_categories_size();
}); // End of window.resize

$.fn.viewport_size = function(dimension) {
    viewport_width = $(window).width();
    viewport_height = $(window).height();

    if (dimension == 'width') {
        return viewport_width;
    }

    else if (dimension == 'height') {
        return viewport_height;
    }

    else if (dimension == null) {
        console.log('viewport size: '+viewport_width+' x '+viewport_height);
    }
} // End of $.fn.viewport_size = function()

$.fn.initialize_body_height = function() {    
    $('body').css('min-height', viewport_height+'px');
} // End of $.fn.initialize_body_height = function()

$.fn.move_mobile_nav = function() {
    var viewport_width = $.fn.viewport_size('width');
    
    if (viewport_width < 768) {
        $('#navbar-wrap').prependTo($('#header .container'));
    } // End of if (viewport_width < 768) {
} // End of $.fn.move_mobile_nav = function()

$.fn.adjust_banner_size = function() {
    var viewport_width = $.fn.viewport_size('width');
    var banner_adjusted_height = (viewport_width*606)/1366;
    $('.banner').css('height', banner_adjusted_height+'px');
    console.log('banner_adjusted_height: '+banner_adjusted_height);
} // End of $.fn.adjust_banner_size = function()

$.fn.move_home_banner_contents = function() {
    var viewport_width = $.fn.viewport_size('width');
    
    if ($('#home-featured-blocks').length && viewport_width < 768) {
        console.log('execute appendTo');
        $('#home-featured-blocks, #home-banner-btn').prependTo($('#home-main-content'));        
    } // End of if ($('#home-featured-blocks').length)    
    
}// End of $.fn.move_banner_contents = function()

$.fn.game_categories_size = function() {
    var gc_slide_width = $('#game-categories-slider li').css('width');
    gc_slide_width = parseFloat(gc_slide_width);
    $('#game-categories-slider li').css('height', gc_slide_width+'px');
} // End of $.fn.game_categories_size = function()