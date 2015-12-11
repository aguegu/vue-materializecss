'use strict';

import $ from 'webpack-zepto';
$.ajaxSettings.crossDomain = true;

(() => {
  $.getJSON('http://127.0.0.1:8200/categories', function(data) {
    console.log(data);
  });
})();
