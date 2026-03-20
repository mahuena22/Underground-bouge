import Navbar from '../components/Navbar'
import PageBanner from '../components/PageBanner'
import About from '../components/About'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
export default function AboutPage() {
    return (
        <div>
            <Navbar />
            <PageBanner
                number="02"
                label="About"
                title="À propos de nous"
                highlight="!"
                description="Underground Bouge,
                 promeut la culture urbaine via ateliers, performances et festivals, réunissant 
                 passionnés pour partager, créer et célébrer la créativité locale et internationale."
            />
            <About />
            <Contact />
            <Footer />
        </div>
    )
}
