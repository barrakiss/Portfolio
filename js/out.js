/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


$(window).scroll(function () {
     var top_of_element = $(".my_work").offset().top;
     var bottom_of_element = $(".my_work").offset().top + $(".my_work").outerHeight();
     var bottom_of_screen = $(window).scrollTop() + $(window).height();
     var top_of_screen = $(window).scrollTop();
     // ANIMATION TECHNOLOGY
     if (bottom_of_screen > top_of_element && top_of_screen < bottom_of_element) {
          // The element is visible, do something
          $('.image2, .image4, .image6, .image8').removeClass('hide').addClass('left');
     }
     if (bottom_of_screen > top_of_element && top_of_screen < bottom_of_element) {
          $('.image1, .image3, .image5, .image7, .image9').removeClass('hide').addClass('right');
     }
     // ANIMATION SECTION1
     var top_of_element = $(".black_whole").offset().top;
     var bottom_of_element = $(".black_whole").offset().top + $(".black_whole").outerHeight();
     if (bottom_of_screen > top_of_element && top_of_screen < bottom_of_element) {
          $('.about_me_text').removeClass('hide').addClass('right');
     }
     if (bottom_of_screen > top_of_element && top_of_screen < bottom_of_element) {
          $('.about_me_photo').removeClass('hide').addClass('left');
     }
     // ANIMATION SECTION2
     var top_of_element = $(".black_whole_2").offset().top;
     var bottom_of_element = $(".black_whole_2").offset().top + $(".black_whole_2").outerHeight();
     if (bottom_of_screen > top_of_element && top_of_screen < bottom_of_element) {
          $('.hobby').removeClass('hide').addClass('right');
     }
     if (bottom_of_screen > top_of_element && top_of_screen < bottom_of_element) {
          $('.photos').removeClass('hide').addClass('left');
     }
     // ANIMATION SECTION4
     var top_of_element = $(".section5").offset().top;
     var bottom_of_element = $(".section5").offset().top + $(".section5").outerHeight();
     if (bottom_of_screen > top_of_element && top_of_screen < bottom_of_element) {
          $('.work1').removeClass('hide').addClass('right');
     }
     if (bottom_of_screen > top_of_element && top_of_screen < bottom_of_element) {
          $('.work3').removeClass('hide').addClass('left');
     }
     if (bottom_of_screen > top_of_element && top_of_screen < bottom_of_element) {
          $('.work2').removeClass('hide').addClass('from_bottom');
     }
     // ANIMATION SECTION5
     var top_of_element = $(".black_whole_3").offset().top;
     var bottom_of_element = $(".black_whole_3").offset().top + $(".black_whole_3").outerHeight();
     if (bottom_of_screen > top_of_element && top_of_screen < bottom_of_element) {
          $('.contact_foto').removeClass('hide').addClass('from_bottom');
     }
     if (bottom_of_screen > top_of_element && top_of_screen < bottom_of_element) {
          $('.contact_div2, .con2, .con4, .download').removeClass('hide').addClass('left');
     }
     if (bottom_of_screen > top_of_element && top_of_screen < bottom_of_element) {
          $('.con1, .con3, .con5').removeClass('hide').addClass('right');
     } else {
          // The element is not visible, do something else
     }
});

$(".arrow").hide();
$(".nav_items_mobile").hide();

$(".hamburger").click(function () {
     $(".nav_items_mobile").slideToggle("slow", function () {
          $(".hamburger").hide();
          $(".arrow").show();
     });
});

$(".arrow").click(function () {
     $(".nav_items_mobile").slideToggle("slow", function () {
          $(".arrow").hide();
          $(".hamburger").show();
     });
});

/*var button = document.querySelector(".manieczki");
var changeLangEng = document.querySelectorAll(".eng");
var changeLangPl = document.querySelectorAll(".pl");

function switchLang() {
    for (var i = 0; i < changeLangEng.length; i++) {
    changeLangEng[i].classList.toggle("showPl");
    changeLangEng[i].classList.toggle("showEng");      
    } 
    for (var i = 0; i < changeLangPl.length; i++) {
    changeLangPl[i].classList.toggle("showPl");
    }
}

button.addEventListener("click", switchLang);*/

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(0);


/***/ })
/******/ ]);