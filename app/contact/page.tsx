import Navbar from '../components/Navbar'
import PageBanner from '../components/PageBanner'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
export default function ContactPage() {
    return (
        <div>
            <Navbar />
            <PageBanner
                number="06"
                label="Contact"
                title="Entrons en contact"
                highlight="!"
                description="Vous avez des questions, des suggestions ou souhaitez collaborer avec nous ? N'hésitez pas à nous contacter via le formulaire ci-dessous ou par email. Nous sommes impatients de vous entendre !"
            />
            <Contact />
            <Footer />
        </div>
    )
}
