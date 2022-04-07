import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import People from '../views/People.vue'
import Member from '../views/Member'
import Contact from '../views/Contact.vue'
import Publications from '../views/Publications.vue'
import Research from '../views/Research.vue'
import Courses from '../views/Courses.vue'
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
        path: '/people/:id',
        name: 'Member',
        component: Member
    },
    {
        path: '/research',
        name: 'Research',
        component: Research
    },
    {
        path: '/courses',
        name: 'Courses',
        component: Courses
    },
    {
        path: '/contact',
        name: 'Contact',
        component: Contact
    },
    {
        path: '/publications',
        name: 'Publications',
        component: Publications
    }
]
const router = new VueRouter({
    mode: 'history',
    routes
})

export default router