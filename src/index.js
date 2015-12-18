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
  '/components/badges': {
    component: require('./components/views/components/badges.vue')
  },
  '/components/buttons': {
    component: require('./components/views/components/buttons.vue')
  },
  '/components/breadcrumbs': {
    component: require('./components/views/components/breadcrumbs.vue')
  },
  '/components/cards': {
    component: require('./components/views/components/cards.vue')
  },
  '/components/chips': {
    component: require('./components/views/components/chips.vue')
  },
  '/components/collections': {
    component: require('./components/views/components/collections.vue')
  },
  '/components/footer': {
    component: require('./components/views/components/footer.vue')
  },
  '/components/forms': {
    component: require('./components/views/components/forms.vue')
  },
  '/components/icons': {
    component: require('./components/views/components/icons.vue')
  },
  '/components/navbar': {
    component: require('./components/views/components/navbar.vue')
  },
  '/components/pagination': {
    component: require('./components/views/components/pagination.vue')
  },
  '/components/preloader': {
    component: require('./components/views/components/preloader.vue')
  },
  '/javascript/collapsible': {
    component: require('./components/views/javascript/collapsible.vue')
  },
  '/javascript/dialogs': {
    component: require('./components/views/javascript/dialogs.vue')
  },
  '/javascript/dropdown': {
    component: require('./components/views/javascript/dropdown.vue')
  },
  '/javascript/media': {
    component: require('./components/views/javascript/media.vue')
  },
  '/javascript/slider_demo': {
    component: require('./components/views/javascript/slider_demo.vue')
  },
  '/javascript/modals': {
    component: require('./components/views/javascript/modals.vue')
  },
  '/javascript/parallax': {
    component: require('./components/views/javascript/parallax.vue')
  },
  '/javascript/parallax_demo': {
    component: require('./components/views/javascript/parallax_demo.vue')
  },
  '/javascript/pushpin': {
    component: require('./components/views/javascript/pushpin.vue')
  },
  '/javascript/scrollfire': {
    component: require('./components/views/javascript/scrollfire.vue')
  },
  '/javascript/scrollspy': {
    component: require('./components/views/javascript/scrollspy.vue')
  },
  '/javascript/sidenav': {
    component: require('./components/views/javascript/sidenav.vue')
  },
  '/javascript/tabs': {
    component: require('./components/views/javascript/tabs.vue')
  },
  '/javascript/transitions': {
    component: require('./components/views/javascript/transitions.vue')
  },
  '/javascript/waves': {
    component: require('./components/views/javascript/waves.vue')
  },

  '/mobile': {
    component: require('./components/views/mobile.vue')
  },

  '/showcase': {
    component: require('./components/views/showcase.vue')
  }

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
