import { useReveal } from '../utils/useReveal'

export default function LegalNotice() {
    const [ref, isVisible] = useReveal()

    return (
        <section id="aviso-legal" className="py-20">
            <div className="section">
                <div
                    ref={ref}
                    className={`max-w-3xl mx-auto bg-white rounded-3xl p-8 sm:p-10 shadow-lg shadow-lavender-200/20 border border-lavender-100 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'
                        }`}
                >
                    <h2 className="font-serif text-2xl font-bold text-gray-900 mb-6">
                        Aviso Legal
                    </h2>

                    <div className="prose prose-sm text-gray-600 space-y-4">
                        <h3 className="font-semibold text-gray-800 text-base">Titular del sitio</h3>
                        <p>
                            Este sitio web es propiedad de <strong>Elizabeth Fabiola Arellano Galicia</strong>,
                            Licenciada en Derecho titulada con Cédula Profesional expedida por la Universidad
                            Nacional Autónoma de México (UNAM), Facultad de Estudios Superiores Acatlán,
                            generación 2017.
                        </p>

                        <h3 className="font-semibold text-gray-800 text-base">Ejercicio profesional</h3>
                        <p>
                            Los servicios jurídicos ofrecidos a través de este sitio son proporcionados bajo
                            el ejercicio libre de la profesión de abogado, de conformidad con la legislación
                            mexicana aplicable.
                        </p>

                        <h3 className="font-semibold text-gray-800 text-base">Limitación de responsabilidad</h3>
                        <p>
                            La información publicada en este sitio web tiene carácter meramente informativo
                            y no constituye asesoría legal formal. Para obtener asesoría específica sobre
                            su caso, es necesario agendar una consulta formal.
                        </p>

                        <h3 className="font-semibold text-gray-800 text-base">Propiedad intelectual</h3>
                        <p>
                            Todo el contenido de este sitio web, incluyendo textos, logotipos, diseños y
                            material gráfico, está protegido por las leyes de propiedad intelectual de
                            México. Queda prohibida su reproducción sin autorización expresa.
                        </p>

                        <h3 className="font-semibold text-gray-800 text-base">Contacto</h3>
                        <p>
                            Para cualquier consulta sobre este aviso legal, puede comunicarse al correo:{' '}
                            <a href="mailto:fabyelyarga@gmail.com" className="text-lavender-600 underline">
                                fabyelyarga@gmail.com
                            </a>
                            {' '}o al teléfono{' '}
                            <a href="tel:+525584229355" className="text-lavender-600 underline">
                                55 8422 9355
                            </a>.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
