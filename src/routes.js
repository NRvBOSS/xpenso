import { createRouter, createWebHistory } from 'vue-router'

import welcomeComponent from './views/welcomePage.vue'
import mainComponent from './views/main.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: welcomeComponent },
        { path: '/main', component: mainComponent },
    ]
})

export default router;
