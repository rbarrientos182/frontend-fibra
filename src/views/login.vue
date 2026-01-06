<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100 px-4">
    <div class="max-w-md w-full bg-white rounded-2xl shadow-xl p-8">
      
      <div v-if="errorMessage" 
           class="mb-6 flex items-center p-4 text-sm text-red-800 border-t-4 border-red-300 bg-red-50 rounded-lg animate-pulse" 
           role="alert">
        <svg class="flex-shrink-0 inline w-4 h-4 mr-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
        </svg>
        <span class="sr-only">Error</span>
        <div>
          <span class="font-bold">¡Atención!</span> {{ errorMessage }}
        </div>
      </div>

      <form @submit.prevent="handleLogin" class="space-y-6">
        <button 
          type="submit" 
          :disabled="loading"
          class="w-full flex justify-center py-3 px-4 rounded-lg shadow-sm text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 transition duration-200 disabled:opacity-50"
        >
          <span v-if="loading" class="flex items-center">
            <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Procesando...
          </span>
          <span v-else>Entrar al Sistema</span>
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import api from '../api/axios';

const router = useRouter();
const form = ref({ email: '', password: '' });
const loading = ref(false);
const errorMessage = ref(''); // <--- Nueva variable para el mensaje

const handleLogin = async () => {
    loading.value = true;
    errorMessage.value = ''; // Limpiar errores previos
    
    try {
        const { data } = await api.post('/login', form.value);
        const token = data.access_token || data.token;
        localStorage.setItem('token', token);
        router.push('/evidencias');
    } catch (error) {
        // Manejo detallado del error
        if (error.response && error.response.status === 401) {
            errorMessage.value = 'El correo o la contraseña son incorrectos.';
        } else {
            errorMessage.value = 'Hubo un problema de conexión con el servidor.';
        }
    } finally {
        loading.value = false;
    }
};
</script>