# Iustitia Omnibus — Sitio Web Profesional

Sitio web profesional para la **Lic. Elizabeth Fabiola Arellano Galicia**, abogada freelance.

## 🛠️ Tech Stack

- **React** + **Vite** — Build rápido y moderno
- **TailwindCSS v4** — Estilos utilitarios
- **FullCalendar** — Calendario interactivo
- **Google Sheets** — Backend gratuito como CMS

## 🚀 Desarrollo local

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Build de producción
npm run build
```

## 📦 Deploy en Vercel

1. Sube el proyecto a un repositorio en GitHub
2. Ve a [vercel.com](https://vercel.com) e importa el repositorio
3. Framework: **Vite** (se detecta automáticamente)
4. Agrega la variable de entorno `VITE_GOOGLE_SCRIPT_URL` en Settings > Environment Variables
5. Click en **Deploy**

Ver instrucciones completas en [`DEPLOY.md`](./DEPLOY.md).

## 📊 Google Sheets como Backend

El sitio usa Google Sheets como CMS gratuito. Ver [`GOOGLE_SHEETS_GUIDE.md`](./GOOGLE_SHEETS_GUIDE.md) para la guía completa de configuración.

## 📁 Estructura

```
src/
├── App.jsx                — Componente principal
├── main.jsx               — Entry point
├── index.css              — Estilos y tema
├── components/
│   ├── Header.jsx         — Navbar + WhatsApp
│   ├── Hero.jsx           — Sección principal
│   ├── Services.jsx       — 7 áreas legales
│   ├── Products.jsx       — Productos jurídicos
│   ├── Consultations.jsx  — Formulario → Sheets
│   ├── Calendar.jsx       — Calendario demo
│   ├── SuccessCases.jsx   — Casos de éxito
│   ├── News.jsx           — Noticias/blog
│   ├── Footer.jsx         — Contacto + redes
│   ├── PrivacyNotice.jsx  — Aviso de privacidad
│   └── LegalNotice.jsx    — Aviso legal
├── data/services.js       — Datos estáticos
└── utils/
    ├── googleSheets.js    — Integración Sheets
    └── useReveal.js       — Hook de animación
```

## 📝 Licencia

© 2025 Elizabeth F. Arellano Galicia — Todos los derechos reservados.
