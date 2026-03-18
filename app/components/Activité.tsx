'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Radio, MessageSquare, Video, Calendar } from 'lucide-react'

const channels = [
    {
        icon: MessageSquare,
        title: 'Communication Digitale (Réseaux sociaux)',
        desc: "Notre initiative s’étant donné le challenge de rallier tous les passionnés via le net, notre mix communicationnel est plus basé sur les différents réseaux sociaux que sont Facebook et WhatsApp. Un réseau de partage et d’identification très actif qui a été initié et mis en place pour assurer le relai sur la toile. ",
    },
    {
        icon: Radio,
        title: 'Communication Radio',
        desc: 'En collaboration avec plusieurs radios du Bénin, les chansons des artistes promus sont diffusées durant toute la période. Entre autres partenaires media, nous pouvons citer les émissions telles que  Hip-Hop Horizon de la radio Carrefour dans le centre du pays, Rap Sentence de Radio Bénin Culture dans l’Ouémé et Top Star Urban Show de la radio Gerddès Fm toujours dans l’Ouémé. De nombreux autres radios et émissions sont actuellement en pourparlers avec les gestionnaires du projet afin de se hisser au rang des partenaires. Hip-Hop Horizon de la radio Carrefour dans le centre du pays, Rap Sentence de Radio Bénin Culture dans l’Ouémé et Top Star Urban Show de la radio Gerddès Fm toujours dans l’Ouémé. De nombreux autres radios et émissions sont actuellement en pourparlers avec les gestionnaires du projet afin de se hisser au rang des partenaires.',
    },
    {
        icon: Video,
        title: 'Communication Visuelle',
        desc: 'Une chaîne YouTube est dédiée spécialement pour le partage des différents spots publicitaires du  projet, le visuel de nos différents spectacles, des freestyles party…',
    },
]

const rubriques = [
    { day: 'Jeudi', action: "L’annonce de l’identité de l’artiste du numéro.", icon: '📢' },
    { day: 'Dimanche', action: 'Tout savoir sur l’artiste (biographie de l’artiste).', icon: '📖' },
    { day: 'Mardi', action: "Tchat avec l'artiste", icon: '💬' },
]

export default function Activities() {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-100px' })

    return (
        <section id="activites" className="section-padding bg-card/30 mt-40">
            <div className="max-w-7xl mx-auto" ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}>
                    <h2 className="text-3xl md:text-5xl font-extrabold tracking-[-0.03em] text-foreground mb-6">
                        Plan de{' '}
                        <span className="text-blue-500">communication</span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mb-16 text-lg">
                      Le plan de communication de l’UNDERGROUND BOUGE se subdivise en plusieurs catégories à savoir:
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
                            <p className="text-muted-foreground text-sm leading-relaxed">
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
                        <h3 className="text-2xl font-bold text-foreground">
                            Les différentes rubriques
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
