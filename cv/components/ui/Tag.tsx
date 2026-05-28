export default function Tag({ label }: { label: string }) {
    return (
        <span className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-medium tracking-wide bg-[var(--tag-bg)] text-[var(--tag-text)] border border-[var(--tag-border)]">
            {label}
        </span>
    )
}