'use client'

import { motion, useInView } from 'framer-motion'
import { useState, useEffect, useRef, useMemo } from 'react'

const ease = [0.16, 1, 0.3, 1] as const

export default function Hero() {
    const stats = useMemo(
        () => [
            { target: 7, suffix: '+', label: 'Open Shows' },
            { target: 50, suffix: '+', label: 'Artistes promus' },
            { target: 150, suffix: '+', label: 'Spectateurs/show' },
            { target: 2017, suffix: '', label: 'Année de création' },
        ],
        []
    )

    const [counts, setCounts] = useState(() => stats.map(() => 0))
    const ref = useRef(null)
    const inView = useInView(ref, { once: false, margin: '-100px' })

    useEffect(() => {
        // Avoid React warning about synchronous setState inside an effect
        // by resetting counts via setTimeout (next tick)
        if (!inView) {
            const resetId = window.setTimeout(() => {
                setCounts(stats.map(() => 0))
            }, 0)
            return () => window.clearTimeout(resetId)
        }

        const intervals = stats.map((stat, index) => {
            const increment = Math.ceil(stat.target / 100)
            return window.setInterval(() => {
                setCounts(prevCounts => {
                    const next = [...prevCounts]
                    if (next[index] < stat.target) {
                        next[index] = Math.min(
                            next[index] + increment,
                            stat.target
                        )
                    }
                    return next
                })
            }, 30)
        })

        return () => intervals.forEach(window.clearInterval)
    }, [inView, stats])

    return (
        <section
            id="accueil"
            className="relative min-h-screen flex text-white flex-col justify-center overflow-hidden">
            {/* Background image */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: "url('/images/hero-bg.jpg')",
                }}
            />

            {/* overlay sombre */}
            <div className="absolute inset-0 bg-black/70" />

            {/* Grid overlay */}
            <div className="absolute inset-0 z-1  grid-bg opacity-30" />

            <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-12 pt-32 pb-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease }}>
                    <span className="font-mono text-red-500 hover:text-red-300 tracking-widest text-sm uppercase mb-6 block animate-pulse-glow">
                        ● Promotion musicale urbaine — Bénin
                    </span>

                    <h1 className="text-4xl sm:text-6xl md:text-8xl font-extrabold tracking-[-0.04em] leading-[0.9] mb-8 text-blue-500">
                        UNDERGROUND
                    </h1>
                    <h1 className="text-xl sm:text-6xl md:text-8xl font-extrabold tracking-[-0.04em] leading-[0.9] mb-8 text-red-500">
                        BOUGE
                    </h1>

                    <p className="max-w-2xl text-muted-foreground text-lg md:text-xl leading-relaxed mb-12 text-balance">
                        Un creuset dédié à la promotion des jeunes talents de la
                        musique urbaine béninoise. Révéler, accompagner et
                        propulser la nouvelle génération artistique.
                    </p>
                    <div className="flex flex-row gap-8">
                        <div className="flex flex-wrap gap-4 p-4 bg-red-500 rounded-3xl text-center ">
                            <a href="#activites" className="btn-action+">
                                Découvrir nos activités
                            </a>
                        </div>
                        <div className="flex flex-wrap gap-4  p-4 bg-white text-black rounded-3xl text-center  ">
                            <a href="#apropos" className="btn-ghost">
                                En savoir plus →
                            </a>
                        </div>
                    </div>
                </motion.div>

                {/* Stats bar */}
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease }}
                    className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-px bg-border/50 border border-border/50 rounded-sm overflow-hidden">
                    {stats.map((stat, index) => (
                        <div
                            key={stat.label}
                            className="bg-card/50 backdrop-blur-sm p-6 text-center">
                            <div className="font-mono text-2xl md:text-3xl font-bold text-primary">
                                {counts[index]}
                                {stat.suffix}
                            </div>
                            <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
