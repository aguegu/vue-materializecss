'use strict';

import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

var router = new Router({
  history: false
});

import ViewHome from './components/views/home.vue'

router.map({
  '/home': {
    component: ViewHome
  }
});

router.redirect({
  '*': '/home'
});

require('./assets/style.scss');

import App from './components/app.vue'
router.start(App, 'template');
