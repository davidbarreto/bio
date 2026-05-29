'use client'

import { useState } from 'react'

interface Props {
    href: string
    label: string
    children: React.ReactNode
}

export default function CircleIcon({ href, label, children }: Props) {
    const [hovered, setHovered] = useState(false)

    return (
        <a
            href={href}
            title={label}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
                position: "relative",
                zIndex: 10,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "32px",
                height: "32px",
                borderRadius: "50%",
                border: hovered ? "1px solid var(--border-hover)" : "1px solid var(--border)",
                background: hovered ? "var(--tag-bg)" : "var(--card-bg)",
                color: hovered ? "var(--text-primary)" : "var(--text-secondary)",
                textDecoration: "none",
                transition: "all 0.15s",
                flexShrink: 0,
            }}
        >
            {children}
        </a>
    )
}