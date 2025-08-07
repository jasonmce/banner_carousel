/**
 * @file
 * Attaches the behaviors for the Field UI module.
 * 
 * Automagically hit the carousel next button every 5 seconds.
 * Stop the auto-advance when a button is clicked by the user.
 */

(function (Drupal, once) {
  Drupal.behaviors.bannerCarousel = {
    attach: function (context, settings) {

      let carousels = once('banner-carousel', '.simple-carousel', context);
      carousels.forEach(carousel => {
        // Auto-advance the carousel every 5 seconds.
        let nextButtons = once('banner-carousel-next-button', carousel.querySelectorAll(".button--next a"));
        let timerClick = 0;
        let timerList = setInterval(() => {
          nextButtons.forEach(button => {
            timerClick = 1;
            button.click();
            timerClick = 0;
          });
        }, 5000);

        // Stop the auto-advance when a button is clicked by the user.
        let bothButtons = once('banner-carousel-all-buttons', carousel.querySelectorAll(".button--next a, .button--previous a"));
        bothButtons.forEach(button => {
          button.addEventListener("click", function() {
            if (!timerClick) {
              clearInterval(timerList);
            } 
          });
        });
      });


    }
  };
})(Drupal, once);
