<template lang="jade">
header

  nav.top-nav(v-if="$route.path.indexOf('/css/') === 0")
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
</template>
