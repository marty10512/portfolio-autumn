import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import about from './components/about/about.vue';
import works from './components/works/works.vue';
import comments from './components/comments/comments.vue';

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