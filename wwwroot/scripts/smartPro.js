
$(document).ready(function () {
  var $slider = $('.slider');
  var $progressBar = $('.progress');
  var $progressBarLabel = $('.slider__label');

  $slider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    var calc = ((nextSlide) / (slick.slideCount - 1)) * 100;

    $progressBar
      .css('f -size', calc + '% 100%')
      .attr('aria-valuenow', calc);

    $progressBarLabel.text(calc + '% completed');
  });

  $slider.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 400,
    autoplay: true,
    arrows: false,
    animation: 7000,
  });


  // Brand Carousel
  $('.brand-carousel').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    arrows: false,
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  //Partners Say Slider
  $('.PartnersSaySlider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    speed: 1000,
    infinite: true,
    speed: 1000,
    responsive: [{
      breakpoint: 1024,
      settings: {
        arrows: false,
        dots: false,
      }
    }]
  });

  //we support//
  $('.WeSupportSlider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: true,
    responsive: [{
      breakpoint: 1400,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        dots: true

      }
    },
    {
      breakpoint: 990,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: false,
        autoplay: false,
        dots: true
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: false,
        dots: true
      }
    }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  //customer stories
  $('.CustomerStoriesSlider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
    infinite: true,
    arrows: false,
    dots: true,
    speed: 600,
  });
  //customer Blog
  $('.CustomerBlogSlider').slick({
    infinite: true,
    initialSlide: 0,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    centerMode: false,
    arrows: false,
    responsive: [{
      breakpoint: 990,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: false,
        autoplay: false,
        dots: true,
        centerMode: false,
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: false,
        dots: true
      }
    }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
  //product unifi
  $('.UnifiSlider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: true,
    infinite: true,
    responsive: [{
      breakpoint: 1000,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
        arrows: false,
        autoplay: false,
        dots: true,
        centerMode: false,
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        autoplay: false,
        dots: true
      }
    },
    {
      breakpoint: 540,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: false,
        dots: true
      }
    }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
  //explore product
  $('.productSlider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    centerMode: true,
    arrows: true,
    dots: false,
    asNavFor: '.custom-navigation',

  });

  $('.custom-navigation').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    asNavFor: '.productSlider',
    dots: false,
    centerMode: false,
    focusOnSelect: true,

  });
});


//extra remove

//$(document).ready(function () {
//  function updatePlaceholderText(input) {
//    var label = input.closest('.umbraco-forms-field').find('.umbraco-forms-field-wrapper');
//    var files = input[0].files;

//    if (files && files.length > 0) {

//      var fileName = files.length > 1 ? files.length + ' files selected' : files[0].name;
//      label.attr('data-text', fileName);
//    } else {

//      label.attr('data-text', 'Attach or enter manually');
//    }
//  }


//  function setDefaultPlaceholderText() {
//    $(".resume .umbraco-forms-field-wrapper").each(function () {
//      $(this).attr('data-text', 'Attach or enter manually');
//    });
//  }
//  setDefaultPlaceholderText();

//  // Trigger the change event initially to set the placeholder text
//  $(".resume .umbraco-forms-field-wrapper input").trigger('change');

//  // Event listener for file input change
//  $(".resume").on("change", ".umbraco-forms-field-wrapper input", function () {
//    updatePlaceholderText($(this));
//  });
//});



document.addEventListener('DOMContentLoaded', function () {
  var swiper = new Swiper('.slider1', {
    slidesPerView: 3,
    slidesToScroll: 1,
    spaceBetween: 30,
    grabCursor: true,
    autoplay: false,
    speed: 500,
    pagination: {
      el: '.slider__pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.slider__button-next',
      prevEl: '.slider__button-prev',
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 40,
      }
    },
  });

  //about career leadership Carousel
  var aboutswiper = new Swiper('.about-slider', {
    slidesPerView: 1,
    spaceBetween: 30,
    grabCursor: true,
    autoplay: false,
    speed: 500,
    pagination: {
      el: '.slider__pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.slider__button-next',
      prevEl: '.slider__button-prev',
    },

  });
  var mySwiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 40,
    mousewheel: {
      forceToAxis: true,
    },


    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1324: {
        slidesPerView: 2,
        spaceBetween: 50,
      },
    },
  });
});

// Tab java script
// Function to open a specific tab and hide others



//partnership Network  Onclick
function openTab(tabId, button) { // ("CardPartners", "12")
  // Hide all tabs
  $('.tab').hide(); //privious tab remove

  // Remove active class from all buttons
  $('.partnership-tab-nav button').removeClass('active');
  $('.tab-content-box h6 button').removeClass('active');



  $('#' + tabId).show();
  $('#' + button).addClass('active');
  //   $('.partnership-tab-nav button.showAll').click(function () {
  //     $('.tab').show();
  //   })
  //$('#' + mbbutton).addClass('active');

  document.getElementById("tab-top").scrollIntoView();
}

/// Email Functionality of Contact Form

//function ContactFormSunmission() {
//  var contactformformData = {
//    FirstName: "",
//    LastName: "",
//    WorkEmail: "",
//    WorkPhone: "",
//    CompanyWebsite: "",
//    Country: "",
//    Products: "",
//    Recipient: "",
//    Subject: "",
//    Body: ""
//  };

//  let isValid = true;

//  // Check each input field
//  $('.firstname input, .lastname input, .workemail input, .workphone input, .companywebsite input, .country select').each(function () {
//    // If any input field is empty, set isValid to false
//    if ($(this).val() === null || $(this).val() === undefined || $(this).val() === "") {
//      isValid = false;
//      return false; // Break out of the loop since we already found an empty field
//    }
//  });
//  //// Check if at least one checkbox is checked for products
//  //if ($('.products input:checked').length === 0) {
//  //  isValid = false;
//  //}

//  if (isValid) {
//    var contactformformData = new FormData();

//    contactformformData.append('FirstName', $('.firstname input').val());
//    contactformformData.append('LastName', $('.lastname input').val());
//    contactformformData.append('WorkEmail', $('.workemail input').val());
//    contactformformData.append('WorkPhone', $('.workphone input').val());
//    contactformformData.append('CompanyWebsite', $('.companywebsite input').val());
//    contactformformData.append('Country', $('.country select').val());
//    contactformformData.append('Products', getSelectedCheckboxValues('.products input'));

//    // Perform an AJAX POST request to your controller action
//    $.ajax({
//      type: 'POST',
//      url: "/SubmitContactForm/HandleFormSubmission",
//      //contentType: 'application/json',
//      data: contactformformData,
//      processData: false,
//      contentType: false,
//      success: function (data) {
//        // Handle the success response if needed
//        console.log(data);
//      },
//      error: function (error) {
//        // Handle the error if needed
//        console.error(error);
//      }
//    });
//  }
//}

// Function to get selected checkbox values as a comma-separated string
//function getSelectedCheckboxValues(selector) {
//  var selectedValues = [];
//  $(selector + ':checked').each(function () {
//    selectedValues.push($(this).val());
//  });
//  return selectedValues.join(',');
//}
//$('#contactform input[type=submit]').click(function () {
//  ContactFormSunmission();
//});


// Email Funtionality of Career form //

//function CareerFormSunmission() {
//  var formData = {
//    FirstName: "",
//    LastName: "",
//    Email: "",
//    DepartmentOfInterest: "",
//    Resume: "",
//    Recipient: "",
//    Subject: "",
//    Body: ""
//  };

//  var isValid = true;
//  $('.firstname input, .lastname input, .email input, .departmentofinterest select, .resume input').each(function () {
//    // If any input field is empty, set isValid to false
//    if ($(this).val() === null || $(this).val() === undefined || $(this).val() === "") {
//      isValid = false;
//      return false;
//    }
//  });

//  if (isValid) {
//    var formData = new FormData();

//    formData.append('FirstName', $('.firstname input').val());
//    formData.append('LastName', $('.lastname input').val());
//    formData.append('Email', $('.email input').val());
//    formData.append('DepartmentOfInterest', $('.departmentofinterest select').val());

//    // Get the file input element
//    var resumeInput = $('.resume input')[0];
//    // Check if a file is selected
//    if (resumeInput.files.length > 0) {
//      formData.append('Resume', resumeInput.files[0]);
//    }

//    $.ajax({
//      type: 'POST',
//      url: "/CareerForm/CareerFormSubmission",
//      data: formData,
//      processData: false,
//      contentType: false,
//      success: function (data) {
//        console.log(data);
//      },
//      error: function (error) {

//        console.error(error);
//      }
//    });
//  }
//}

$('#careerform input[type=submit]').click(function () {
  CareerFormSunmission();
});

var hash = window.location.hash;
if (hash) {
  // Scroll to the specified section of the page
  document.querySelector(hash).scrollIntoView();
  // Remove the query parameter from the URL
  history.replaceState(null, null, window.location.href.split('?')[0]);
}



// Add new 

// https://stackoverflow.com/a/36389263
var getTimeout = function () { var e = setTimeout, b = {}; setTimeout = function (a, c) { var d = e(a, c); b[d] = [Date.now(), c]; return d }; return function (a) { return (a = b[a]) ? Math.max(a[1] - Date.now() + a[0], 0) : NaN } }();

// https://curtistimson.co.uk/post/js/default-negative-variables-to-zero-in-javascript/
function sanitisePercentage(i) {
  return Math.min(100, Math.max(0, i));
}

// Slider article
var percentTime;
var tick;
var progressBar = document.querySelector('.swiper-hero-progress');

var mySwiper = new Swiper('.swiper-container', {
  effect: 'slide',
  loop: true,
  speed: 1000,
  slidesPerView: 1,
  spaceBetween: 30,
  grabCursor: true,
  keyboard: {
    enabled: true,
    onlyInViewport: true
  },
  watchOverflow: true,
  watchSlidesProgress: true,
  watchSlidesVisibility: true,
  roundLengths: true,
  autoplay: {
    delay: 7000,
    disableOnInteraction: false
  },
  on: {
    slideChange: function () {
      var swiper = this;
      var defaultSlideDelay = swiper.params.autoplay.delay;
      var currentIndex = swiper.realIndex + 1;
      var currentSlide = swiper.slides[currentIndex];
      var currentSlideDelay = currentSlide.getAttribute('data-swiper-autoplay') || defaultSlideDelay;

      updateSwiperProgressBar(progressBar, currentSlideDelay);
    }
  }
});

function updateSwiperProgressBar(bar, slideDelay) {

  function startProgressBar() {
    resetProgressBar();
    tick = setInterval(progress, 50);
  }

  function progress() {

    var timeLeft = getTimeout(mySwiper.autoplay.timeout);

    if (mySwiper.autoplay.running && !mySwiper.autoplay.paused) {
      percentTime = sanitisePercentage(100 - Math.round(timeLeft / slideDelay * 100));
      bar.style.width = percentTime + '%';

      if (percentTime > 100) {
        resetProgressBar();
      }
    }

    if (mySwiper.autoplay.paused) {
      percentTime = 0;
      bar.style.width = 0;
    }

  }

  function resetProgressBar() {
    percentTime = 0;
    bar.style.width = 0;
    clearInterval(tick);
  }

  startProgressBar();

}

//$(document).ready(function () {
//  function setCookie(cname, cvalue) {
//    document.cookie = cname + "=" + cvalue + ";path=/";
//  }

//  function getCookie(cname) {
//    var name = cname + "=";
//    var decodedCookie = decodeURIComponent(document.cookie);
//    var ca = decodedCookie.split(';');
//    for (var i = 0; i < ca.length; i++) {
//      var c = ca[i];
//      while (c.charAt(0) == ' ') {
//        c = c.substring(1);
//      }
//      if (c.indexOf(name) == 0) {
//        return c.substring(name.length, c.length);
//      }
//    }
//    return "";
//  }

//  function checkCookie() {
//    if (getCookie("cookiepolicyread") != "") {
//      $(".terms").hide();
//    }
//    else {
//      $(".terms").css("display", "block");
//    }
//  }

//  checkCookie();

//  $(".cookie-close").on('click', function (event) {
//    event.preventDefault();
//    setCookie('cookiepolicyread', 'true');
//    $(".terms").hide();
//  });
//});