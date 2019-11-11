import Vue from "vue";
import VueRouter from "vue-router"

Vue.use(VueRouter);

import about from './components/pages/aboutAdmin.vue';
import works from './components/pages/worksAdmin.vue';
import comments from './components/pages/commentsAdmin.vue';

const routes = [
  {
    path: '/',
    component: about
  },
  {
    path: '/works',
    component: works
  },
  {
    path: '/comments',
    component: comments
  }
];

export default new VueRouter({ routes });