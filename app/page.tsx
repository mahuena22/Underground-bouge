import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Impact from './components/Impact'
import Contact from './components/Contact'
import Footer from './components/Footer'
const Index = () => {
    return (
        <div className="min-h-screen bg-black text-white">
            <Navbar />
            <Hero />
            <About />
            <Impact />
            <Contact />
            <Footer />
        </div>
    )
}

export default Index
