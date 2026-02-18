import { useState, useEffect } from 'react'
import { FaWhatsapp, FaBars, FaTimes } from 'react-icons/fa'

const WHATSAPP_URL = 'https://wa.me/525584229355?text=Hola%20Licenciada%20Elizabeth%2C%20me%20interesa%20recibir%20asesor%C3%ADa%20jur%C3%ADdica.'

const navLinks = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'servicios', label: 'Servicios' },
    { id: 'productos', label: 'Productos' },
    { id: 'asesorias', label: 'Asesorías' },
    { id: 'casos', label: 'Casos de Éxito' },
    { id: 'noticias', label: 'Noticias' },
    { id: 'agenda', label: 'Agenda' },
    { id: 'contacto', label: 'Contacto' },
]

export default function Header() {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const scrollTo = (id) => {
        setMenuOpen(false)
        const el = document.getElementById(id)
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                    ? 'glass shadow-lg shadow-lavender-200/20 py-2'
                    : 'bg-transparent py-4'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
                {/* Logo */}
                <button onClick={() => scrollTo('inicio')} className="flex items-center gap-2 group cursor-pointer">
                    <span className="text-xl sm:text-2xl font-serif font-bold gradient-text tracking-tight">
                        Iustitia Omnibus
                    </span>
                </button>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex items-center gap-1">
                    {navLinks.map(({ id, label }) => (
                        <button
                            key={id}
                            onClick={() => scrollTo(id)}
                            className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-lavender-700 rounded-lg hover:bg-lavender-50 transition-all cursor-pointer"
                        >
                            {label}
                        </button>
                    ))}
                </nav>

                {/* WhatsApp Button + Mobile Menu Toggle */}
                <div className="flex items-center gap-3">
                    <a
                        href={WHATSAPP_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-whatsapp text-xs sm:text-sm"
                    >
                        <FaWhatsapp className="text-lg" />
                        <span className="hidden sm:inline">Consulta por WhatsApp</span>
                    </a>

                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="lg:hidden p-2 text-gray-600 hover:text-lavender-700 transition-colors cursor-pointer"
                        aria-label="Toggle menu"
                    >
                        {menuOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav */}
            {menuOpen && (
                <nav className="lg:hidden glass mt-2 mx-4 rounded-2xl p-4 animate-fade-in shadow-xl">
                    {navLinks.map(({ id, label }) => (
                        <button
                            key={id}
                            onClick={() => scrollTo(id)}
                            className="block w-full text-left px-4 py-3 text-sm font-medium text-gray-600 hover:text-lavender-700 hover:bg-lavender-50 rounded-xl transition-all cursor-pointer"
                        >
                            {label}
                        </button>
                    ))}
                </nav>
            )}
        </header>
    )
}
