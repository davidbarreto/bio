'use client'

import { useState } from 'react'

interface Props {
    open: boolean
    onClick: () => void
}

export default function SpeechBubbleToggle({ open, onClick }: Props) {
    const [hovered, setHovered] = useState(false)

    return (
        <button
            onClick={onClick}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            title={open ? "Hide summary" : "Show summary"}
            style={{ background: "none", border: "none", cursor: "pointer", padding: 0, display: "inline-flex", alignItems: "center" }}
        >
            <svg width="28" height="25" viewBox="0 0 36 32" fill="none">
                <rect x="1" y="1" width="34" height="24" rx="6"
                    fill={open ? "var(--accent-subtle)" : "var(--card-bg)"}
                    stroke={hovered ? "var(--border-hover)" : open ? "var(--accent)" : "var(--border)"}
                    strokeWidth="1.5"
                    style={{ transition: "all 0.2s" }}
                />
                <path d="M10 25 L6 31 L16 25"
                    fill={open ? "var(--accent-subtle)" : "var(--card-bg)"}
                    stroke={hovered ? "var(--border-hover)" : open ? "var(--accent)" : "var(--border)"}
                    strokeWidth="1.5" strokeLinejoin="round"
                    style={{ transition: "all 0.2s" }}
                />
                {[10, 18, 26].map(cx => (
                    <circle key={cx} cx={cx} cy="13" r="2.2"
                        fill={open ? "var(--accent)" : hovered ? "var(--text-primary)" : "var(--text-muted)"}
                        style={{ transition: "fill 0.2s" }}
                    />
                ))}
            </svg>
        </button>
    )
}