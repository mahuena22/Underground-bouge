import Navbar from '../components/Navbar'
import PageBanner from '../components/PageBanner'
import Activité from '../components/Activité'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
export default function ActivitéPage() {
    return (
        <div>
            <Navbar />
            <PageBanner
                number="03"
                label="Activité"
                title="Nos Activités"
                highlight="!"
                description="Découvrez les différentes activités que nous proposons. De l'atelier de musique à la performance en direct, rejoignez-nous pour vivre une expérience culturelle unique."
            />
            <Activité />
            <Contact />
            <Footer />
        </div>
    )
}
