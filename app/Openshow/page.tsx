import Navbar from '../components/Navbar'
import PageBanner from '../components/PageBanner'
import Openshow from '../components/Openshow'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
export default function OpenshowPage() {
    return (
        <div>
            <Navbar />
            <PageBanner
                number="04"
                label="Openshow"
                title="Openshow"
                highlight="!"
                description="Découvrez nos événements et spectacles ouverts à tous. Rejoignez-nous pour une expérience culturelle inédite et des performances exceptionnelles."
            />
            <Openshow />
            <Contact />
            <Footer />
        </div>
    )
}
