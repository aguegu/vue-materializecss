'use strict';

import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

var router = new Router({
  history: false
});

router.map({
  '/home': {
    component: require('./components/views/home.vue')
  },
  '/about': {
    component: require('./components/views/about.vue')
  },
  '/getting_started': {
    component: require('./components/views/getting_started.vue')
  },
  '/css/color': {
    component: require('./components/views/css/color.vue')
  },
  '/css/grid': {
    component: require('./components/views/css/grid.vue')
  },
  '/css/helpers': {
    component: require('./components/views/css/helpers.vue')
  },
  '/css/css_media': {
    component: require('./components/views/css/css_media.vue')
  },
  '/css/sass': {
    component: require('./components/views/css/sass.vue')
  },
  '/css/shadow': {
    component: require('./components/views/css/shadow.vue')
  },
  '/css/table': {
    component: require('./components/views/css/table.vue')
  },
  '/css/typography': {
    component: require('./components/views/css/typography.vue')
  },
});

router.redirect({
  '*': '/home'
});

router.beforeEach(function () {
  window.scrollTo(0, 0)
});

require('./assets/style.scss');

import App from './components/app.vue'
router.start(App, 'template');
