<template>
  <div class="min-h-screen bg-gray-50">
    <Navbar v-if="isLoggedIn" />
    
    <main class="container mx-auto py-8 px-4">
      <router-view />
    </main>
  </div>
</template>

<script setup>
import { ref, watchEffect } from 'vue';
import Navbar from './components/Navbar.vue';
import { useRoute } from 'vue-router';

const isLoggedIn = ref(false);
const route = useRoute();

// Vigilamos la ruta para saber si mostrar la Navbar
watchEffect(() => {
  isLoggedIn.value = !!localStorage.getItem('token');
});
</script>