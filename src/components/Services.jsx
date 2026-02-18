import { services } from '../data/services'
import { useReveal } from '../utils/useReveal'
import { FaWhatsapp } from 'react-icons/fa'

const WHATSAPP_URL = 'https://wa.me/525584229355?text=Hola%20Licenciada%20Elizabeth%2C%20me%20interesa%20recibir%20asesor%C3%ADa%20en%20'

function ServiceCard({ service, index }) {
    const [ref, isVisible] = useReveal()
    const Icon = service.icon

    return (
        <div
            ref={ref}
            className={`bg-white rounded-2xl p-6 card-hover border border-lavender-100 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
            style={{ animationDelay: `${index * 100}ms` }}
        >
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-lavender-100 to-lavender-200 flex items-center justify-center mb-4">
                <Icon className="text-2xl text-lavender-700" />
            </div>
            <h3 className="font-serif text-xl font-semibold text-gray-900 mb-3">
                {service.title}
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-5">
                {service.description}
            </p>
            <a
                href={`${WHATSAPP_URL}${encodeURIComponent(service.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-lavender-700 hover:text-lavender-900 transition-colors group"
            >
                <FaWhatsapp className="text-green-500 group-hover:scale-110 transition-transform" />
                Solicitar asesoría
            </a>
        </div>
    )
}

export default function Services() {
    const [ref, isVisible] = useReveal()

    return (
        <section id="servicios" className="py-20 bg-gradient-to-b from-cream-50 to-lavender-50">
            <div className="section">
                <div ref={ref} className={`text-center mb-12 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
                    <span className="inline-block bg-lavender-100 text-lavender-700 px-4 py-1.5 rounded-full text-sm font-medium mb-4">
                        Áreas de Práctica
                    </span>
                    <h2 className="section-title">Servicios Jurídicos</h2>
                    <p className="section-subtitle">
                        Soluciones legales integrales para proteger tus derechos con profesionalismo y sensibilidad.
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {services.map((service, i) => (
                        <ServiceCard key={service.id} service={service} index={i} />
                    ))}
                </div>
            </div>
        </section>
    )
}
