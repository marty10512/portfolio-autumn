import Vue from "vue";

const tags = {
  template: "#works-tags",
  props: ["tags"]
}

const info = {
  template: "#works-info",
  components: { tags },
  props: ["currentWork"],
  computed: {
    tagsArray() {
      return this.currentWork.skills.split(', ');
    }
  }
}

const arrows = {
  template: "#works-arrows"
}

const dots = {
  template: "#works-dots",
  props: ["works", "currentWork"]
};

const display = {
  template: "#works-display",
  components: { dots, arrows },
  props: ["works", "currentWork", "currentIndex"]
};

new Vue({
  el: "#works-slider-component",
  template: "#my-works",
  components: { display, info },
  data: ({
    works: [],
    currentIndex: 0
  }),
  watch: {
    currentIndex(value) {
      this.makeSliderStop(value)
    }
  },
  computed: {
    currentWork() {
      return this.works[this.currentIndex];
    }
  },
  methods: {
    makeSliderStop(value){
      const worksAmount = this.works.length - 1;
      if (value < 0 ) this.currentIndex = worksAmount;
      if (value > worksAmount )
        this.currentIndex = this.currentIndex = 0;
    },
    makeArrWithRequiredImages(data){
      return data.map(item => {
        const requiredPic = require(`../images/content/${item.photo}`);
        item.photo = requiredPic;
        return item
      })
    },
    handleSlide(direction) {
      switch(direction){
        case "next":
          this.currentIndex++;
          break;
        case "prev":
          this.currentIndex--;
          break;
      }
    }
  },
  created(){
    const data = require('../data/works.json');
    this.works = this.makeArrWithRequiredImages(data);
  }
})