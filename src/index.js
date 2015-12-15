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
    component: require('./components/views/color.vue')
  },
  '/css/grid': {
    component: require('./components/views/grid.vue')
  },
  '/css/helpers': {
    component: require('./components/views/helpers.vue')
  },
  '/css/css_media': {
    component: require('./components/views/css_media.vue')
  },
  '/css/sass': {
    component: require('./components/views/sass.vue')
  },
  '/css/shadow': {
    component: require('./components/views/shadow.vue')
  },
  '/css/table': {
    component: require('./components/views/table.vue')
  },
  '/css/typography': {
    component: require('./components/views/typography.vue')
  },
});

router.redirect({
  '*': '/home'
});

require('./assets/style.scss');

import App from './components/app.vue'
router.start(App, 'template');
