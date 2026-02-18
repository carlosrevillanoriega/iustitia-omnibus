# 🛠️ Guía de Administración y Contenido

Esta guía te ayudará a gestionar tu página web, desde cambiar imágenes hasta publicar noticias y subir tus cambios a internet.

---

## 📸 1. Gestión de Imágenes

Las imágenes locales se guardan en la carpeta `src/assets/`. Actualmente está vacía, pero aquí es donde debes poner tus fotos profesionales.

### Cómo agregar y usar una imagen:
1. **Guarda la imagen**: Coloca tu archivo (ej: `foto-perfil.jpg`) en `src/assets/`.
2. **Impórtala en el componente**: Por ejemplo, en `src/components/Hero.jsx`:
   ```javascript
   import miFoto from '../assets/foto-perfil.jpg';
   ```
3. **Úsala en el código**: Busca la etiqueta `<img>` o el div correspondiente y asigna la fuente:
   ```jsx
   <img src={miFoto} alt="Lic. Elizabeth Arellano" className="..." />
   ```

> [!TIP]
> **Ruta del Hero**: Actualmente el `Hero.jsx` usa un cuadrado de color como placeholder (líneas 74-90). Puedes reemplazar ese div por una etiqueta `<img>`.

---

## 📰 2. Gestión de Noticias y Casos de Éxito

Estos contenidos NO se cambian en el código, sino en tu **Google Sheet**.

- **Noticias**: Pestaña "Noticias" de tu Excel.
- **Casos de Éxito**: Pestaña "CasosExito" de tu Excel.

Al agregar una fila nueva en tu Google Sheet, los cambios aparecerán automáticamente en la web al recargar (siempre que hayas configurado la API correctamente siguiendo la `GOOGLE_SHEETS_GUIDE.md`).

---

## 🔄 3. Flujo de Trabajo (Subir cambios a Internet)

Como tu proyecto ya está conectado a Vercel a través de GitHub, cada vez que hagas un "Push", Vercel actualizará la página automáticamente.

### Pasos para subir cambios:
Abre tu terminal en la carpeta del proyecto y ejecuta estos 3 comandos:

1. **Guardar cambios localmente**:
   ```bash
   git add .
   git commit -m "Descripción de lo que cambiaste (ej: agregué mi foto)"
   ```

2. **Subir a GitHub**:
   ```bash
   git push origin main
   ```

3. **Ver resultados**:
   Vercel detectará el cambio y en 1-2 minutos verás la versión actualizada en tu enlace de `.vercel.app`.

---

## 📂 Rutas clave para modificar:

| Qué quieres cambiar | Ruta del archivo |
| :--- | :--- |
| **Colores y Tipografía** | `src/index.css` |
| **Menú de navegación** | `src/components/Header.jsx` |
| **Texto de presentación** | `src/components/Hero.jsx` |
| **Lista de Servicios** | `src/data/services.js` |
| **Formulario de contacto** | `src/components/Consultations.jsx` |

---

## 🛡️ Administración de Variables de Entorno

Si cambias tu Google Sheet o el script de Apps Script, recuerda actualizar la variable `VITE_GOOGLE_SCRIPT_URL`:
- **Localmente**: En el archivo `.env`.
- **En Internet**: En el panel de control de Vercel (Settings > Environment Variables).
