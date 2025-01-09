import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import index from '@/views/index.vue'
import Home from '@/views/home/index.vue'
import Snacks from '@/views/snacks/index.vue'
import User from '@/views/user/index.vue'
import ConfigAccount from '@/views/user/config/account/index.vue'
import RecordAccount from '@/views/record/account/index.vue'

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
                path: '/record/account',
                component: RecordAccount,
                meta: {
                    title: '每日账户结算',
                    showBack: true,
                    index: 88,
                    tabbarIndex: 0
                }
            },
            {
                path: '/snacks',
                component: Snacks,
                meta: {
                    title: '零食',
                    showBack: false,
                    index: 79,
                    tabbarIndex: 1
                }
            },
            {
                path: '/user',
                component: User,
                meta: {
                    title: '个人中心',
                    showBack: false,
                    index: 69,
                    tabbarIndex: 2
                }
            },
            {
                path: '/user/config/account',
                component: ConfigAccount,
                meta: {
                    title: '账号配置',
                    showBack: true,
                    index: 68,
                    tabbarIndex: 2
                },
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
