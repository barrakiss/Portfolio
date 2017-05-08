$(window).scroll(function() {
    var top_of_element = $(".my_work").offset().top;
    var bottom_of_element = $(".my_work").offset().top + $(".my_work").outerHeight();
    var bottom_of_screen = $(window).scrollTop() + $(window).height();
    var top_of_screen = $(window).scrollTop();
// ANIMATION TECHNOLOGY
    if((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)){
        // The element is visible, do something
         $('.image2, .image4, .image6, .image8').removeClass('hide').addClass('left');
    }
    if((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)){
         $('.image1, .image3, .image5, .image7, .image9').removeClass('hide').addClass('right');
    }
// ANIMATION SECTION1
    var top_of_element = $(".black_whole").offset().top;
    var bottom_of_element = $(".black_whole").offset().top + $(".black_whole").outerHeight();
    if((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)){
         $('.about_me_text').removeClass('hide').addClass('right');
    }
    if((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)){
         $('.about_me_photo').removeClass('hide').addClass('left');
    }
// ANIMATION SECTION2
    var top_of_element = $(".black_whole_2").offset().top;
    var bottom_of_element = $(".black_whole_2").offset().top + $(".black_whole_2").outerHeight();
    if((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)){
         $('.hobby').removeClass('hide').addClass('right');
    }
    if((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)){
         $('.photos').removeClass('hide').addClass('left');
    }
// ANIMATION SECTION2
    var top_of_element = $(".section5").offset().top;
    var bottom_of_element = $(".section5").offset().top + $(".section5").outerHeight();
    if((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)){
         $('.work1').removeClass('hide').addClass('right');
    }
    if((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)){
         $('.work3').removeClass('hide').addClass('left');
    }
    if((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)){
         $('.work2').removeClass('hide').addClass('from_bottom');
    }
    else {
        // The element is not visible, do something else
    } 
});