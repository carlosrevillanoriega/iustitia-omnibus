/**
 * Google Sheets integration utilities.
 * 
 * To connect Google Sheets:
 * 1. Create a Google Sheet with tabs: Clientes, Citas, Noticias
 * 2. Deploy a Google Apps Script as web app (see GOOGLE_SHEETS_GUIDE.md)
 * 3. Set the VITE_GOOGLE_SCRIPT_URL env variable with your Apps Script URL
 */

const GOOGLE_SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL || ''

/**
 * Submit form data to Google Sheets via Apps Script endpoint
 * @param {Object} data - Form fields to send
 * @returns {Promise<{success: boolean, message: string}>}
 */
export async function submitToSheet(data) {
    if (!GOOGLE_SCRIPT_URL) {
        console.warn('Google Sheets URL not configured. Set VITE_GOOGLE_SCRIPT_URL in .env')
        // Return success in demo mode
        return { success: true, message: 'Modo demo: datos no enviados (configura Google Sheets)' }
    }

    try {
        const response = await fetch(GOOGLE_SCRIPT_URL, {
            method: 'POST',
            mode: 'no-cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                sheet: 'Citas',
                ...data,
                timestamp: new Date().toISOString(),
            }),
        })

        return { success: true, message: 'Datos enviados correctamente' }
    } catch (error) {
        console.error('Error submitting to Google Sheets:', error)
        return { success: false, message: 'Error al enviar los datos. Intenta de nuevo.' }
    }
}

/**
 * Fetch data from a specific Google Sheet tab
 * @param {string} sheetName - Name of the sheet tab (e.g., 'Noticias')
 * @returns {Promise<Array>}
 */
export async function fetchFromSheet(sheetName) {
    if (!GOOGLE_SCRIPT_URL) {
        console.warn('Google Sheets URL not configured. Using demo data.')
        return []
    }

    try {
        const url = `${GOOGLE_SCRIPT_URL}?sheet=${encodeURIComponent(sheetName)}`
        const response = await fetch(url)
        const data = await response.json()
        return data
    } catch (error) {
        console.error(`Error fetching from sheet "${sheetName}":`, error)
        return []
    }
}
