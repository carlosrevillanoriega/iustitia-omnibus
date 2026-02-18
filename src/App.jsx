import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Products from './components/Products'
import Consultations from './components/Consultations'
import Calendar from './components/Calendar'
import SuccessCases from './components/SuccessCases'
import News from './components/News'
import Footer from './components/Footer'
import PrivacyNotice from './components/PrivacyNotice'
import LegalNotice from './components/LegalNotice'
import FloatingWhatsApp from './components/FloatingWhatsApp'

export default function App() {
    <FloatingWhatsApp />

    return (
        <div className="min-h-screen">
            <Header />
            <main>
                <Hero />
                <Services />
                <Products />
                <Consultations />
                <Calendar />
                <SuccessCases />
                <News />
            </main>
            <Footer />
            <PrivacyNotice />
            <LegalNotice />
        </div>
    )
}
