'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Music, Users, Mic2, Trophy } from 'lucide-react'

const features = [
    { icon: Mic2, text: "Prestations d'artistes" },
    { icon: Music, text: 'Freestyles party' },
    { icon: Trophy, text: 'Battles face à face' },
    { icon: Users, text: 'Artistes confirmés invités' },
]

const gallery = [
    '/images/open-show1.jpg',
    '/images/open-show2.jpg',
    '/images/open-show3.jpg',
]

export default function OpenShow() {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-100px' })

    return (
        <section id="openshow" className="section-padding bg-background mt-40">
            <div className="max-w-7xl mx-auto" ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}>
                    <h2 className="text-3xl md:text-5xl font-extrabold tracking-[-0.03em] text-foreground mb-6">
                        Open <span className="text-blue-500">Show</span>
                    </h2>
                    <p className="text-gray-500 max-w-2xl mb-16 text-lg">
                        Un événement de promotion culturelle urbain, organisé
                        chaque quinzaine, offrant une scène dexpression aux
                        artistes.
                    </p>
                </motion.div>

                {/* Image gallery */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
                    {gallery.map((img, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={inView ? { opacity: 1, scale: 1 } : {}}
                            transition={{
                                duration: 0.5,
                                delay: 0.1 * i,
                                ease: [0.16, 1, 0.3, 1],
                            }}
                            className="glass-card overflow-hidden group">
                            <img
                                src={img}
                                alt={`Open Show ${i + 1}`}
                                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                        </motion.div>
                    ))}
                </div>

                {/* Features grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {features.map((f, i) => (
                        <motion.div
                            key={f.text}
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{
                                duration: 0.4,
                                delay: 0.4 + 0.1 * i,
                                ease: [0.16, 1, 0.3, 1],
                            }}
                            className="glass-card p-6 text-center hover:border-accent/30 transition-colors duration-200">
                            <f.icon
                                className="mx-auto text-blue-500 mb-3"
                                size={28}
                            />
                            <div className="text-sm font-medium text-foreground">
                                {f.text}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
