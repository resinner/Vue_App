import Foo from "./pages/Foo";
import Bar from "./pages/Bar";
import VueRouter from "vue-router";
import HomePage from "./pages/HomePage"
import ApartmentPage from './pages/Apartment'
import ErrorPage from './pages/ErrorPage'

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
    path: "/apartments/:id",
    component: ApartmentPage,
    name: "apartment",
  },
  {
    path: "*",
    component: ErrorPage,
    name: "error-page",
  },
];

const router = new VueRouter({
    routes,
    mode: 'history'
});

export default router;
