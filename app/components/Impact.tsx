'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Check, AlertTriangle } from 'lucide-react'

const avantages = [
    'Promouvoir les artistes',
    'Donner de la visibilité aux artistes',
    'Faciliter la relation Fans-Artistes à travers des échanges écrits',
    'Offrir des spectacles gratuits aux fans',
    "Offrir des scènes d'expression aux artistes",
    "Rehausser l'audience des radios partenaires",
    "Promouvoir divers produits des partenaires",
    'Impacter la fréquentation des lieux hôtes',
    "Promouvoir des marques de brasseries par le ‘PULL STRATEGY’;",
    "Impacter positivement le taux de fréquentation des lieux qui hébergent nos spectacles",
    "Etc. ..."
]

const challenges = [
    'Manque de partenaires commerciaux fiables',
    'Le retard des acteurs (Artistes, followers) dans l’exécution du conducteur du programme chaque quinzaine',
]

export default function Impact() {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-100px' })

    return (
        <section
            id="impact"
            className="section-padding bg-card/30 bg-black text-white mt-40">
            <div className="max-w-7xl mx-auto" ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}>
                    <h2 className="text-3xl md:text-5xl font-extrabold tracking-[-0.03em] text-foreground mb-16">
                        Notre <span className="text-blue-500">impact</span>
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Advantages */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{
                            duration: 0.6,
                            delay: 0.2,
                            ease: [0.16, 1, 0.3, 1],
                        }}
                        className="glass-card p-8 md:p-10">
                        <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-3">
                            <div className="w-8 h-8 bg-primary/20 flex items-center justify-center rounded-sm">
                                <Check className="text-blue-500" size={18} />
                            </div>
                            Avantages
                        </h3>
                        <div className="space-y-4">
                            {avantages.map(a => (
                                <div
                                    key={a}
                                    className="flex items-start gap-3 ">
                                    <Check
                                        className="text-blue-500 mt-0.5 shrink-0"
                                        size={16}
                                    />
                                    <span className="text-muted-foreground text-sm leading-relaxed">
                                        {a}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Challenges */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{
                            duration: 0.6,
                            delay: 0.3,
                            ease: [0.16, 1, 0.3, 1],
                        }}
                        className="glass-card p-8 md:p-10">
                        <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-3">
                            <div className="w-8 h-8 bg-accent/20 flex items-center justify-center rounded-sm">
                                <AlertTriangle
                                    className="text-red-500"
                                    size={18}
                                />
                            </div>
                            Challenges actuels
                        </h3>
                        <div className="space-y-4 mb-8">
                            {challenges.map(c => (
                                <div key={c} className="flex items-start gap-3">
                                    <AlertTriangle
                                        className="text-red-500 mt-0.5 shrink-0"
                                        size={16}
                                    />
                                    <span className="text-muted-foreground text-sm leading-relaxed">
                                        {c}
                                    </span>
                                </div>
                            ))}
                        </div>
                        <p className="text-muted-foreground text-sm leading-relaxed border-t border-border pt-6">
                            Néanmoins nous mettons tout en œuvre pour palier à ces différentes difficultés en nous associant à des marques et produits commerciaux fiables et surtout viables afin d’instaurer un vrai business dans le milieu du show.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
