🚀 Sistema de Gestión de Evidencias - Fibra Óptica
Este es el frontend desarrollado en Vue 3 + Vite + Tailwind CSS para la captura y reporte de evidencias de migración de fibra óptica. Diseñado para ser ligero, responsivo y fácil de usar por técnicos en campo.

🛠️ Tecnologías utilizadas
Vue 3 (Composition API)

Vite (Build Tool de alta velocidad)

Tailwind CSS (Framework de estilos)

Axios (Cliente HTTP para conexión con el Backend)

Vue Router (Navegación entre vistas)

📋 Características principales
🔐 Autenticación: Login seguro con manejo de Tokens.

📸 Captura de Evidencias: Formulario optimizado para subir 4 tipos de imágenes (Visita, Correo, WhatsApp, SMS).

⚡ Validación en Tiempo Real: Control de peso de archivos y tipos de imagen antes de la subida.

📊 Dashboard de Control: Visualización del rendimiento diario por técnico.

📈 Barra de Progreso: Indicador visual de carga de archivos mediante Axios.

📱 Diseño Responsive: Totalmente compatible con dispositivos móviles.

⚙️ Instalación y Configuración
Sigue estos pasos para poner en marcha el proyecto localmente:

1. Clonar el repositorio
Bash

git clone https://github.com/tu-usuario/frontend-fibra.git
cd frontend-fibra
2. Instalar dependencias
Asegúrate de tener Node.js instalado.

Bash

npm install
3. Configuración del Entorno
Crea un archivo .env en la raíz del proyecto y configura la URL de tu API (Laravel o Django):

Fragmento de código

VITE_API_URL=http://localhost:8000/api
4. Iniciar servidor de desarrollo
Bash

npm run dev
📂 Estructura del Proyecto
Plaintext

src/
├── api/          # Configuración de Axios
├── components/   # Componentes reutilizables (Navbar, Barra de progreso)
├── router/       # Definición de rutas (index.js)
├── views/        # Páginas principales (Login, Formulario, Dashboard)
├── App.vue       # Componente raíz
└── main.js       # Punto de entrada de la aplicación
🧪 Pruebas de Usuario (Credenciales por defecto)
Para el entorno de desarrollo, puedes utilizar las siguientes credenciales:

Usuario: admin@fibra.com

Contraseña: password

📝 Notas de Versión
v1.0.0: Lanzamiento inicial con carga de imágenes y validación de archivos.

Próxima mejora: Implementación de modo offline para capturas sin conexión.