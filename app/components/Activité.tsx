'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Radio, MessageSquare, Video, Calendar } from 'lucide-react'

const channels = [
    {
        icon: MessageSquare,
        title: 'Communication Digitale',
        desc: 'Via Facebook et WhatsApp, notre initiative crée un réseau actif de partage et d’identification, rassemblant les passionnés et assurant un relais efficace de tous les contenus sur la toile.',
    },
    {
        icon: Radio,
        title: 'Communication Radio',
        desc: 'Les chansons des artistes sont diffusées sur plusieurs radios béninoises, dont Hip-Hop Horizon (Radio Carrefour), Rap Sentence (Radio Bénin Culture), Top Star Urban Show (Gerddès FM) avec d’autres partenaires en négociation.',
    },
    {
        icon: Video,
        title: 'Communication Visuelle',
        desc: 'Une chaîne est dédiée au projet pour partager les spots publicitaires, les visuels des spectacles, les freestyles party et tout contenu audiovisuel valorisant les activités et artistes du projet.',
    },
]

const rubriques = [
    { day: 'Jeudi', action: "Annonce de l'artiste", icon: '📢' },
    { day: 'Dimanche', action: 'Biographie complète', icon: '📖' },
    { day: 'Mardi', action: 'Tchat en direct', icon: '💬' },
]

export default function Activities() {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-100px' })

    return (
        <section
            id="activites"
            className=" section-padding text-white p-4 bg-card/30 mt-40">
            <div className="max-w-7xl mx-auto" ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}>
                    <h2 className="text-3xl md:text-5xl font-extrabold tracking-[-0.03em] text-white mb-6">
                        Plan de{' '}
                        <span className="text-blue-500">communication</span>
                    </h2>
                    <p className="text-white max-w-2xl mb-16 text-lg">
                        Un artiste est promu durant 3 jours par quinzaine, avec
                        une stratégie multi-canal complète.
                    </p>
                </motion.div>

                {/* Channels grid */}
                <div className="grid md:grid-cols-3 gap-px mb-20 overflow-hidden">
                    {channels.map((ch, i) => (
                        <motion.div
                            key={ch.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{
                                duration: 0.5,
                                delay: 0.1 * i,
                                ease: [0.16, 1, 0.3, 1],
                            }}
                            className="p-10 bg-background group hover:bg-secondary/30 transition-colors duration-200">
                            <ch.icon
                                className="text-blue-500 mb-6 group-hover:text-red-500 transition-colors duration-200"
                                size={32}
                            />
                            <h3 className="text-lg font-bold text-foreground mb-3 uppercase tracking-tight">
                                {ch.title}
                            </h3>
                            <p className="text-white text-sm leading-relaxed">
                                {ch.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Weekly schedule */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{
                        duration: 0.6,
                        delay: 0.3,
                        ease: [0.16, 1, 0.3, 1],
                    }}>
                    <div className="flex items-center gap-3 mb-8">
                        <Calendar className="text-blue-500" size={24} />
                        <h3 className="text-2xl font-bold text-white">
                            Programme hebdomadaire
                        </h3>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {rubriques.map((r, i) => (
                            <div
                                key={r.day}
                                className="glass-card p-8 hover:border-primary/30 transition-colors duration-200 group">
                                <div className="text-4xl mb-4">{r.icon}</div>
                                <div className="font-mono text-red-500 text-sm uppercase tracking-widest mb-2">
                                    {r.day}
                                </div>
                                <div className="text-foreground font-semibold text-lg">
                                    {r.action}
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
