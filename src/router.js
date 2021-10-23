import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        //Home Page
        {
            path:"/",
            component: () => import("./components/Home.vue")
        },
        //Department Routes
        {
            path: "/departments",
            component: () => import("./components/Department/Index.vue")
        },
        {
            path: "/departments/add",
            component: () => import("./components/Department/Create.vue")
        },
        {
            path: "/departments/:id",
            component: () => import("./components/Department/Edit.vue")
        },
        {
            path: "/department/:id",
            component: () => import("./components/Department/Show.vue")
        },
        //Employee Routes
        {
            path: "/employees",
            component: () => import("./components/Employee/Index.vue")
        },
        {
            path: "/employees/add",
            component: () => import("./components/Employee/Create.vue")
        },
        {
            path: "/employees/:id",
            component: () => import("./components/Employee/Edit.vue")
        },
        {
            path: "/employee/:id",
            component: () => import("./components/Employee/Show.vue")
        },
    ]
});