export default [
  {
    path: "/",
    component: () => import("../components/about/about.vue")
  },
  {
    path: "/works",
    component: () => import("../components/works/works.vue")
  },
  {
    path: "/comments",
    component: () => import("../components/comments/comments.vue")
  },
  {
    path: "/login",
    component: () => import("../components/login/login.vue"),
    meta: {
      public: true
    }
  }
];