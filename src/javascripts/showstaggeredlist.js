'use strict';

let $ = require('jquery');

module.exports = (selector) => {
  var time = 0;
  $(selector).find('li').velocity(
    { translateX: "-100px"},
    { duration: 0 }
  );

  $(selector).find('li').each(function() {
    $(this).velocity(
      { opacity: "1", translateX: "0"},
      { duration: 800, delay: time, easing: [60, 10] });
    time += 120;
  });
};
