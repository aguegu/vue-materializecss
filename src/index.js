'use strict';

import Vue from 'vue';
import Router from 'vue-router';

var FullScreen = Vue.extend({
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
    component: FullScreen,
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


var $ = window.jQuery = require('jquery');
// require('materialize-css/bin/materialize.js');

require('jquery-easing');

require("materialize-css/js/animation.js");
require("velocity-animate");

require("materialize-css/js/jquery.hammer.js");
require("imports?$=jquery!materialize-css/js/global.js");
// require("materialize-css/js/collapsible.js");
require("./javascripts/collapsible.js");
// require("materialize-css/js/dropdown.js");
require("./javascripts/dropdown.js");
require("materialize-css/js/leanModal.js");
// require("materialize-css/js/materialbox.js");
require("./javascripts/materialbox.js");
require("materialize-css/js/parallax.js");
require("materialize-css/js/tabs.js");
require("./javascripts/tabs.js");
// require("materialize-css/js/tooltip.js");
require("./javascripts/tooltip.js");
require("materialize-css/js/waves.js");
// require("materialize-css/js/toasts.js");

require("materialize-css/js/sideNav.js");
require("materialize-css/js/scrollspy.js");
require("materialize-css/js/forms.js");
require("materialize-css/js/slider.js");
require("materialize-css/js/cards.js");
require("materialize-css/js/chips.js");
require("./javascripts/pushpin.js");
require("materialize-css/js/buttons.js");
// require("materialize-css/js/transitions.js");
// require("materialize-css/js/scrollFire.js");

require('imports?define=>false!pickadate/lib/picker.js');
require('imports?define=>false!pickadate/lib/picker.date.js');

// require("materialize-css/js/date_picker/picker.js");
// require("materialize-css/js/date_picker/picker.date.js");

require("materialize-css/js/character_counter.js");

require('prismjs/themes/prism.css');

require('./assets/style.scss');

// import App from './components/app.vue'
router.start(FullScreen, 'template');
