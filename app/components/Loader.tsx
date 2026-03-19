'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

type LoaderProps = {
    finishLoading: () => void
}

export default function Loader({ finishLoading }: LoaderProps) {
    const loaderRef = useRef<HTMLDivElement | null>(null)
    const textRef = useRef<HTMLHeadingElement | null>(null)

    useEffect(() => {
        const tl = gsap.timeline({
            onComplete: finishLoading,
        })

        if (loaderRef.current && textRef.current) {
            tl.from(loaderRef.current, {
                opacity: 0,
                duration: 0.5,
            })
                .from(textRef.current, {
                    y: 60,
                    opacity: 0,
                    duration: 1,
                })
                .to(textRef.current, {
                    opacity: 0,
                    duration: 0.5,
                    delay: 0.5,
                })
                .to(loaderRef.current, {
                    y: '-100%',
                    duration: 1,
                    ease: 'power4.inOut',
                })
        }
    }, [finishLoading])

    return (
        <div
            ref={loaderRef}
            className="fixed inset-0 bg-black flex items-center justify-center z-9999">
            <h1
                ref={textRef}
                className="text-3xl sm:text-6xl md:text-8xl font-extrabold tracking-[-0.04em] leading-[0.9] mb-8 text-blue-500">
                Underground
            </h1>
            <h1
                ref={textRef}
                className="text-3xl mt-4 sm:text-6xl md:text-8xl font-extrabold tracking-[-0.04em] leading-[0.9] mb-8 text-red-500">
                Bouge ...
            </h1>
        </div>
    )
}
