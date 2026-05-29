import { ResumeAward, ResumeCertificate } from '../lib/resume'
import Section from './ui/Section'

interface Props {
    awards: ResumeAward[]
    certificates: ResumeCertificate[]
}

type RecognitionItem = {
    title: string
    issuer: string
    date: string
    summary?: string
}

function RecognitionCard({ item }: { item: RecognitionItem }) {
    return (
        <div style={{
            padding: '16px 20px',
            borderRadius: '10px',
            border: '1px solid var(--border)',
            background: 'var(--card-bg)',
        }}>
            <p style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-primary)', margin: 0 }}>
                {item.title}
            </p>
            <p style={{ fontSize: '11px', color: 'var(--accent)', fontFamily: 'monospace', marginTop: '4px', letterSpacing: '0.04em' }}>
                {item.issuer} · {item.date}
            </p>
            {item.summary && (
                <p style={{ fontSize: '12px', color: 'var(--text-secondary)', marginTop: '8px', lineHeight: 1.6 }}>
                    {item.summary}
                </p>
            )}
        </div>
    )
}

export default function Recognition({ awards, certificates }: Props) {
    const items: RecognitionItem[] = [
        ...awards.map(a => ({ title: a.title, issuer: a.awarder, date: a.date, summary: a.summary })),
        ...certificates.map(c => ({ title: c.name, issuer: c.issuer, date: c.date, summary: c.summary })),
    ]

    return (
        <Section title="Recognition">
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                gap: '10px',
            }}>
                {items.map((item, i) => (
                    <RecognitionCard key={i} item={item} />
                ))}
            </div>
        </Section>
    )
}