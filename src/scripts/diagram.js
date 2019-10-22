import Vue from "vue";

const skill = {
  template: "#skill",
  props: ["skillName", "skillPercent"],
  methods: {
    drawColoredCircle() {
      const circle = this.$refs["color-circle"];
      const dashArray = parseInt(
        getComputedStyle(circle).getPropertyValue("stroke-dasharray")
      );
      const percent = (dashArray / 100) * (100 - this.skillPercent);
  
      circle.style.strokeDashoffset = percent;
    }
  },
  mounted() {
    this.drawColoredCircle();
  }
};

const diagramRow = {
  template: "#diagram-row",
  components: { skill },
  props: ["skill"]
};

new Vue({
  el: "#diagram-component",
  template: "#diagram",
  data: () => ({
    skills: []
  }),
  components: { diagramRow },
  created() {
    this.skills = require("../data/diagram.json");
  }
});