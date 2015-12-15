<template lang="jade">
header
  if no_nav == false
    nav.top-nav
      .container
        .nav-wrapper
          a.page-title #{page}
  .container
    a.button-collapse.top-nav(href='#', data-activates='nav-mobile', class=(no_nav == false ? "full hide-on-large-only" : "" + "waves-effect waves-light circle hide-on-large-only"))
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
          a.collapsible-header(class=(page == "Sass" || page == "Typography" || page == "Color" || page == "Shadow" || page == "Grid" || page == "Media CSS" || page == "Table" || page == "Helpers" ? "active" : "")+" waves-effect waves-teal")
            | CSS
          .collapsible-body
            ul
              li(v-link="{path: '/color', activeClass: 'active'}")
                a(v-link="{path: '/color'}") Color
              li(v-link="{path: '/gird', activeClass: 'active'}")
                a(v-link="{path: '/grid'}") Grid
              li(v-link="{path: '/helpers', activeClass: 'active'}")
                a(v-link="{path: '/helpers'}") Helpers
              li(v-link="{path: '/css_media', activeClass: 'active'}")
                a(v-link="{path: '/css_media'}") Media
              li(v-link="{path: '/sass', activeClass: 'active'}")
                a(v-link="{path: '/sass'}") Sass
              li(v-link="{path: '/shadow', activeClass: 'active'}")
                a(v-link="{path: '/shadow'}") Shadow
              li(v-link="{path: '/table', activeClass: 'active'}")
                a(v-link="{path: '/table'}") Table
              li(v-link="{path: '/typography', activeClass: 'active'}")
                a(v-link="{path: '/typography'}") Typography
</template>
