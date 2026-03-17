'use client'
import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Send, Phone, MapPin } from 'lucide-react'

export default function Contact() {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-100px' })
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setSubmitted(true)
        setTimeout(() => setSubmitted(false), 3000)
    }

    return (
        <section
            id="contact"
            className="section-padding bg-background bg-black text-white mt-40">
            <div className="max-w-7xl mx-auto" ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}>
                    <h2 className="text-3xl md:text-5xl font-extrabold tracking-[-0.03em] text-foreground mb-16">
                        Rejoignez le{' '}
                        <span className="text-blue-500">mouvement</span>
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{
                            duration: 0.6,
                            delay: 0.2,
                            ease: [0.16, 1, 0.3, 1],
                        }}>
                        <p className="text-muted-foreground leading-relaxed mb-8 text-lg">
                            Vous êtes artiste, partenaire potentiel, ou
                            simplement passionné de musique urbaine ?
                            Contactez-nous pour collaborer.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 bg-primary/20 flex items-center justify-center rounded-sm">
                                    <Phone
                                        className="text-blue-500"
                                        size={18}
                                    />
                                </div>
                                <div>
                                    <div className="font-mono text-xs text-muted-foreground uppercase">
                                        Téléphone
                                    </div>
                                    <div className="text-foreground font-medium">
                                        +229 67 27 52 28 / 67 24 92 40
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 bg-primary/20 flex items-center justify-center rounded-sm">
                                    <MapPin
                                        className="text-blue-500"
                                        size={18}
                                    />
                                </div>
                                <div>
                                    <div className="font-mono text-xs text-muted-foreground uppercase">
                                        Lieu
                                    </div>
                                    <div className="text-foreground font-medium">
                                        Cotonou, Bénin
                                    </div>
                                </div>
                            </div>

                            <a
                                href="https://www.facebook.com/undergroundbougelevrai"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-blue-500 hover:text-red-500 transition-colors font-medium">
                                Suivez-nous sur Facebook →
                            </a>
                        </div>
                    </motion.div>

                    {/* Form */}
                    <motion.form
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0, x: 20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{
                            duration: 0.6,
                            delay: 0.3,
                            ease: [0.16, 1, 0.3, 1],
                        }}
                        className="glass-card p-8 space-y-6">
                        <div>
                            <label className="font-mono text-xs text-muted-foreground uppercase tracking-wider block mb-2">
                                Nom
                            </label>
                            <input
                                type="text"
                                required
                                className="w-full bg-background border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors"
                                placeholder="Votre nom complet"
                            />
                        </div>
                        <div>
                            <label className="font-mono text-xs text-muted-foreground uppercase tracking-wider block mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                required
                                className="w-full bg-background border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors"
                                placeholder="votre@email.com"
                            />
                        </div>
                        <div>
                            <label className="font-mono text-xs text-muted-foreground uppercase tracking-wider block mb-2">
                                Message
                            </label>
                            <textarea
                                required
                                rows={4}
                                className="w-full bg-background border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors resize-none"
                                placeholder="Votre message..."
                            />
                        </div>
                        <button
                            type="submit"
                            className="btn-action w-full flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 transition-colors py-3 text-sm">
                            {submitted ? (
                                'Message envoyé ✓'
                            ) : (
                                <>
                                    <Send size={16} />
                                    Envoyer
                                </>
                            )}
                        </button>
                    </motion.form>
                </div>
            </div>
        </section>
    )
}
