// components/ThemeToggle.tsx
'use client'

import { useEffect, useState } from 'react'

export default function ThemeToggle() {
    const [dark, setDark] = useState(false)

    useEffect(() => {
        setDark(document.documentElement.classList.contains('dark'))
    }, [])

    function toggle() {
        const isDark = document.documentElement.classList.toggle('dark')
        localStorage.setItem('theme', isDark ? 'dark' : 'light')
        setDark(isDark)
    }

    return (
        <button
            onClick={toggle}
            className="text-sm px-3 py-1 rounded border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        >
            {dark ? '☀ Light' : '☾ Dark'}
        </button>
    )
}