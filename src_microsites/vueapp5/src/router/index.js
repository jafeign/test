import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routers = [
    {
        path: '/index',
        component: () => import('@/views/index'),
    },
    {
        path: '*',
        redirect: 'index',
    }
]

const router = new VueRouter({
    mode: "history",
    routes: routers
});

export default router;
