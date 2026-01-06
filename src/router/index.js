import { createRouter, createWebHistory } from 'vue-router';
import LoginView from '../views/LoginView.vue';
import EvidenceForm from '../views/EvidenceForm.vue';
import EvidenceList from '../views/EvidenceList.vue';

const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginView,
    meta: { requiresAuth: false }
  },
  {
    path: '/evidencias',
    name: 'evidencias.list',
    component: EvidenceList,
    meta: { requiresAuth: true }
  },
  {
    path: '/evidencias/crear',
    name: 'evidencias.create',
    component: EvidenceForm,
    meta: { requiresAuth: true }
  },
  
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('../views/DashboardView.vue'),
    meta: { requiresAuth: true }
  }

];

const router = createRouter({
  history: createWebHistory(),
  routes
});

// --- GUARD DE NAVEGACIÓN ---
router.beforeEach((to, from, next) => {
  const isAuthenticated = !!localStorage.getItem('token');

  if (to.meta.requiresAuth && !isAuthenticated) {
    // Si la ruta requiere auth y no hay token, al login
    next({ name: 'login' });
  } else if (to.name === 'login' && isAuthenticated) {
    // Si ya está logueado y trata de ir al login, lo mandamos al listado
    next({ name: 'evidencias.list' });
  } else {
    next();
  }
});

export default router;