'use strict';

import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

var router = new Router({
  history: false
});

import ViewHome from './components/views/home.vue'
import ViewAbout from './components/views/about.vue'
import ViewGettingStarted from './components/views/getting_started.vue'

import ViewColor from './components/views/color.vue'
import ViewGrid from './components/views/grid.vue'
import ViewHelpers from './components/views/helpers.vue'

router.map({
  '/home': {
    component: ViewHome
  },
  '/about': {
    component: ViewAbout
  },
  '/getting_started': {
    component: ViewGettingStarted
  },
  '/color': {
    component: ViewColor
  },
  '/grid': {
    component: ViewGrid
  },
  '/helpers': {
    component: ViewHelpers
  },
});

router.redirect({
  '*': '/home'
});

require('./assets/style.scss');

import App from './components/app.vue'
router.start(App, 'template');
