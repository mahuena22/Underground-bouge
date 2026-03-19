'use client'

import { useEffect } from 'react'

export default function LoopText() {
    useEffect(() => {
        const repeatContent = (el: HTMLElement, till: number) => {
            const html = el.innerHTML
            let counter = 0

            while (el.offsetWidth < till && counter < 100) {
                el.innerHTML += html
                counter++
            }
        }

        document.querySelectorAll('.outer2').forEach(el => {
            const outer = el as HTMLElement
            const content = outer.querySelector('.content2') as HTMLElement
            const slider = outer.querySelector('.loop2') as HTMLElement

            if (content && slider) {
                repeatContent(content, outer.offsetWidth)
                slider.innerHTML = slider.innerHTML + slider.innerHTML
            }
        })
    }, [])

    return (
        <div className="outer2">
            <div>
                <div className="loop2">
                    <div className="content2 text-4xl bg-gray-300 text-blue-700">
                        UNDERGROUND <span className="text-red-500">BOUGE</span>{' '}
                        ...{' '}
                    </div>
                </div>
            </div>
        </div>
    )
}
