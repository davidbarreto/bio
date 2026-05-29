'use client'

import { useState } from 'react'
import { ResumeWork } from '../lib/resume'
import Tag from './ui/Tag'
import ChevronToggle from './ui/ChevronToggle'
import Section from './ui/Section'

interface Props {
    work: ResumeWork[]
}

function formatDate(dateStr: string): string {
    const date = new Date(dateStr)
    return date.toLocaleDateString('en-GB', { month: 'short', year: 'numeric' })
}

function WorkEntry({ job }: { job: ResumeWork }) {
    const [open, setOpen] = useState(false)

    return (
        <div
            style={{
                padding: '18px 22px',
                borderRadius: '10px',
                border: '1px solid var(--border)',
                background: 'var(--card-bg)',
                transition: 'border-color 0.2s',
                cursor: 'pointer',
                userSelect: 'none',
            }}
            onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--border-hover)')}
            onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--border)')}
            onClick={() => setOpen(o => !o)}
        >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                        <span style={{ fontWeight: 600, fontSize: '14px', color: 'var(--text-primary)' }}>
                            {job.position}
                        </span>
                        {!job.endDate && (
                            <span style={{
                                fontSize: '10px',
                                fontWeight: 600,
                                letterSpacing: '0.08em',
                                textTransform: 'uppercase',
                                color: 'var(--accent)',
                                background: 'var(--accent-subtle)',
                                padding: '2px 7px',
                                borderRadius: '999px',
                            }}>
                                Current
                            </span>
                        )}
                    </div>
                    <div style={{ fontSize: '12px', color: 'var(--text-secondary)', marginTop: '3px' }}>
                        {job.url ? (
                            <a
                                href={job.url}
                                onClick={e => e.stopPropagation()}
                                style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}
                                onMouseEnter={e => (e.currentTarget.style.color = 'var(--text-primary)')}
                                onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-secondary)')}
                            >
                                {job.name}
                            </a>
                        ) : (
                            <span>{job.name}</span>
                        )}
                    </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginLeft: '16px', flexShrink: 0 }}>
                    <span style={{ fontSize: '11px', color: 'var(--text-muted)', whiteSpace: 'nowrap', fontFamily: 'monospace' }}>
                        {formatDate(job.startDate)} — {job.endDate ? formatDate(job.endDate) : 'Present'}
                    </span>
                    <ChevronToggle open={open} size={18} />
                </div>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', marginTop: '10px' }}>
                {job.keywords.map(k => <Tag key={k} label={k} />)}
            </div>

            <div style={{
                overflow: 'hidden',
                maxHeight: open ? '600px' : '0',
                opacity: open ? 1 : 0,
                transition: 'opacity 0.2s ease, max-height 0.3s ease',
            }}>
                <div style={{ marginTop: '14px', paddingTop: '14px', borderTop: '1px solid var(--border)' }}>
                    <p style={{ fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '10px', lineHeight: 1.65 }}>
                        {job.summary}
                    </p>
                    <ul style={{ paddingLeft: '16px', margin: 0, display: 'flex', flexDirection: 'column', gap: '5px' }}>
                        {job.highlights.map((h, i) => (
                            <li key={i} style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{h}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default function WorkExperience({ work }: Props) {
    return (
        <Section title="Experience">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {work.map((job, i) => <WorkEntry key={i} job={job} />)}
            </div>
        </Section>
    )
}