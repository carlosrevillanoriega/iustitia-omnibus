import { products } from '../data/services'
import { useReveal } from '../utils/useReveal'
import { FaArrowRight } from 'react-icons/fa'

function ProductCard({ product, index }) {
    const [ref, isVisible] = useReveal()

    return (
        <div
            ref={ref}
            className={`bg-white rounded-2xl p-6 card-hover border border-lavender-100 group ${isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
            style={{ animationDelay: `${index * 100}ms` }}
        >
            <div className="text-4xl mb-4">{product.icon}</div>
            <h3 className="font-serif text-lg font-semibold text-gray-900 mb-3">
                {product.title}
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-5">
                {product.description}
            </p>
            <button
                onClick={() => {
                    const el = document.getElementById('asesorias')
                    if (el) el.scrollIntoView({ behavior: 'smooth' })
                }}
                className="inline-flex items-center gap-2 text-sm font-semibold text-lavender-700 hover:text-lavender-900 transition-colors cursor-pointer"
            >
                Solicitar
                <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
            </button>
        </div>
    )
}

export default function Products() {
    const [ref, isVisible] = useReveal()

    return (
        <section id="productos" className="py-20">
            <div className="section">
                <div ref={ref} className={`text-center mb-12 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
                    <span className="inline-block bg-lavender-100 text-lavender-700 px-4 py-1.5 rounded-full text-sm font-medium mb-4">
                        Soluciones a tu medida
                    </span>
                    <h2 className="section-title">Productos Jurídicos</h2>
                    <p className="section-subtitle">
                        Documentos, trámites y servicios especializados para personas físicas y morales.
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {products.map((product, i) => (
                        <ProductCard key={product.id} product={product} index={i} />
                    ))}
                </div>
            </div>
        </section>
    )
}
