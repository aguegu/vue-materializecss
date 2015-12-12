<template lang="jade">
  div.collection
    a.collection-item(v-for="category in list") {{ category.title }}
  router-view
    pre {{ $data | json}}
</template>

<script>
  import $ from 'webpack-zepto';
  $.ajaxSettings.crossDomain = true;

  export default {
    data () {
      return {
        list: []
      }
    },

    ready () {
      var self = this;
      $.getJSON('http://localhost:8200/categories', function(data) {
        self.$set('list', data);
      });
    }
  };
</script>

<style media="screen" lang="sass">

</style>
