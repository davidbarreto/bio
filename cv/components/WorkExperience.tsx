import { ResumeWork } from '../lib/resume'
import Section from './ui/Section'

interface Props {
    work: ResumeWork[]
}

function formatDate(dateStr: string): string {
    const date = new Date(dateStr)
    return date.toLocaleDateString('en-GB', { month: 'short', year: 'numeric' })
}

export default function WorkExperience({ work }: Props) {
    return (
        <Section title="Work Experience">
            <div className="flex flex-col gap-8">
                {work.map((job) => (
                    <div key={`${job.name}-${job.startDate}`}>
                        <div className="flex justify-between items-start">
                            <div>
                                <h3 className="font-semibold text-gray-900 dark:text-gray-100">{job.position}</h3>
                                {job.url ? (
                                    <a href={job.url} className="text-blue-600 dark:text-blue-400 hover:underline text-sm">
                                        {job.name}
                                    </a>
                                ) : (
                                    <span className="text-sm text-gray-600 dark:text-gray-400">{job.name}</span>
                                )}
                            </div>
                            <span className="text-sm text-gray-400 dark:text-gray-500 whitespace-nowrap ml-4">
                                {formatDate(job.startDate)} — {job.endDate ? formatDate(job.endDate) : 'Present'}
                            </span>
                        </div>
                        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{job.summary}</p>
                        <ul className="mt-2 list-disc list-inside text-sm text-gray-700 dark:text-gray-300 flex flex-col gap-1">
                            {job.highlights.map((highlight, i) => (
                                <li key={i}>{highlight}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </Section>
    )
}