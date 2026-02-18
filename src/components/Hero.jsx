import { FaCalendarAlt, FaArrowRight } from 'react-icons/fa'
import heroImage from '../assets/elizabeth-hero.jpg'


export default function Hero() {
    const scrollTo = (id) => {
        const el = document.getElementById(id)
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }

    return (
        <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-lavender-50 via-cream-50 to-lavender-100" />
                <div className="absolute top-20 right-10 w-72 h-72 bg-lavender-200 rounded-full blur-3xl opacity-30 animate-float" />
                <div className="absolute bottom-20 left-10 w-96 h-96 bg-lavender-300 rounded-full blur-3xl opacity-20" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-lavender-100 rounded-full blur-3xl opacity-25" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-24 pb-16 w-full">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <div className="animate-fade-in-up">
                        <div className="inline-flex items-center gap-2 bg-lavender-100 text-lavender-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                            <span className="w-2 h-2 bg-lavender-500 rounded-full" />
                            Licenciada en Derecho — UNAM FES Acatlán
                        </div>

                        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4">
                            <span className="gradient-text">Iustitia</span>{' '}
                            <span className="gradient-text">Omnibus</span>
                        </h1>

                        <p className="font-serif text-xl sm:text-2xl text-lavender-600 italic mb-6">
                            — Justicia para todas y todos
                        </p>

                        <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-lg">
                            Soy <strong className="text-gray-900">Elizabeth Fabiola Arellano Galicia</strong>, abogada
                            litigante con formación en la UNAM. Ofrezco asesoría jurídica integral, personalizada
                            y con enfoque humano. Tu derecho es mi compromiso.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <button onClick={() => scrollTo('asesorias')} className="btn-primary">
                                <FaCalendarAlt />
                                Agendar cita
                            </button>
                            <button onClick={() => scrollTo('servicios')} className="btn-secondary">
                                Servicios
                                <FaArrowRight className="text-sm" />
                            </button>
                        </div>
                        <h3>Datos</h3>
                        {/* Trust badges */}
                        <div className="mt-10 flex items-center gap-6 text-sm text-gray-500">
                            <div className="flex items-center gap-2">
                                <span className="text-lavender-500 text-lg">⚖️</span>
                                <span>Cuento con Cédula Profesional</span>
                            </div>
                            <div className="w-px h-5 bg-gray-300" />
                            <div className="flex items-center gap-2">
                                <span className="text-lavender-500 text-lg">🎓</span>
                                <span>UNAM 2017</span>
                            </div>
                            <div className="w-px h-5 bg-gray-300 hidden sm:block" />
                            <div className="hidden sm:flex items-center gap-2">
                                <span className="text-lavender-500 text-lg">📍</span>
                                <span>Santa Ana Tlacotenco, Milpa alta, CDMX</span>
                            </div>
                        </div>
                    </div>

                    {/* Photo */}
                    <div className="hidden lg:flex justify-center animate-slide-in-right">
                        <div className="relative">
                            {/* Main photo container */}
                            <div className="relative w-80 h-96 rounded-3xl overflow-hidden shadow-2xl shadow-lavender-300/30">
                                <img
                                    src={heroImage}
                                    alt="Lic. Elizabeth Fabiola Arellano Galicia"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Decorative elements */}
                            <div className="absolute -top-4 -right-4 w-24 h-24 bg-lavender-100 rounded-2xl -z-10" />
                            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-lavender-200/50 rounded-2xl -z-10" />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
