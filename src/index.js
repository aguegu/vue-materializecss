'use strict';

import Vue from 'vue';
import Router from 'vue-router';

var Basic = Vue.extend({
  template: '<router-view></router-view>'
});

var Main = Vue.extend({
  template: '<navbar></navbar><router-view></router-view><footer></footer>',
  components: {
    Navbar: require('./components/navbar.vue'),
    Foot: require('./components/footer.vue')
  },
});

Vue.use(Router);

var router = new Router({
  history: false
});

require('./materialize');

router.map({
  '/': {
    component: Main,
    subRoutes: {
      '/home': {
        component: require('./components/views/home.vue')
      },
      '/about': {
        component: require('./components/views/about.vue')
      },
      '/getting_started': {
        component: require('./components/views/getting_started.vue')
      },
      '/mobile': {
        component: require('./components/views/mobile.vue')
      },
      '/showcase': {
        component: require('./components/views/showcase.vue')
      },
    }
  },

  '/css': {
    component: Main,
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
      '/media': {
        component: require('./components/views/css/media.vue')
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
    component: Main,
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
    component: Main,
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
      '/modals': {
        component: require('./components/views/javascript/modals.vue')
      },
      '/parallax': {
        component: require('./components/views/javascript/parallax.vue')
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
  '/demo': {
    component: Basic,
    subRoutes: {
      '/parallax': {
        component: require('./components/views/demo/parallax.vue')
      },
      '/slider': {
        component: require('./components/views/demo/slider.vue')
      },
    }
  }
});

router.redirect({
  '*': '/home'
});

router.beforeEach(function () {
  window.scrollTo(0, 0)
});



router.start(Basic, 'template');
