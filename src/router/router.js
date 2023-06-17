import {createRouter, createWebHistory} from 'vue-router'
import main from "@/pages/main.vue";
import selectedMovie from "@/pages/selectedMovie.vue";
import premiere from "@/pages/premiere.vue"
import releases from "@/pages/releases.vue"

const routes = [
    {
        path:'/',
        component: main
    },
    {
        path:'/movie/:id',
        component: selectedMovie
    },
    {
        path:'/premiere',
        component: premiere
    },
    {
        path:'/releases',
        component: releases
    },
]

const router = createRouter({
    routes,
    mode: 'history',
    history: createWebHistory('/'),
})

export default router