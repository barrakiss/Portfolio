$(window).scroll(function() {
    var top_of_element = $(".my_work").offset().top;
    var bottom_of_element = $(".my_work").offset().top + $(".my_work").outerHeight();
    var bottom_of_screen = $(window).scrollTop() + $(window).height();
    var top_of_screen = $(window).scrollTop();

    if((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)){
        // The element is visible, do something
         $('.image2, .image4, .image6, .image8').removeClass('hide').addClass('left');
    }
    if((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)){
        // The element is visible, do something
         $('.image1, .image3, .image5, .image7, .image9').removeClass('hide').addClass('right');
    }
    else {
        // The element is not visible, do something else
    }
});