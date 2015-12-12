<template>
  <div class="collection">
    <a v-for="category in list" class="collection-item">
      {{ category.title }}
    </a>
  </div>
  <router-view></router-view>
  <!-- <pre>{{ $data | json }}</pre> -->
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
