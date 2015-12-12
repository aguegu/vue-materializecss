'use strict';

import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

var router = new Router({
  history: false
});

require('./assets/style.scss');

import App from './components/app.vue'
router.start(App, 'app');
