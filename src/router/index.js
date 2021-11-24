import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import People from '../views/People.vue'
import Contact from '../views/Contact.vue'
import Publications from '../views/Publications.vue'
import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/people',
        name: 'People',
        component: People
    },
    {
        path: '/research',
        name: 'Research'
    },
    {
        path: '/contact',
        name: 'Contact',
        component: Contact
    },
    {
        path: '/publication',
        name: 'Publications',
        component: Publications
    }
]
const router = new VueRouter({
    mode: 'history',
    routes
})

export default router