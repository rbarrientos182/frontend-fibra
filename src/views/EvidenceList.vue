<template>
  <div class="p-6">
    <table class="min-w-full bg-white border">
      <thead class="bg-gray-200">
        <tr>
          <th class="p-3 border">Línea</th>
          <th class="p-3 border">Contacto</th>
          <th class="p-3 border">Evidencias</th>
          <th class="p-3 border">Capturó</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in evidencias" :key="item.id" class="text-center">
          <td class="p-3 border">{{ item.linea_telefono }}</td>
          <td class="p-3 border">{{ item.celular_contacto_1 }}</td>
          <td class="p-3 border flex justify-center gap-2">
            <span v-for="(url, tipo) in item.evidencias" :key="tipo">
              <a v-if="url" :href="url" target="_blank" class="text-blue-500 underline text-xs capitalize">{{ tipo }}</a>
            </span>
          </td>
          <td class="p-3 border">{{ item.registrado_por }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import api from '../api/axios';

const evidencias = ref([]);

onMounted(async () => {
    const { data } = await api.get('/evidencias');
    evidencias.value = data.data; // .data viene del EvidenceResource
});
</script>