import { ResumeProject } from '../lib/resume'
import Tag from './ui/Tag'
import Section from './ui/Section'

interface Props {
  projects: ResumeProject[]
}

export default function Projects({ projects }: Props) {
  return (
    <Section title="Projects">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {projects.map(project => (
          <div key={project.name} style={{
            padding: '18px 22px',
            borderRadius: '10px',
            border: '1px solid var(--border)',
            background: 'var(--card-bg)',
          }}>
            <span style={{ fontWeight: 600, fontSize: '14px', color: 'var(--text-primary)' }}>
              {project.url ? (
                <a href={project.url} style={{ color: 'var(--text-primary)', textDecoration: 'none' }}>
                  {project.name}
                </a>
              ) : (
                project.name
              )}
            </span>
            <p style={{ marginTop: '6px', fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              {project.description}
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '10px' }}>
              {project.keywords.map(k => <Tag key={k} label={k} />)}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}