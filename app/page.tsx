'use client'

import { useState, useEffect } from 'react'
import Loader from './components/Loader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Activité from './components/Activité'
import OpenShow from './components/Openshow'
import Impact from './components/Impact'
import Contact from './components/Contact'
import Footer from './components/Footer'

const Index = () => {
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        if (loading) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto'
        }
    }, [loading])

    return (
        <>
            {loading && <Loader finishLoading={() => setLoading(false)} />}

            <div className="min-h-screen bg-black text-white">
                <Navbar />
                <Hero />
                <About />
                <Activité />
                <OpenShow />
                <Impact />
                <Contact />
                <Footer />
            </div>
        </>
    )
}

export default Index
