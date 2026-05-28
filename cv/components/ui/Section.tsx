'use client'

import { useState } from 'react'
import ChevronToggle from './ChevronToggle'

interface Props {
    title: string
    defaultOpen?: boolean
    children: React.ReactNode
}

export default function Section({ title, defaultOpen = true, children }: Props) {
    const [open, setOpen] = useState(defaultOpen)

    return (
        <section className="mt-14">
            <button
                onClick={() => setOpen(o => !o)}
                className="flex items-center gap-3 w-full mb-0 border-none bg-transparent p-0 cursor-pointer text-left"
                style={{ marginBottom: open ? "24px" : "0", transition: "margin 0.25s" }}
            >
                <span className="text-[11px] font-semibold tracking-[0.12em] uppercase font-mono whitespace-nowrap"
                    style={{ color: "var(--accent)" }}>
                    {title}
                </span>
                <div className="flex-1 h-px" style={{ background: "var(--border)" }} />
                <ChevronToggle open={open} size={18} />
            </button>

            <div style={{
                overflow: "hidden",
                maxHeight: open ? "9999px" : "0",
                opacity: open ? 1 : 0,
                transition: "opacity 0.25s ease",
                pointerEvents: open ? "auto" : "none",
            }}>
                {children}
            </div>
        </section>
    )
}