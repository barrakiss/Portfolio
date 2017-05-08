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
         $('.about_me_text').removeClass('hide').addClass('animation_s1_1');
    }
    if((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)){
         $('.about_me_photo').removeClass('hide').addClass('animation_s1_2');
    }
// ANIMATION SECTION2
    var top_of_element = $(".black_whole_2").offset().top;
    var bottom_of_element = $(".black_whole_2").offset().top + $(".black_whole").outerHeight();
    if((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)){
         $('.hobby').removeClass('hide').addClass('animation_s1_1');
    }
    if((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)){
         $('.photos').removeClass('hide').addClass('animation_s1_2');
    }
    else {
        // The element is not visible, do something else
    } 
});