import {createRouter,createWebHashHistory,createWebHistory} from 'vue-router'
import Record from '@/views/record/index.vue'
import Home from '@/views/home/index.vue'
import Snacks from '@/views/snacks/index.vue'
import RecordDetail from '@/views/record/detail/index.vue'


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/home',
            component: Home
        },
        {
            path: '/record',
            component: Record
        },
        {
            path: '/record/detail',
            component: RecordDetail
        },
        {
            path: '/snacks',
            component: Snacks
        }
    ]
})

export default router