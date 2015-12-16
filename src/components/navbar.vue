<template lang="jade">
header
  nav.top-nav(v-if="$route.path.indexOf('/css/') === 0 || $route.path.indexOf('/components/') === 0")
    .container
      .nav-wrapper
        a.page-title {{ $route.path.split('/')[2] }}
  .container
    a.button-collapse.top-nav.hide-on-large-only(href='#', data-activates='nav-mobile', v-bind:class="{'full': $route.path.indexOf('/css/') === 0}")
      i.mdi-navigation-menu
  ul#nav-mobile.side-nav.fixed
    li(class="logo")
      a#logo-container.brand-logo(v-link="{path: '/home'}")
        img(src="~materialize-css/res/materialize.svg")
    li(class="search")
      div.search-wrapper.card
        input(id="search")
        i.material-icons search
        div.search-results
    li.bold(v-link="{path: '/about', activeClass: 'active'}")
      a.waves-effect.waves-teal(v-link="{path: '/about'}") About
    li.bold(v-link="{path: '/getting_started', activeClass: 'active'}")
      a.waves-effect.waves-teal(v-link="{path: '/getting_started'}") Getting Started

    li.no-padding
      ul.collapsible.collapsible-accordion
        li.bold
          a.collapsible-header.waves-effect.waves-teal(v-link="{path: '/css', activeClass: 'active'}")
            | CSS
          .collapsible-body
            ul
              li(v-link="{path: '/css/color', activeClass: 'active'}")
                a(v-link="{path: '/css/color'}") Color
              li(v-link="{path: '/css/grid', activeClass: 'active'}")
                a(v-link="{path: '/css/grid'}") Grid
              li(v-link="{path: '/css/helpers', activeClass: 'active'}")
                a(v-link="{path: '/css/helpers'}") Helpers
              li(v-link="{path: '/css/css_media', activeClass: 'active'}")
                a(v-link="{path: '/css/css_media'}") Media
              li(v-link="{path: '/css/sass', activeClass: 'active'}")
                a(v-link="{path: '/css/sass'}") Sass
              li(v-link="{path: '/css/shadow', activeClass: 'active'}")
                a(v-link="{path: '/css/shadow'}") Shadow
              li(v-link="{path: '/css/table', activeClass: 'active'}")
                a(v-link="{path: '/css/table'}") Table
              li(v-link="{path: '/css/typography', activeClass: 'active'}")
                a(v-link="{path: '/css/typography'}") Typography
        li.bold
          a.collapsible-header.waves-effect.waves-teal(v-link="{path: '/components', activeClass: 'active'}")
            | Components
          .collapsible-body
            ul
              li(v-link="{path: '/components/badges', activeClass: 'active'}")
                a(v-link="{path: '/components/badges'}") Badges
              li(v-link="{path: '/components/buttons', activeClass: 'active'}")
                a(v-link="{path: '/components/buttons'}") Buttons
              li(v-link="{path: '/components/breadcrumbs', activeClass: 'active'}")
                a(v-link="{path: '/components/breadcrumbs'}") Breadcrumbs
              li(v-link="{path: '/components/cards', activeClass: 'active'}")
                a(v-link="{path: '/components/cards'}") Cards
              li(v-link="{path: '/components/chips', activeClass: 'active'}")
                a(v-link="{path: '/components/chips'}") Chips
              li(v-link="{path: '/components/collections', activeClass: 'active'}")
                a(v-link="{path: '/components/collections'}") Collections
              li(v-link="{path: '/components/footer', activeClass: 'active'}")
                a(v-link="{path: '/components/footer'}") Footer
              li(v-link="{path: '/components/forms', activeClass: 'active'}")
                a(v-link="{path: '/components/forms'}") Forms
              li(v-link="{path: '/components/icons', activeClass: 'active'}")
                a(v-link="{path: '/components/icons'}") Icons
              li(v-link="{path: '/components/navbar', activeClass: 'active'}")
                a(v-link="{path: '/components/navbar'}") Navbar
              li(v-link="{path: '/components/pagination', activeClass: 'active'}")
                a(v-link="{path: '/components/pagination'}") Pagination
              li(v-link="{path: '/components/preloader', activeClass: 'active'}")
                a(v-link="{path: '/components/preloader'}") Preloader
        li.bold
          a.collapsible-header.waves-effect.waves-teal(v-link="{path: '/javascript', activeClass: 'active'}")
            | Javascript
          .collapsible-body
            ul
              li(v-link="{path: '/javascript/collapsible', activeClass: 'active'}")
                a(v-link="{path: '/javascript/collapsible'}") Collapsible
              li(v-link="{path: '/javascript/dialogs', activeClass: 'active'}")
                a(v-link="{path: '/javascript/dialogs'}") Dialogs
              li(v-link="{path: '/javascript/dropdown', activeClass: 'active'}")
                a(v-link="{path: '/javascript/dropdown'}") Dropdown
              li(v-link="{path: '/javascript/media', activeClass: 'active'}")
                a(v-link="{path: '/javascript/media'}") Media
              li(v-link="{path: '/javascript/modals', activeClass: 'active'}")
                a(v-link="{path: '/javascript/modals'}") Modals
              li(v-link="{path: '/javascript/parallax', activeClass: 'active'}")
                a(v-link="{path: '/javascript/parallax'}") Parallax
              li(v-link="{path: '/javascript/pushpin', activeClass: 'active'}")
                a(v-link="{path: '/javascript/pushpin'}") Pushpin
              li(v-link="{path: '/javascript/scrollfire', activeClass: 'active'}")
                a(v-link="{path: '/javascript/scrollfire'}") ScrollFire
              li(v-link="{path: '/javascript/scrollspy', activeClass: 'active'}")
                a(v-link="{path: '/javascript/scrollspy'}") Scrollspy
              li(v-link="{path: '/javascript/sidenav', activeClass: 'active'}")
                a(v-link="{path: '/javascript/sidenav'}") SideNav
              li(v-link="{path: '/javascript/tabs', activeClass: 'active'}")
                a(v-link="{path: '/javascript/tabs'}") Tabs
              li(v-link="{path: '/javascript/transitions', activeClass: 'active'}")
                a(v-link="{path: '/javascript/transitions'}") Transitions
              li(v-link="{path: '/javascript/waves', activeClass: 'active'}")
                a(v-link="{path: '/javascript/waves'}") Waves
</template>
