import { FaWhatsapp } from 'react-icons/fa'

const WHATSAPP_URL =
    'https://wa.me/525584229355?text=Hola%20Licenciada%20Elizabeth%2C%20me%20interesa%20recibir%20asesor%C3%ADa.'

export default function FloatingWhatsApp() {
    return (
        <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
            style={{
                background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)'
            }}
        >
            <FaWhatsapp className="text-white text-2xl" />
        </a>
    )
}
