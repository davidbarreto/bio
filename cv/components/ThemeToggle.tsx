'use client'

import { useEffect, useState } from 'react'

export default function ThemeToggle() {
    const [dark, setDark] = useState(false)

    useEffect(() => {
        setDark(document.documentElement.classList.contains('dark'))
    }, [])

    function toggle() {
        const isDark = document.documentElement.classList.toggle('dark')
        try {
            localStorage.setItem('theme', isDark ? 'dark' : 'light')
        } catch (e) {}
        setDark(isDark)
    }

    return (
        <button
            type="button"
            onClick={toggle}
            aria-label="Toggle dark mode"
            className="relative z-10"
            style={{
                padding: '6px 14px',
                borderRadius: '8px',
                border: '1px solid var(--border)',
                background: 'var(--card-bg)',
                color: 'var(--text-secondary)',
                fontSize: '12px',
                cursor: 'pointer',
                fontFamily: 'monospace',
                letterSpacing: '0.05em',
                transition: 'all 0.2s',
            } as React.CSSProperties}
        >
            {dark ? '☀ Light' : '☾ Dark'}
        </button>
    )
}