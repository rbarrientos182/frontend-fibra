<template>
  <div class="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-md">
    <h2 class="text-xl font-semibold mb-4">Capturar Nueva Evidencia</h2>
    <div class="grid grid-cols-2 gap-4">
      <input v-model="form.linea_telefono" placeholder="Línea (10 dígitos)" class="border p-2 rounded">
      <input v-model="form.correo" placeholder="Correo electrónico" class="border p-2 rounded">
      <input v-model="form.celular_1" placeholder="Celular contacto 1" class="border p-2 rounded">
      <input v-model="form.celular_2" placeholder="Celular contacto 2 (Opcional)" class="border p-2 rounded">
    </div>

    <div class="mt-6 grid grid-cols-2 gap-6">
      <div v-for="tipo in ['visita', 'correo', 'whatsapp', 'sms']" :key="tipo">
        <label class="block text-sm font-medium capitalize">Evidencia {{ tipo }}</label>
        <input type="file" @change="handleFileUpload($event, tipo)" class="mt-1 block w-full text-sm">
      </div>
    </div>

    <button @click="saveEvidence" class="mt-8 bg-green-600 text-white px-6 py-2 rounded shadow">
      Guardar Registro
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import api from '../api/axios';

const form = ref({
    linea_telefono: '',
    correo: '',
    celular_1: '',
    celular_2: '',
});

const files = ref({});

const handleFileUpload = (event, tipo) => {
    files.value[`img_${tipo}`] = event.target.files[0];
};

const saveEvidence = async () => {
    const data = new FormData();
    // Agregar campos de texto
    Object.keys(form.value).forEach(key => data.append(key, form.value[key]));
    // Agregar archivos
    Object.keys(files.value).forEach(key => data.append(key, files.value[key]));

    try {
        await api.post('/evidencias', data, {
            headers: { 'Content-Type': 'multipart/form-data' }
        });
        alert('Evidencia guardada con éxito');
    } catch (error) {
        console.error(error.response.data.errors);
        alert('Error en la validación. Revisa los datos.');
    }
};
</script>