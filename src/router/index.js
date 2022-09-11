import {createRouter, createWebHistory} from "vue-router";


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [{
        path: "/",
        name: "app",
        component: () => import("../layouts/Main.vue"),
        children: [
            {
                path: "/",
                name: "home",
                component: () => import("../views/HomeView.vue"),
            },
            {
                path: "/rubric",
                name: "rubric",
                component: () => import("../views/RubricView.vue"),
            },
            {
                path: "/theme",
                name: "theme",
                component: () => import("../views/ThemeView.vue"),
            },
            {
                path: "/news",
                name: "news",
                // route level code-splitting
                // this generates a separate chunk (About.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () => import("../views/NewsView.vue"),
            },
        ],
    }],
});

export default router;
