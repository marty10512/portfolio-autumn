import Vue from 'vue'
import Flickity from 'vue-flickity'

const review = {
  template: '#review-template',
  props: {
    review: Object
  }
}

new Vue({
  el: '#comments-slider-component',
  template: '#my-comments',
  components: {
    Flickity,
    review
  },
  data: {
    reviews: [],
    flickityOptions: {
      initialIndex: 0,
      prevNextButtons: true,
      pageDots: false,
      wrapAround: false,
      groupCells: true
    },
    currentIndex: 0
  },
  methods: {
    onInit() {
      this.$refs.flickity.on('change', (event) => {
        this.currentIndex = event

        if (!this.$refs.flickity.$flickity.nextButton.isEnabled)
          this.currentIndex = this.reviews.length
      })
    },
    makeArrWithRequiredImages(data) {
      return data.map((item) => {
        const requiredPic = require(`../images/content/${item.avatar}`)
        item.avatar = requiredPic

        return item
      })
    },
    next() {
      this.$refs.flickity.next()
    },

    previous() {
      this.$refs.flickity.previous()
    }
  },
  created() {
    const data = require('../data/comments.json')
    this.reviews = this.makeArrWithRequiredImages(data)
  },
  mounted() {
    const items = document.querySelectorAll('.reviews-slider__item')

    items.forEach((item) => {
      item.style.height = '100%'
    })
  }
})