import { useReveal } from '../utils/useReveal'

export default function PrivacyNotice() {
    const [ref, isVisible] = useReveal()

    return (
        <section id="aviso-privacidad" className="py-20 bg-gradient-to-b from-cream-50 to-lavender-50">
            <div className="section">
                <div
                    ref={ref}
                    className={`max-w-3xl mx-auto bg-white rounded-3xl p-8 sm:p-10 shadow-lg shadow-lavender-200/20 border border-lavender-100 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'
                        }`}
                >
                    <h2 className="font-serif text-2xl font-bold text-gray-900 mb-6">
                        Aviso de Privacidad
                    </h2>

                    <div className="prose prose-sm text-gray-600 space-y-4">
                        <p>
                            <strong>Elizabeth Fabiola Arellano Galicia</strong>, con domicilio en Santa Ana Tlacotenco, Milpa Alta, CDMX,
                            Ciudad de México, es responsable del tratamiento de los datos personales que usted
                            nos proporcione, los cuales serán protegidos conforme a lo dispuesto por la{' '}
                            <em>Ley Federal de Protección de Datos Personales en Posesión de los Particulares</em>{' '}
                            (LFPDPPP).
                        </p>

                        <h3 className="font-semibold text-gray-800 text-base">Datos personales que recabamos</h3>
                        <p>
                            Para las finalidades descritas, podemos recabar los siguientes datos personales:
                            nombre completo, número telefónico, correo electrónico, y descripción general del
                            asunto jurídico.
                        </p>

                        <h3 className="font-semibold text-gray-800 text-base">Finalidades del tratamiento</h3>
                        <p>Los datos personales que recabamos serán utilizados para:</p>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>Brindar asesoría jurídica personalizada</li>
                            <li>Dar seguimiento a solicitudes de consulta</li>
                            <li>Enviar información sobre servicios legales</li>
                            <li>Agendar citas y consultas</li>
                        </ul>

                        <h3 className="font-semibold text-gray-800 text-base">Derechos ARCO</h3>
                        <p>
                            Usted tiene derecho a Acceder, Rectificar, Cancelar u Oponerse al tratamiento de
                            sus datos personales (derechos ARCO). Para ejercer estos derechos, envíe un correo
                            electrónico a:{' '}
                            <a href="mailto:fabyelyarga@gmail.com" className="text-lavender-600 underline">
                                fabyelyarga@gmail.com
                            </a>
                        </p>

                        <h3 className="font-semibold text-gray-800 text-base">Transferencias de datos</h3>
                        <p>
                            Sus datos personales no serán transferidos a terceros sin su consentimiento, salvo
                            las excepciones previstas en la Ley.
                        </p>

                        <h3 className="font-semibold text-gray-800 text-base">Modificaciones al aviso</h3>
                        <p>
                            Este aviso de privacidad puede sufrir modificaciones, cambios o actualizaciones.
                            Las modificaciones estarán disponibles en este sitio web.
                        </p>

                        <p className="text-xs text-gray-400 mt-6">
                            Última actualización: Febrero 2025
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
