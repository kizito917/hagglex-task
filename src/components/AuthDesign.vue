<template>
  <v-container-fluid>
    <v-row class="signup-row">
      <v-col cols="0" md="12" class="col-1-auth">
        <div class="text-center col-1-div">
          <VueSlickCarousel v-bind="settings">
            <div class="img-div" v-for="details in sliderData" :key="details.id">
              <v-img
                :src="details.img"
                class="my-3"
              >
              </v-img>
              <h3 class="white--text mb-2 mt-3">{{ details.text }}</h3>
              <p class="white--text text-caption">
                {{ details.caption }}
              </p>
            </div>
          </VueSlickCarousel>
        </div>
      </v-col>
    </v-row>
  </v-container-fluid>
</template>

<script>
  import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  // optional style for arrows & dots
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
  export default {
    name: 'Index',
    components: { VueSlickCarousel },
    data() {
      return {
        sliderData: [
          {
            id: 1,
            img: require('../assets/img/illustration.png'),
            text: 'Trade Globally',
            caption: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd'
          },
          {
            id: 2,
            img: require('../assets/img/illustration.png'),
            text: 'Trade Globally',
            caption: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd'
          },
          {
            id: 3,
            img: require('../assets/img/illustration.png'),
            text: 'Trade Globally',
            caption: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd'
          }
        ],
        settings: {
          "lazyLoad": "ondemand",
          "dots": true,
          "fade": true,
          "arrows": false,
          "infinite": true,
          "speed": 500,
          "slidesToShow": 1,
          "slidesToScroll": 1
        }
      }
    }
  }
</script>

<style scoped>
::v-deep .slick-dots button:before {
  color: #B395FF !important;
}
</style>
