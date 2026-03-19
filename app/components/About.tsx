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
            className="section-padding p-4 bg-white text-black ">
            <div className="max-w-7xl mx-auto" ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}>
                    <h2 className="text-3xl relative md:text-5xl top-10 mb-10 font-extrabold tracking-[-0.03em] text-gray-900 ">
                        Qui sommes-nous
                        <span className="text-accent text-[#FF3B3F] "> ?</span>
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
                        <p className="text-muted-foreground py-1 leading-relaxed mb-6">
                            Créé le{' '}
                            <span className="text-primary text-[#4DA8FF] font-semibold">
                                30 mai 2017
                            </span>
                            , Underground Bouge est un concept promotionnel
                            innovant dans l&apos;ère artistique et musicale
                            nationale béninoise.
                        </p>
                        <p className="text-muted-foreground leading-relaxed mb-6">
                            Parti d&apos;une idée de{' '}
                            <span className=" text-[#4DA8FF] font-semibold">
                                Kévin Prince HOUNDALO
                            </span>
                            , le projet s&apos;est donné pour but la promotion
                            de la jeune génération férue de musique urbaine au
                            Bénin.
                        </p>
                        <p className="text-muted-foreground leading-relaxed mb-8">
                            Underground Bouge révèle, suscite et accompagne la
                            promotion des artistes locaux, valorise
                            l&apos;effort culturel et artistique national, et
                            offre d&apos;intenses moments de détente aux
                            mélomanes.
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
                                    <div className="text-sm text-gray-900 font-medium mt-1">
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
                        <div className="glass-card  overflow-hidden rounded-lg ">
                            <img
                                src="/images/header1.png"
                                alt="Underground Bouge"
                                className="w-full h-auto -mt-20 object-cover"
                            />
                        </div>
                        <div className="absolute -bottom-4- top-80 -right-1 w-24 h-24 border-2 border-accent/30 rounded-sm" />
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
