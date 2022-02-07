import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/Home.vue';
import EditMemberPage from '../components/EditMemberPage.vue';
import InviteMemberPage from '../components/InviteMemberPage.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/edit/:email',
    name: 'EditMemberData',
    component: EditMemberPage,
  },
  {
    path: '/invite',
    name: 'InviteMemberPage',
    component: InviteMemberPage,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
