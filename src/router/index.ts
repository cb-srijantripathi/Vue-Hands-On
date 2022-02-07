import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/Home.vue';
import EditMember from '../components/EditMember.vue';
import InviteMember from '../components/InviteMember.vue';

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
    component: EditMember,
  },
  {
    path: '/invite',
    name: 'InviteMemberPage',
    component: InviteMember,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
