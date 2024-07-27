jQuery(document).ready(function($) {
  // Countdown to a date in Kolkata timezone
  var YearOne = moment.tz("2024-07-15 12:00", "Asia/Kolkata");
  $('#counter').countdown(YearOne.toDate(), function(event) {
      $(this).html(event.strftime(''
          + '<div class="countdown-period"><span class="countdown-amount">%D</span> days</div>'
          + '<div class="countdown-period"><span class="countdown-amount">%H</span> hours</div>'
          + '<div class="countdown-period"><span class="countdown-amount">%M</span> minutes</div>'
          + '<div class="countdown-period"><span class="countdown-amount">%S</span> seconds</div>'
      ));
  });
});

jQuery(document).ready(function($) {
  // Adjust the speed (0.5 is a typical value for parallax effect)
  var parallaxSpeed = 0.5;

  $(window).on('scroll', function() {
      var scrollPosition = $(this).scrollTop();

      // Parallax effect calculation
      $('.parallax-bg').css('background-position', 'center ' + -(scrollPosition * parallaxSpeed) + 'px');
  });
});

jQuery(document).ready(function($) {
  $('select').niceSelect();
});

jQuery(document).ready(function($) {
  var owl = $('.owl-carousel');

  owl.owlCarousel({
      loop: true,
      autoplay: true,
      autoplayTimeout: 4000,
      autoplayHoverPause: true,
      margin: 10,
      autoHeight: true,
      nav: false,
      dots: true,
      responsive: {
          0: {
              items: 1,
              slideBy: 1
          },
          600: {
              items: 1,
              slideBy: 1
          },
          1000: {
              items: 1,
              slideBy: 1,
          }
      }
  });

  // Listen for the changed event to adjust slide heights
  owl.on('changed.owl.carousel', function(event) {
      //alert('changed');
      var $currentItem = $(event.target).find('.owl-stage-outer .owl-height');
      console.log($currentItem);
      var currentHeight = $currentItem.height();
      console.log(currentHeight);
      $currentItem.height(currentHeight + 70); // Adjust the parent height to include additional 70px
      console.log(currentHeight);
  });
});

document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener('scroll', function() {
      const siteNav = document.getElementById('site-nav');
      const logo = document.querySelector('.custom-logo');
      const navbarHeight = document.querySelector('.navbar').offsetHeight;
  
      if (window.scrollY > 50) {
        siteNav.classList.add('fixed-top');
        // Add padding top to show content behind navbar
        document.body.style.paddingTop = `${navbarHeight}px`;
        // Change logo URL to dark version
        logo.src = logo.src.replace('BottomsUpLogoLight', 'BottomsUpLogoDark');
        logo.srcset = logo.srcset.replace(/BottomsUpLogoLight/g, 'BottomsUpLogoDark');
      } else {
        siteNav.classList.remove('fixed-top');
        // Remove padding top from body
        document.body.style.paddingTop = '0';
        // Revert logo URL to light version
        logo.src = logo.src.replace('BottomsUpLogoDark', 'BottomsUpLogoLight');
        logo.srcset = logo.srcset.replace(/BottomsUpLogoDark/g, 'BottomsUpLogoLight');
      }
    });
  });
  