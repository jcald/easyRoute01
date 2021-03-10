import Router from "svelte-easyroute";
import Page1 from "./Page1.svelte";
import Page2 from "./Page2.svelte";

const router = new Router({
  mode: "hash",
  routes: [
    {
      path: "/",
      component: Page1
    },
    {
      path: "/page-two",
      component: Page2,
      beforeEnter: (to, from, next) => {
        console.log(to);
        next();
      }
    }
  ]
});

export default router;
