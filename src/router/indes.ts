import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import Record from '@/views/record/index.vue'
import Home from '@/views/home/index.vue'
import Snacks from '@/views/snacks/index.vue'
import RecordDetail from '@/views/record/detail/index.vue'
import index from '@/views/index.vue'

const routes = [
    {
        path: '/',
        component: index,
        meta: {
            title: '发财麻将',
            showBack: false,
            index: 99,
            tabbarIndex: 0
        },
        children: [
            {
                path: '/',
                component: Home,
                meta: {
                    title: '发财麻将',
                    showBack: false,
                    index: 89,
                    tabbarIndex: 0
                }
            },
            {
                path: '/home',
                component: Home,
                meta: {
                    title: '发财麻将',
                    showBack: false,
                    index: 89,
                    tabbarIndex: 0
                }
            },
            {
                path: '/record',
                component: Record,
                meta: {
                    title: '麻将登记',
                    showBack: false,
                    index: 79,
                    tabbarIndex: 1
                }
            },
            {
                path: '/record/detail',
                component: RecordDetail,
                meta: {
                    title: '麻将登记',
                    showBack: true,
                    index: 78,
                    tabbarIndex: 1
                }
            },
            {
                path: '/snacks',
                component: Snacks,
                meta: {
                    title: '零食',
                    showBack: false,
                    index: 69,
                    tabbarIndex: 2
                }
            }
        ]
    },

]
const router = createRouter({
    history: createWebHistory(),
    routes
});

// 全局前置守卫：为所有路由设置默认 meta 字段
router.beforeEach((to, from, next) => {
    if (!to.meta) {
        to.meta = {
            title: '发财麻将',
            showBack: false
        };
    }

    if (!to.meta.title) {
        to.meta.title = '发财麻将';
    }
    next();
});

export default router