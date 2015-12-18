'use strict';

import Vue from 'vue';
import Router from 'vue-router';

var Foo = Vue.extend({
  template: '<router-view></router-view>'
});

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
  '/css': {
    component: Foo,
    subRoutes: {
      '/color': {
        component: require('./components/views/css/color.vue')
      },
      '/grid': {
        component: require('./components/views/css/grid.vue')
      },
      '/helpers': {
        component: require('./components/views/css/helpers.vue')
      },
      '/css_media': {
        component: require('./components/views/css/css_media.vue')
      },
      '/sass': {
        component: require('./components/views/css/sass.vue')
      },
      '/shadow': {
        component: require('./components/views/css/shadow.vue')
      },
      '/table': {
        component: require('./components/views/css/table.vue')
      },
      '/typography': {
        component: require('./components/views/css/typography.vue')
      }
    }
  },
  '/components': {
    component: Foo,
    subRoutes: {
      '/badges': {
        component: require('./components/views/components/badges.vue')
      },
      '/buttons': {
        component: require('./components/views/components/buttons.vue')
      },
      '/breadcrumbs': {
        component: require('./components/views/components/breadcrumbs.vue')
      },
      '/cards': {
        component: require('./components/views/components/cards.vue')
      },
      '/chips': {
        component: require('./components/views/components/chips.vue')
      },
      '/collections': {
        component: require('./components/views/components/collections.vue')
      },
      '/footer': {
        component: require('./components/views/components/footer.vue')
      },
      '/forms': {
        component: require('./components/views/components/forms.vue')
      },
      '/icons': {
        component: require('./components/views/components/icons.vue')
      },
      '/navbar': {
        component: require('./components/views/components/navbar.vue')
      },
      '/pagination': {
        component: require('./components/views/components/pagination.vue')
      },
      '/preloader': {
        component: require('./components/views/components/preloader.vue')
      }
    }
  },
  '/javascript': {
    component: Foo,
    subRoutes: {
      '/collapsible': {
        component: require('./components/views/javascript/collapsible.vue')
      },
      '/dialogs': {
        component: require('./components/views/javascript/dialogs.vue')
      },
      '/dropdown': {
        component: require('./components/views/javascript/dropdown.vue')
      },
      '/media': {
        component: require('./components/views/javascript/media.vue')
      },
      '/slider_demo': {
        component: require('./components/views/javascript/slider_demo.vue')
      },
      '/modals': {
        component: require('./components/views/javascript/modals.vue')
      },
      '/parallax': {
        component: require('./components/views/javascript/parallax.vue')
      },
      '/parallax_demo': {
        component: require('./components/views/javascript/parallax_demo.vue')
      },
      '/pushpin': {
        component: require('./components/views/javascript/pushpin.vue')
      },
      '/scrollfire': {
        component: require('./components/views/javascript/scrollfire.vue')
      },
      '/scrollspy': {
        component: require('./components/views/javascript/scrollspy.vue')
      },
      '/sidenav': {
        component: require('./components/views/javascript/sidenav.vue')
      },
      '/tabs': {
        component: require('./components/views/javascript/tabs.vue')
      },
      '/transitions': {
        component: require('./components/views/javascript/transitions.vue')
      },
      '/waves': {
        component: require('./components/views/javascript/waves.vue')
      }
    }
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
