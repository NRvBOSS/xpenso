import { createRouter, createWebHistory } from 'vue-router'

import welcomeComponent from './components/welcomePage.vue'
import mainComponent from './components/main.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: welcomeComponent },
        { path: '/main', component: mainComponent },
    ]
})

export default router;
