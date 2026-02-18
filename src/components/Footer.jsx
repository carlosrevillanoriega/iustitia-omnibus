import { FaWhatsapp, FaEnvelope, FaLinkedinIn, FaPhoneAlt, FaMapMarkerAlt, FaHeart } from 'react-icons/fa'

const WHATSAPP_URL = 'https://wa.me/525584229355?text=Hola%20Licenciada%20Elizabeth%2C%20me%20interesa%20recibir%20asesor%C3%ADa%20jur%C3%ADdica.'

export default function Footer() {
    const scrollTo = (id) => {
        const el = document.getElementById(id)
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }

    return (
        <footer id="contacto" className="bg-gradient-to-b from-lavender-50 to-lavender-100 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
                    {/* Brand */}
                    <div className="lg:col-span-2">
                        <h3 className="font-serif text-2xl font-bold gradient-text mb-3">
                            Iustitia Omnibus
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed mb-4 max-w-md">
                            Lic. Elizabeth Fabiola Arellano Galicia — Abogada litigante con formación en la UNAM
                            FES Acatlán. Servicios jurídicos profesionales con enfoque humano y estratégico.
                        </p>
                        <p className="font-serif italic text-lavender-600 text-sm">
                            "Compromiso, vocación y justicia."
                        </p>

                        <div className="flex items-center gap-3 mt-6">
                            <a
                                href={WHATSAPP_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center hover:bg-green-600 transition-all hover:-translate-y-1"
                                aria-label="WhatsApp"
                            >
                                <FaWhatsapp className="text-lg" />
                            </a>
                            <a
                                href="mailto:fabyelyarga@gmail.com"
                                className="w-10 h-10 rounded-full bg-lavender-500 text-white flex items-center justify-center hover:bg-lavender-600 transition-all hover:-translate-y-1"
                                aria-label="Email"
                            >
                                <FaEnvelope className="text-lg" />
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-all hover:-translate-y-1"
                                aria-label="LinkedIn"
                            >
                                <FaLinkedinIn className="text-lg" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-semibold text-gray-900 mb-4">Navegación</h4>
                        <ul className="space-y-2">
                            {[
                                { id: 'inicio', label: 'Inicio' },
                                { id: 'servicios', label: 'Servicios' },
                                { id: 'productos', label: 'Productos' },
                                { id: 'asesorias', label: 'Asesorías' },
                                { id: 'agenda', label: 'Agenda' },
                                { id: 'casos', label: 'Casos de Éxito' },
                            ].map(({ id, label }) => (
                                <li key={id}>
                                    <button
                                        onClick={() => scrollTo(id)}
                                        className="text-sm text-gray-500 hover:text-lavender-700 transition-colors cursor-pointer"
                                    >
                                        {label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="font-semibold text-gray-900 mb-4">Contacto</h4>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-2 text-sm text-gray-500">
                                <FaPhoneAlt className="text-lavender-500 mt-0.5 flex-shrink-0" />
                                <a href="tel:+525584229355" className="hover:text-lavender-700 transition-colors">
                                    55 8422 9355
                                </a>
                            </li>
                            <li className="flex items-start gap-2 text-sm text-gray-500">
                                <FaEnvelope className="text-lavender-500 mt-0.5 flex-shrink-0" />
                                <a href="mailto:fabyelyarga@gmail.com" className="hover:text-lavender-700 transition-colors">
                                    fabyelyarga@gmail.com
                                </a>
                            </li>
                            <li className="flex items-start gap-2 text-sm text-gray-500">
                                <FaMapMarkerAlt className="text-lavender-500 mt-0.5 flex-shrink-0" />
                                <span>Venustiano Carranza, CDMX</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Legal Links & Copyright */}
                <div className="border-t border-lavender-200 pt-6">
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-400">
                        <p className="flex items-center gap-1">
                            © {new Date().getFullYear()} Iustitia Omnibus — Lic. Elizabeth F. Arellano Galicia.
                            Hecho con <FaHeart className="text-lavender-400 inline" /> en México.
                        </p>
                        <div className="flex items-center gap-4">
                            <button
                                onClick={() => scrollTo('aviso-privacidad')}
                                className="hover:text-lavender-600 transition-colors cursor-pointer"
                            >
                                Aviso de Privacidad
                            </button>
                            <button
                                onClick={() => scrollTo('aviso-legal')}
                                className="hover:text-lavender-600 transition-colors cursor-pointer"
                            >
                                Aviso Legal
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
