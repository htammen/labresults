import Vue from "vue";
import Router from "vue-router";
import Lang from "@/Lang.vue";
import { Trans } from "@/plugins/Translations";

Vue.use(Router);

function load (component) {
  // '@' is aliased to src/components
  return () => import(/* webpackChunkName: "[request]" */ `./views/${component}.vue`)
}

export default new Router({
  routes: [
    {
      path: "/:lang",
      component: Lang,
      beforeRouteUpdate: Trans.routeMiddleware,
      beforeEnter: Trans.routeMiddleware,
      children: [
        {
          path: "",
          name: "Home",
          component: load("Home")
        },
        {
          path: "about",
          name: "About",
          component: load("About")
        },
        {
          path: '*',
          component: load("404")
        }
      ]
    },
    {
      // Redirect user to supported lang version.
      path: '*',
      redirect (to) {
        return Trans.getUserSupportedLang()
      }
    }
  
    /*
    {
      path: "/",
      name: "home",
      component: load("Home")
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: load("About")
    }
    */
]
});
