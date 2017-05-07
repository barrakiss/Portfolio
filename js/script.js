$(window).scroll(function() {
    var top_of_element = $(".gallery").offset().top;
    var bottom_of_element = $(".gallery").offset().top + $(".gallery").outerHeight();
    var bottom_of_screen = $(window).scrollTop() + $(window).height();
    var top_of_screen = $(window).scrollTop();

    if((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)){
        // The element is visible, do something
         $('.photos').removeClass('hide').addClass('spark');
    }
    else {
        // The element is not visible, do something else
    }
});