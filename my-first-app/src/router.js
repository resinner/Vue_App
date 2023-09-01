import Foo from "./pages/Foo";
import Bar from "./pages/Bar";
import VueRouter from "vue-router";
import HomePage from "./pages/HomePage"
import ApartmentPage from './pages/Apartment'

const routes = [
  {
    path: "/foo",
    component: Foo,
  },
  {
    path: "/bar",
    component: Bar,
  },
  {
    path: "/",
    component: HomePage,
    name: "homepage",
  },
  {
    path: "/apartment",
    component: ApartmentPage,
    name: "apartment",
  },
];

const router = new VueRouter({
    routes,
    mode: 'history'
});

export default router;
