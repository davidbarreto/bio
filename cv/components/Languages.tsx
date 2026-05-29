import { ResumeLanguage } from '../lib/resume'
import Section from './ui/Section'

interface Props {
    languages: ResumeLanguage[]
}

const FLUENCY_LEVELS: Record<string, number> = {
    'Native': 100,
    'Full Professional': 85,
    'Professional working proficiency': 75,
    'Intermediate': 50,
    'Beginner': 25,
}

function LanguageBar({ language, fluency }: ResumeLanguage) {
    const pct = FLUENCY_LEVELS[fluency] ?? 30

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '6px' }}>
                <span style={{ fontSize: '13px', fontWeight: 500, color: 'var(--text-primary)' }}>
                    {language}
                </span>
                <span style={{ fontSize: '10px', color: 'var(--text-muted)', fontFamily: 'monospace', letterSpacing: '0.04em' }}>
                    {fluency}
                </span>
            </div>
            <div style={{ height: '3px', borderRadius: '999px', background: 'var(--border)', overflow: 'hidden' }}>
                <div style={{
                    height: '100%',
                    width: `${pct}%`,
                    borderRadius: '999px',
                    background: 'var(--accent)',
                    transition: 'width 0.6s ease',
                }} />
            </div>
        </div>
    )
}

export default function Languages({ languages }: Props) {
    return (
        <Section title="Languages">
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                gap: '20px',
            }}>
                {languages.map(l => (
                    <LanguageBar key={l.language} language={l.language} fluency={l.fluency} />
                ))}
            </div>
        </Section>
    )
}