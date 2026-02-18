import { useState, useEffect } from 'react'
import { FaNewspaper, FaCalendarAlt, FaTag } from 'react-icons/fa'
import { fetchFromSheet } from '../utils/googleSheets'
import { demoNews } from '../data/services'
import { useReveal } from '../utils/useReveal'

export default function News() {
    const [news, setNews] = useState(demoNews)
    const [ref, isVisible] = useReveal()

    useEffect(() => {
        async function loadNews() {
            const data = await fetchFromSheet('Noticias')
            if (data && data.length > 0) setNews(data)
        }
        loadNews()
    }, [])

    return (
        <section id="noticias" className="py-20">
            <div className="section">
                <div ref={ref} className={`text-center mb-12 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
                    <span className="inline-block bg-lavender-100 text-lavender-700 px-4 py-1.5 rounded-full text-sm font-medium mb-4">
                        Mantente informado
                    </span>
                    <h2 className="section-title">Noticias y Artículos</h2>
                    <p className="section-subtitle">
                        Información jurídica relevante, promociones y artículos de análisis legal.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {news.map((item, i) => (
                        <NewsCard key={item.id || i} item={item} index={i} />
                    ))}
                </div>
            </div>
        </section>
    )
}

function NewsCard({ item, index }) {
    const [ref, isVisible] = useReveal()

    const categoryColors = {
        'Análisis Legal': 'bg-blue-50 text-blue-600',
        'Guía Jurídica': 'bg-emerald-50 text-emerald-600',
        'Promoción': 'bg-amber-50 text-amber-600',
    }

    const colorClass = categoryColors[item.category] || 'bg-lavender-50 text-lavender-600'

    return (
        <div
            ref={ref}
            className={`bg-white rounded-2xl card-hover border border-lavender-100 overflow-hidden ${isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
            style={{ animationDelay: `${index * 120}ms` }}
        >
            {/* Gradient header */}
            <div className="h-2 bg-gradient-to-r from-lavender-400 to-lavender-600" />

            <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                    <FaNewspaper className="text-lavender-400 text-sm" />
                    <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${colorClass}`}>
                        <FaTag className="inline mr-1 text-[10px]" />
                        {item.category}
                    </span>
                </div>

                <h3 className="font-serif text-lg font-semibold text-gray-900 mb-3 leading-snug">
                    {item.title}
                </h3>

                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                    {item.description}
                </p>

                <div className="flex items-center gap-1 text-xs text-gray-400">
                    <FaCalendarAlt />
                    {item.date}
                </div>
            </div>
        </div>
    )
}
