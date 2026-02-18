# 📊 Guía de Integración con Google Sheets

Esta guía explica cómo conectar el sitio web con Google Sheets como backend gratuito.

## Paso 1: Crear la Hoja de Cálculo

1. Ve a [Google Sheets](https://sheets.google.com) y crea una nueva hoja
2. Renombra la hoja como: **Iustitia Omnibus - Base de Datos**
3. Crea **3 pestañas** (hojas) con estos nombres exactos:

### Pestaña "Citas"
| timestamp | nombre | telefono | correo | asunto | descripcion | fecha | hora |
|-----------|--------|----------|--------|--------|-------------|-------|------|

### Pestaña "Noticias"
| id | title | description | date | category |
|----|-------|-------------|------|----------|

### Pestaña "CasosExito"
| id | title | description | result | date |
|----|-------|-------------|--------|------|

## Paso 2: Crear el Google Apps Script

1. En tu Google Sheet, ve a **Extensiones** → **Apps Script**
2. Borra el código existente y pega lo siguiente:

```javascript
const SPREADSHEET_ID = SpreadsheetApp.getActiveSpreadsheet().getId();

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const sheetName = data.sheet || 'Citas';
    const sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName(sheetName);
    
    if (!sheet) {
      return ContentService.createTextOutput(
        JSON.stringify({ success: false, message: 'Hoja no encontrada' })
      ).setMimeType(ContentService.MimeType.JSON);
    }

    const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
    const row = headers.map(header => data[header] || '');
    sheet.appendRow(row);

    return ContentService.createTextOutput(
      JSON.stringify({ success: true, message: 'Datos guardados' })
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(
      JSON.stringify({ success: false, message: error.toString() })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  try {
    const sheetName = e.parameter.sheet || 'Noticias';
    const sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName(sheetName);
    
    if (!sheet || sheet.getLastRow() < 2) {
      return ContentService.createTextOutput(
        JSON.stringify([])
      ).setMimeType(ContentService.MimeType.JSON);
    }

    const data = sheet.getRange(1, 1, sheet.getLastRow(), sheet.getLastColumn()).getValues();
    const headers = data[0];
    const rows = data.slice(1).map(row => {
      const obj = {};
      headers.forEach((header, i) => { obj[header] = row[i]; });
      return obj;
    });

    return ContentService.createTextOutput(
      JSON.stringify(rows)
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(
      JSON.stringify({ error: error.toString() })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}
```

3. Guarda el proyecto con nombre: **Iustitia API**

## Paso 3: Desplegar como Web App

1. Click en **Implementar** → **Nueva implementación**
2. Tipo: **App web**
3. Configuración:
   - **Descripción**: API Iustitia Omnibus
   - **Ejecutar como**: Tu cuenta
   - **Quién tiene acceso**: **Cualquier persona**
4. Click en **Implementar**
5. **Copia la URL** que te da (será algo como `https://script.google.com/macros/s/ABC.../exec`)

## Paso 4: Configurar en el Proyecto

### Desarrollo local
Crea un archivo `.env` en la raíz del proyecto:
```
VITE_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/TU_SCRIPT_ID/exec
```

### Producción (Vercel)
Agrega la variable de entorno en el dashboard de Vercel (ver `DEPLOY.md`).

## Paso 5: Agregar Contenido

### Noticias
Agrega filas en la pestaña "Noticias" con los campos:
- `id`: número único
- `title`: título de la noticia
- `description`: descripción breve
- `date`: fecha (formato YYYY-MM-DD)
- `category`: "Análisis Legal", "Guía Jurídica", o "Promoción"

### Casos de Éxito
Agrega filas en la pestaña "CasosExito" con los campos:
- `id`: número único
- `title`: título del caso
- `description`: descripción (sin datos personales)
- `result`: resultado obtenido
- `date`: fecha (formato YYYY-MM)

## ⚠️ Seguridad

- La URL del Apps Script solo permite operaciones limitadas (leer y agregar filas)
- No se expone información sensible del spreadsheet
- Los datos de clientes se almacenan solo en tu Google Sheet privada
- Recuerda no commitear el archivo `.env` (ya está en `.gitignore`)

## ✅ Verificación

1. Abre tu sitio y envía un formulario de asesoría
2. Verifica que aparezca una nueva fila en la pestaña "Citas" de tu Google Sheet
3. Agrega datos de prueba en "Noticias" y recarga la sección de noticias
