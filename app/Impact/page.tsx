import Navbar from '../components/Navbar'
import PageBanner from '../components/PageBanner'
import Impact from '../components/Impact'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
export default function ImpactPage() {
    return (
        <div>
            <Navbar />
            <PageBanner
                number="05"
                label="Impact"
                title="Notre Impact"
                highlight="!"
                description="Découvrez l'impact de nos actions et des projets que nous menons. Rejoignez-nous pour contribuer à un changement positif dans notre communauté et au-delà."
            />
            <Impact />
            <Contact />
            <Footer />
        </div>
    )
}
