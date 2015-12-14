<template lang="jade">
main
  #index-banner.section.no-pad-bot
    .container
      h1.header.center-on-small-only Materialize
      .cow.center
        h4.header.col.s12.light.center A modern responsive front-end framework based on Material Design
      .row.center
        a#download-button.btn-large.waves-effect.waves-light(href="http://materializecss.com/getting-started.html") Get Started
      .row.center
        a.red-text.text-lighten-4(href="https://github.com/Dogfalo/materialize") alpha release v0.97.3
  .container
    .section
      .row
        .col.s12.m8.offset-m2
          br
          img#responsive-img(src="http://materializecss.com/images/responsive.png")
      .row
        h3.col.s12.light.center.header Materialize simplifies life for developers and the users they serve.
      .row
        .col.s12.m4
          .center.promo
            i.material-icons flash_on
            p.promo-caption
              | Speeds up development
            p.light.center
              | We did most of the heavy lifting for you to provide a default stylings that incorporate our custom components. Additionally, we refined animations and transitions to provide a smoother experience for developers.
        .col.s12.m4
          .center.promo
            i.material-icons group
            p.promo-caption
              | User Experience Focused
            p.light.center
              | By utilizing elements and principles of Material Design, we were able to create a framework that incorporates components and animations that provide more feedback to users. Additionally, a single underlying responsive system across all platforms allow for a more unified user experience.
        .col.s12.m4
          .center.promo
            i.material-icons settings
            p.promo-caption
              | Easy to work with
            p.light.center
              | We have provided detailed documentation as well as specific code examples to help new users get started. We are also always open to feedback and can answer any questions a user may have about Materialize.
    .divider
    .section
      .row.center
        h3.light.header Materialize Showcase
        p.col-s8.offset-s2.caption
          | Checkout what people are creating with Materialize. Get inspired by these beautiful sites and you can even submit your own website to be showcased here.
        a.btn-large.waves-effect.waves-light(href="http://materializecss.com/showcase.html") Explore our Showcase
</template>
