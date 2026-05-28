interface Props {
    open: boolean
    size?: number
}

export default function ChevronToggle({ open, size = 18 }: Props) {
    return (
        <div style={{
            width: size, height: size, borderRadius: "50%",
            border: `1px solid ${open ? "var(--accent)" : "var(--border)"}`,
            background: open ? "var(--accent-subtle)" : "transparent",
            display: "flex", alignItems: "center", justifyContent: "center",
            flexShrink: 0, transition: "all 0.25s",
        }}>
            <svg
                width={size * 0.5} height={size * 0.5}
                viewBox="0 0 10 10" fill="none"
                style={{
                    transform: open ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                }}
            >
                <path d="M2 3.5 L5 6.5 L8 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </div>
    )
}