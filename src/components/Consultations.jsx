import { useState } from 'react'
import { FaPaperPlane, FaWhatsapp, FaCheckCircle } from 'react-icons/fa'
import { submitToSheet } from '../utils/googleSheets'
import { useReveal } from '../utils/useReveal'

const initialForm = {
    nombre: '',
    telefono: '',
    correo: '',
    asunto: '',
    descripcion: '',
    fecha: '',
    hora: '',
}

const asuntoOptions = [
    'Derecho Penal',
    'Derecho Civil',
    'Derecho Mercantil',
    'Derecho Laboral',
    'Derecho Familiar',
    'Derecho Fiscal',
    'Derecho Inmobiliario',
    'Otro',
]

export default function Consultations() {
    const [form, setForm] = useState(initialForm)
    const [loading, setLoading] = useState(false)
    const [submitted, setSubmitted] = useState(false)
    const [ref, isVisible] = useReveal()

    const handleChange = (e) => {
        setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)

        const result = await submitToSheet(form)
        setLoading(false)

        if (result.success) {
            setSubmitted(true)
            setForm(initialForm)
        }
    }

    const whatsappRedirect = () => {
        const msg = `Hola Licenciada Elizabeth, me interesa agendar una cita. Mi asunto es: ${form.asunto || 'consulta general'}.`
        window.open(`https://wa.me/525584229355?text=${encodeURIComponent(msg)}`, '_blank')
    }

    if (submitted) {
        return (
            <section id="asesorias" className="py-20 bg-gradient-to-b from-lavender-50 to-cream-50">
                <div className="section text-center">
                    <div className="max-w-md mx-auto bg-white rounded-3xl p-10 shadow-lg shadow-lavender-200/20 border border-lavender-100 animate-fade-in-up">
                        <FaCheckCircle className="text-6xl text-green-500 mx-auto mb-4" />
                        <h3 className="font-serif text-2xl font-bold text-gray-900 mb-3">
                            ¡Solicitud enviada!
                        </h3>
                        <p className="text-gray-500 mb-6">
                            Tu solicitud de asesoría ha sido recibida. Te contactaremos pronto.
                        </p>
                        <div className="flex flex-col gap-3">
                            <button onClick={whatsappRedirect} className="btn-whatsapp justify-center w-full">
                                <FaWhatsapp className="text-lg" />
                                Contactar por WhatsApp ahora
                            </button>
                            <button
                                onClick={() => setSubmitted(false)}
                                className="btn-secondary justify-center w-full"
                            >
                                Enviar otra solicitud
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        )
    }

    return (
        <section id="asesorias" className="py-20 bg-gradient-to-b from-lavender-50 to-cream-50">
            <div className="section">
                <div ref={ref} className={`text-center mb-12 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
                    <span className="inline-block bg-lavender-100 text-lavender-700 px-4 py-1.5 rounded-full text-sm font-medium mb-4">
                        Agenda tu cita
                    </span>
                    <h2 className="section-title">Solicita tu Asesoría</h2>
                    <p className="section-subtitle">
                        Completa el formulario y nos pondremos en contacto contigo para brindarte
                        la atención que necesitas.
                    </p>
                </div>

                <form
                    onSubmit={handleSubmit}
                    className="max-w-2xl mx-auto bg-white rounded-3xl p-8 sm:p-10 shadow-lg shadow-lavender-200/20 border border-lavender-100"
                >
                    <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                            <label className="form-label" htmlFor="nombre">Nombre completo *</label>
                            <input
                                id="nombre"
                                name="nombre"
                                type="text"
                                required
                                value={form.nombre}
                                onChange={handleChange}
                                className="form-input"
                                placeholder="Tu nombre completo"
                            />
                        </div>
                        <div>
                            <label className="form-label" htmlFor="telefono">Teléfono *</label>
                            <input
                                id="telefono"
                                name="telefono"
                                type="tel"
                                required
                                value={form.telefono}
                                onChange={handleChange}
                                className="form-input"
                                placeholder="55 1234 5678"
                            />
                        </div>
                        <div>
                            <label className="form-label" htmlFor="correo">Correo electrónico</label>
                            <input
                                id="correo"
                                name="correo"
                                type="email"
                                value={form.correo}
                                onChange={handleChange}
                                className="form-input"
                                placeholder="tu@correo.com"
                            />
                        </div>
                        <div>
                            <label className="form-label" htmlFor="asunto">Tipo de asunto *</label>
                            <select
                                id="asunto"
                                name="asunto"
                                required
                                value={form.asunto}
                                onChange={handleChange}
                                className="form-input"
                            >
                                <option value="">Selecciona un área</option>
                                {asuntoOptions.map(opt => (
                                    <option key={opt} value={opt}>{opt}</option>
                                ))}
                            </select>
                        </div>
                        <div className="sm:col-span-2">
                            <label className="form-label" htmlFor="descripcion">Descripción breve *</label>
                            <textarea
                                id="descripcion"
                                name="descripcion"
                                required
                                rows={3}
                                value={form.descripcion}
                                onChange={handleChange}
                                className="form-input resize-none"
                                placeholder="Describe brevemente tu situación..."
                            />
                        </div>
                        <div>
                            <label className="form-label" htmlFor="fecha">Fecha deseada</label>
                            <input
                                id="fecha"
                                name="fecha"
                                type="date"
                                value={form.fecha}
                                onChange={handleChange}
                                className="form-input"
                            />
                        </div>
                        <div>
                            <label className="form-label" htmlFor="hora">Hora deseada</label>
                            <input
                                id="hora"
                                name="hora"
                                type="time"
                                value={form.hora}
                                onChange={handleChange}
                                className="form-input"
                            />
                        </div>
                    </div>

                    <div className="mt-8 flex flex-col sm:flex-row gap-3">
                        <button
                            type="submit"
                            disabled={loading}
                            className="btn-primary justify-center flex-1 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {loading ? (
                                <span className="flex items-center gap-2">
                                    <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                                    </svg>
                                    Enviando...
                                </span>
                            ) : (
                                <>
                                    <FaPaperPlane />
                                    Enviar solicitud
                                </>
                            )}
                        </button>
                        <button type="button" onClick={whatsappRedirect} className="btn-whatsapp justify-center flex-1">
                            <FaWhatsapp className="text-lg" />
                            Enviar por WhatsApp
                        </button>
                    </div>

                    <p className="text-xs text-gray-400 mt-4 text-center">
                        Al enviar aceptas nuestro{' '}
                        <button
                            type="button"
                            onClick={() => {
                                const el = document.getElementById('aviso-privacidad')
                                if (el) el.scrollIntoView({ behavior: 'smooth' })
                            }}
                            className="underline hover:text-lavender-600 cursor-pointer"
                        >
                            aviso de privacidad
                        </button>.
                    </p>
                </form>
            </div>
        </section>
    )
}
