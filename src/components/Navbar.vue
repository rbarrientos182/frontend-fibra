<template>
  <nav class="bg-blue-800 text-white p-4 flex justify-between items-center shadow-lg">
    <div class="font-bold text-lg">Migración Fibra Óptica</div>
    <div class="space-x-4">
      <router-link to="/evidencias" class="hover:underline">Listado</router-link>
      <router-link to="/evidencias/crear" class="bg-blue-600 px-3 py-1 rounded">Nueva Captura</router-link>
      <button @click="logout" class="text-red-300 hover:text-red-100 font-semibold">Salir</button>
    </div>
  </nav>
</template>

<script setup>
import api from '../api/axios';
import { useRouter } from 'vue-router';

const router = useRouter();

const logout = async () => {
  try {
    await api.post('/logout');
  } finally {
    localStorage.removeItem('token');
    router.push({ name: 'login' });
  }
};
</script>