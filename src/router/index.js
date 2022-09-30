import { createRouter, createWebHistory } from 'vue-router'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useAuth } from "../stores/auth.store";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '',
            name: 'home',
            component: () => import('../views/home/main.vue'),
            redirect: { name: 'home.dashboard' },
            meta: {
                requiresAuth: true
            },
            children: [
                {
                    path: 'dashboard',
                    name: 'home.dashboard',
                    component: () => import('../views/dashboard/main.vue'),
                    meta: {
                        requiresAuth: true
                    }
                },
                {
                    path: 'upload-data',
                    name: 'home.uploadData',
                    component: () => import('../views/uploadData/main.vue'),
                    meta: {
                        requiresAuth: true
                    }
                }
            ]
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('../views/auth/login.vue')
        },
        {
            path: '/register',
            name: 'register',
            component: () => import('../views/auth/register.vue')
        }
    ]
})

const getCurrentUser = () => {
    const useAuthStore = useAuth();
    return new Promise((resolve, reject) => {
        const removeListener = onAuthStateChanged(
            getAuth(),
            (user) => {
                removeListener();
                useAuthStore.storeUser(user);
                resolve(user);
            },
            reject
        )
    });
}

router.beforeEach(async (to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (await getCurrentUser()) {
            next()
        } else {
            next({ name: 'login' })
        }
    } else {
        next()
    }
})

export default router
