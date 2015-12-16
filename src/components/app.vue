<template lang="jade">
navbar
router-view
foot
</template>

<script>
    // var $ = require('../materialize.js');

  import Navbar from './navbar.vue'
  import Foot from './footer.vue'

  export default {
    components: {
      Navbar,
      Foot
    },

    ready () {

    }
  }

  var $ = window.jQuery = require('jquery');
  // require('materialize-css/bin/materialize.js');

  require('jquery-easing');

  require("materialize-css/js/animation.js");
  require("velocity-animate");

  require("materialize-css/js/jquery.hammer.js");
  require("imports?$=jquery!materialize-css/js/global.js");
  require("materialize-css/js/collapsible.js");
  require("materialize-css/js/dropdown.js");
  require("materialize-css/js/leanModal.js");
  require("materialize-css/js/materialbox.js");
  require("materialize-css/js/parallax.js");
  require("materialize-css/js/tabs.js");
  require("materialize-css/js/tooltip.js");
  require("materialize-css/js/waves.js");
  require("materialize-css/js/toasts.js");

  require("materialize-css/js/sideNav.js");
  require("materialize-css/js/scrollspy.js");
  require("materialize-css/js/forms.js");
  require("materialize-css/js/slider.js");
  require("materialize-css/js/cards.js");
  require("materialize-css/js/chips.js");
  require("../javascripts/pushpin.js");
  require("materialize-css/js/buttons.js");
  require("materialize-css/js/transitions.js");
  require("materialize-css/js/scrollFire.js");

  require('imports?define=>false!pickadate/lib/picker.js');
  require('imports?define=>false!pickadate/lib/picker.date.js');

  // require("materialize-css/js/date_picker/picker.js");
  // require("materialize-css/js/date_picker/picker.date.js");

  require("materialize-css/js/character_counter.js");



  $(function(){


    // // convert rgb to hex value string
    // function rgb2hex(rgb) {
    //   if (/^#[0-9A-F]{6}$/i.test(rgb)) { return rgb; }
    //
    //   rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    //
    //   if (rgb === null) { return "N/A"; }
    //
    //   function hex(x) {
    //       return ("0" + parseInt(x).toString(16)).slice(-2);
    //   }
    //
    //   return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
    // }
    //
    // $('.dynamic-color .col').each(function () {
    //   $(this).children().each(function () {
    //     var color = $(this).css('background-color'),
    //         classes = $(this).attr('class');
    //     $(this).html(rgb2hex(color) + " " + classes);
    //     if (classes.indexOf("darken") >= 0 || $(this).hasClass('black')) {
    //       $(this).css('color', 'rgba(255,255,255,.9');
    //     }
    //   });
    // });

    //
    // // Floating-Fixed table of contents
    // if ($('nav').length) {
    //   $('.toc-wrapper').pushpin({ top: $('nav').height() });
    // }
    // else if ($('#index-banner').length) {
    //   $('.toc-wrapper').pushpin({ top: $('#index-banner').height() });
    // }
    // else {
    //   $('.toc-wrapper').pushpin({ top: 0 });
    // }



    // // BuySellAds Detection
    // var $bsa = $(".buysellads"),
    //     $timesToCheck = 3;
    // function checkForChanges() {
    //     if (!$bsa.find('#carbonads').length) {
    //       $timesToCheck -= 1;
    //       if ($timesToCheck >= 0) {
    //         setTimeout(checkForChanges, 500);
    //       }
    //       else {
    //         var donateAd = $('<div id="carbonads"><span><a class="carbon-text" href="#!" onclick="document.getElementById(\'paypal-donate\').submit();"><img src="images/donate.png" /> Help support us by turning off adblock. If you still prefer to keep adblock on for this page but still want to support us, feel free to donate. Any little bit helps.</a></form></span></div>');
    //
    //         $bsa.append(donateAd);
    //       }
    //     }
    //
    // }
    // checkForChanges();

    // // Github Latest Commit
    // var window_width = $(window).width();
    // if ($('.github-commit').length) { // Checks if widget div exists (Index only)
    //   $.ajax({
    //     url: "https://api.github.com/repos/dogfalo/materialize/commits/master",
    //     dataType: "json",
    //     success: function (data) {
    //       var sha = data.sha,
    //           date = jQuery.timeago(data.commit.author.date);
    //       if (window_width < 1120) {
    //         sha = sha.substring(0,7);
    //       }
    //       $('.github-commit').find('.date').html(date);
    //       $('.github-commit').find('.sha').html(sha).attr('href', data.html_url);
    //     }
    //   });
    // }

//    Toggle Containers on page
    var toggleContainersButton = $('#container-toggle-button');
    toggleContainersButton.click(function(){
      $('body .browser-window .container, .had-container').each(function(){
        $(this).toggleClass('had-container');
        $(this).toggleClass('container');
        if ($(this).hasClass('container')) {
          toggleContainersButton.text("Turn off Containers");
        }
        else {
          toggleContainersButton.text("Turn on Containers");
        }
      });
    });

    // Detect touch screen and enable scrollbar if necessary
    function is_touch_device() {
      try {
        document.createEvent("TouchEvent");
        return true;
      } catch (e) {
        return false;
      }
    }
    if (is_touch_device()) {
      $('#nav-mobile').css({ overflow: 'auto'});
    }

    // Set checkbox on forms.html to indeterminate
    var indeterminateCheckbox = document.getElementById('indeterminate-checkbox');
    if (indeterminateCheckbox !== null)
      indeterminateCheckbox.indeterminate = true;


    // Plugin initialization
    // $('.slider').slider({full_width: true});
    $('.parallax').parallax();
    $('.modal-trigger').leanModal();
    // $('.scrollspy').scrollSpy();
    $('.button-collapse').sideNav({'edge': 'left'});
    // $('.datepicker').pickadate({selectYears: 20});
    // $('select').not('.disabled').material_select();

  }); // end of document ready

</script>
