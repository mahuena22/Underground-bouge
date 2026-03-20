'use client'
import { motion } from 'framer-motion'

const ease = [0.16, 1, 0.3, 1] as const

interface PageBannerProps {
    number: string
    label: string
    title: string
    highlight?: string
    description?: string
}

export default function PageBanner({
    number,
    label,
    title,
    highlight,
    description,
}: PageBannerProps) {
    return (
        <section className="relative min-h-[50vh] md:min-h-[70vh] mt-20 flex flex-col justify-end overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/images/bann-bg.jpeg"
                    alt="Background Hero"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-background/80" />
            </div>

            {/* Optional Grid Background Overlay */}
            <div className="absolute inset-0 z-0 grid-bg opacity-20" />

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto w-full px-6 sm:px-8 md:px-12 pt-32 md:pt-48 pb-16">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease }}>
                    <span className="font-mono text-red-500 tracking-widest text-sm uppercase mb-4 block">
                        {number} — {label}
                    </span>

                    <h1 className="text-3xl mb-8 sm:text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-[-0.04em] leading-tight md:leading-[0.95] text-blue-500">
                        {title}
                        {highlight && (
                            <span className="text-blue-500"> {highlight}</span>
                        )}
                    </h1>

                    {description && (
                        <p className="max-w-2xl mt-6 mb-20 text-white text-base sm:text-lg md:text-xl leading-relaxed text-balance">
                            {description}
                        </p>
                    )}
                </motion.div>
            </div>
        </section>
    )
}
