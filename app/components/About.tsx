'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function About() {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-100px' })

    return (
        <section
            id="apropos"
            className="section-padding bg-black text-white mt-40">
            <div className="max-w-7xl mx-auto" ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}>
                    <h2 className="text-3xl md:text-5xl font-extrabold tracking-[-0.03em] text-foreground mb-12">
                        Qui sommes-nous
                        <span className="text-accent text-[#FF3B3F] ">?</span>
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{
                            duration: 0.6,
                            delay: 0.2,
                            ease: [0.16, 1, 0.3, 1],
                        }}>
                        <p className="text-muted-foreground leading-relaxed mb-6">
                            Créé le{' '}
                            <span className="text-primary text-[#4DA8FF] font-semibold">
                                30 mai 2017
                            </span>
                            , Underground Bouge est un concept promotionnel
                            innovant dans lère artistique et musicale nationale
                            béninoise.
                        </p>
                        <p className="text-muted-foreground leading-relaxed mb-6">
                            Parti dune idée de{' '}
                            <span className=" text-[#4DA8FF] font-semibold">
                                Kévin Prince HOUNDALO
                            </span>
                            , le projet sest donné pour but la promotion de la
                            jeune génération férue de musique urbaine au Bénin.
                        </p>
                        <p className="text-muted-foreground leading-relaxed mb-8">
                            Underground Bouge révèle, suscite et accompagne la
                            promotion des artistes locaux, valorise leffort
                            culturel et artistique national, et offre dintenses
                            moments de détente aux mélomanes.
                        </p>

                        <div className="grid grid-cols-2 gap-4">
                            {[
                                {
                                    role: 'Rédacteur',
                                    name: 'Kevin P. Houndalo',
                                },
                                { role: 'Photographe', name: 'Eyes Pictures' },
                                { role: 'Graphiste', name: 'Amour Allaba' },
                                {
                                    role: 'Prospection',
                                    name: 'Ezéckiel Houndénou',
                                },
                            ].map(member => (
                                <div
                                    key={member.role}
                                    className="glass-card p-4">
                                    <div className="font-mono text-xs text-[#FF3B3F] text-accent uppercase tracking-wider">
                                        {member.role}
                                    </div>
                                    <div className="text-sm text-foreground font-medium mt-1">
                                        {member.name}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{
                            duration: 0.6,
                            delay: 0.3,
                            ease: [0.16, 1, 0.3, 1],
                        }}
                        className="relative">
                        <div className="glass-card overflow-hidden">
                            <img
                                src="/images/logo.jpg"
                                alt="Underground Bouge"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                        <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-accent/30 rounded-sm" />
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
