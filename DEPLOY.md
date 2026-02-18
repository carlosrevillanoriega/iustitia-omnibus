# 🚀 Guía de Deploy en Vercel

## Prerrequisitos

1. Cuenta gratuita en [Vercel](https://vercel.com)
2. Cuenta en [GitHub](https://github.com)

## Paso 1: Subir a GitHub

```bash
# Inicializar repositorio
git init
git add .
git commit -m "Initial commit: Iustitia Omnibus website"

# Crear repo en GitHub y subir
git remote add origin https://github.com/TU_USUARIO/iustitia-omnibus.git
git branch -M main
git push -u origin main
```

## Paso 2: Importar en Vercel

1. Ve a [vercel.com/new](https://vercel.com/new)
2. Conecta tu cuenta de GitHub
3. Selecciona el repositorio `iustitia-omnibus`
4. Vercel detectará automáticamente que es un proyecto Vite
5. Click en **Deploy**

## Paso 3: Variables de Entorno

En el dashboard de Vercel:
1. Ve a **Settings** → **Environment Variables**
2. Agrega:
   - Key: `VITE_GOOGLE_SCRIPT_URL`
   - Value: tu URL de Google Apps Script (ver `GOOGLE_SHEETS_GUIDE.md`)
3. Redeploy para que tome efecto

## Paso 4: Dominio personalizado (opcional)

1. Ve a **Settings** → **Domains**
2. Agrega tu dominio personalizado
3. Configura los DNS según las instrucciones de Vercel

## ✅ Listo

Tu sitio estará disponible en `https://tu-proyecto.vercel.app`

Cada push a `main` desplegará automáticamente.
