<template>
  <div class="p-6">
    <h1 class="text-2xl font-bold mb-6 text-gray-800">Resumen de Capturas (Hoy)</h1>
    
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div v-for="tecnico in stats" :key="tecnico.id" 
           class="bg-white p-6 rounded-xl shadow-sm border-l-4 border-blue-500">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm text-gray-500 uppercase font-semibold">Técnico</p>
            <p class="text-xl font-bold text-gray-700">{{ tecnico.name || tecnico.username }}</p>
          </div>
          <div class="bg-blue-100 p-3 rounded-full">
            <span class="text-2xl font-black text-blue-600">{{ tecnico.total }}</span>
          </div>
        </div>
        <div class="mt-4">
          <div class="w-full bg-gray-100 rounded-full h-2">
            <div class="bg-blue-500 h-2 rounded-full" :style="{ width: (tecnico.total * 5) + '%' }"></div>
          </div>
          <p class="text-xs text-gray-400 mt-1 italic">Basado en meta diaria de 20</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import api from '../api/axios';

const stats = ref([]);

onMounted(async () => {
  try {
    const { data } = await api.get('/stats'); // Ajusta la ruta según tu backend
    stats.value = data;
  } catch (error) {
    console.error("Error cargando estadísticas");
  }
});
</script>