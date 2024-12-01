# Proyecto Azure Cloud Computing

Este proyecto es una aplicación web desarrollada con Astro.js y desplegada en Azure, creada como parte del curso de Cómputo en la Nube. La aplicación demuestra la implementación de servicios cloud y mejores prácticas de desarrollo en la nube.

## 🚀 Características Principales

- Sistema de gestión de productos
- API RESTful para manejo de datos
- Integración con base de datos PostgreSQL en Azure
- Interfaz responsive usando Tailwind CSS
- Manejo de facturas y estudiantes
- Despliegue en Azure App Service

## 🛠️ Tecnologías Utilizadas

- **Frontend:** Astro.js, Tailwind CSS
- **Backend:** Node.js
- **Base de Datos:** PostgreSQL
- **Cloud Platform:** Microsoft Azure
- **Otros:** TypeScript, Express

## 📋 Requisitos Previos

- Node.js ≥ 20.0.0
- Cuenta de Azure
- Azure CLI instalado
- PostgreSQL

## 🔧 Configuración del Proyecto

1. Clonar el repositorio:
```bash
git clone https://github.com/jaennova/astro-azure.git
cd astro-azure
```

2. Instalar dependencias:
```bash
npm install
```

3. Configurar variables de entorno:
```env
DATABASE_URL=your_azure_postgresql_connection_string
```

4. Ejecutar en desarrollo:
```bash
npm run dev
```

## 🌐 Despliegue en Azure

1. Crear recursos en Azure:
   - App Service
   - PostgreSQL Database
   - Application Insights (opcional)

2. Configurar la aplicación en Azure:
```bash
az webapp up --runtime NODE:20 --sku F1 --name your-app-name
```

3. Configurar variables de entorno en Azure App Service

## 📁 Estructura del Proyecto

```
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   ├── layouts/
│   ├── pages/
│   │   ├── api/
│   │   └── index.astro
│   └── lib/
│       └── db.ts
├── astro.config.mjs
└── package.json
```

## 🔄 API Endpoints

- `GET /api/products` - Obtener lista de productos
- `POST /api/products` - Crear nuevo producto
- `GET /api/students` - Obtener lista de estudiantes
- `POST /api/facturas` - Crear nueva factura

## 📚 Aprendizajes del Proyecto

- Implementación de arquitecturas cloud-native
- Gestión de bases de datos en la nube
- Despliegue continuo en Azure
- Manejo de servicios PaaS
- Implementación de APIs RESTful
- Seguridad en aplicaciones cloud

## 🤝 Contribuir

1. Fork del repositorio
2. Crear una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit de tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abrir un Pull Request

## ⚙️ Comandos Disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Inicia servidor de desarrollo |
| `npm run build` | Construye el proyecto |
| `npm start` | Inicia la aplicación en producción |
| `npm run preview` | Vista previa de la build |

## 📝 Notas

- Este proyecto es parte del curso de Cómputo en la Nube
- Se utiliza Azure como plataforma principal de desarrollo y pruebas
- La aplicación está optimizada para demostrar conceptos de cloud computing
