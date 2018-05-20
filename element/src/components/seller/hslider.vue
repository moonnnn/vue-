<template lang="html">
    <article class="">
        <Slider :items="items" class="slider"/>
    </article>
</template>

<script>
import Slider from "../slider/slider.vue";
export default {
  components: {
    Slider
  },
  data() {
    return {
      items: [
        {
          src:
            "//img12.360buyimg.com/jrpmobile/jfs/t13744/11/2508939408/43213/58bfe502/5a421ff3N52d0a474.jpg?width=750&height=320"
        },
        {
          src:
            "//img12.360buyimg.com/jrpmobile/jfs/t16138/325/817844900/36681/5d874455/5a422029Ncd678ea3.jpg?width=750&height=320"
        },
        {
          src:
            "//img12.360buyimg.com/jrpmobile/jfs/t13465/324/2563794460/43029/3ffca963/5a421f83Ne8089231.jpg?width=750&height=320"
        }
      ]
    };
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
.slider
  img
  width: 100%
</style>
