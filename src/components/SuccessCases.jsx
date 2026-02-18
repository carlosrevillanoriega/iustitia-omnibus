import { useState, useEffect } from 'react'
import { FaTrophy, FaCalendarAlt } from 'react-icons/fa'
import { fetchFromSheet } from '../utils/googleSheets'
import { demoSuccessCases } from '../data/services'
import { useReveal } from '../utils/useReveal'

export default function SuccessCases() {
    const [cases, setCases] = useState(demoSuccessCases)
    const [ref, isVisible] = useReveal()

    useEffect(() => {
        async function loadCases() {
            const data = await fetchFromSheet('CasosExito')
            if (data && data.length > 0) setCases(data)
        }
        loadCases()
    }, [])

    return (
        <section id="casos" className="py-20 bg-gradient-to-b from-cream-50 to-lavender-50">
            <div className="section">
                <div ref={ref} className={`text-center mb-12 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
                    <span className="inline-block bg-lavender-100 text-lavender-700 px-4 py-1.5 rounded-full text-sm font-medium mb-4">
                        Resultados comprobables
                    </span>
                    <h2 className="section-title">Casos de Éxito</h2>
                    <p className="section-subtitle">
                        Resultados reales que demuestran nuestro compromiso con la justicia.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {cases.map((item, i) => (
                        <CaseCard key={item.id || i} item={item} index={i} />
                    ))}
                </div>
            </div>
        </section>
    )
}

function CaseCard({ item, index }) {
    const [ref, isVisible] = useReveal()

    return (
        <div
            ref={ref}
            className={`bg-white rounded-2xl p-6 card-hover border border-lavender-100 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
            style={{ animationDelay: `${index * 120}ms` }}
        >
            <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-100 to-amber-200 flex items-center justify-center">
                    <FaTrophy className="text-amber-600" />
                </div>
                <div>
                    <h3 className="font-serif text-lg font-semibold text-gray-900 leading-snug">
                        {item.title}
                    </h3>
                </div>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-4">
                {item.description}
            </p>
            <div className="flex items-center justify-between pt-4 border-t border-lavender-50">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-green-600 bg-green-50 px-3 py-1 rounded-full">
                    ✓ {item.result}
                </span>
                <span className="flex items-center gap-1 text-xs text-gray-400">
                    <FaCalendarAlt /> {item.date}
                </span>
            </div>
        </div>
    )
}
