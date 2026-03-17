'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navLinks = [
    { label: 'Accueil', href: '#accueil' },
    { label: 'À propos', href: '#apropos' },
    { label: 'Activités', href: '#activites' },
    { label: 'Open Show', href: '#openshow' },
    { label: 'Impact', href: '#impact' },
    { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
    const [open, setOpen] = useState(false)

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 text-white backdrop-blur-xl border-b border-border/50">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
                <a href="#accueil" className="flex items-center gap-3">
                    <span className="font-bold text-lg tracking-tight text-white">
                        UNDERGROUND <span className="text-red-500">BOUGE</span>
                    </span>
                </a>

                {/* Desktop nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map(l => (
                        <a
                            key={l.href}
                            href={l.href}
                            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 tracking-wide uppercase">
                            {l.label}
                        </a>
                    ))}
                </div>

                <a
                    href="#contact"
                    className="hidden md:block btn-action text-sm py-2 px-6 bg-red-500 hover:bg-red-600 transition-colors">
                    Nous contacter
                </a>

                {/* Mobile toggle */}
                <button
                    onClick={() => setOpen(!open)}
                    className="md:hidden text-foreground">
                    {open ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile menu */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="md:hidden overflow-hidden bg-background/95 backdrop-blur-xl border-b border-border">
                        <div className="flex flex-col px-6 py-4 gap-4">
                            {navLinks.map(l => (
                                <a
                                    key={l.href}
                                    href={l.href}
                                    onClick={() => setOpen(false)}
                                    className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors uppercase tracking-wide">
                                    {l.label}
                                </a>
                            ))}
                            <a
                                href="#contact"
                                onClick={() => setOpen(false)}
                                className="btn-action text-sm text-center py-3">
                                Nous contacter
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    )
}
