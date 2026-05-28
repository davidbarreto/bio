import { ResumeEducation } from '../lib/resume'

interface Props {
    education: ResumeEducation[]
}

export default function Education({ education }: Props) {
    return (
        <section className="mt-12">
            <h2 className="text-xl font-semibold border-b border-gray-200 dark:border-gray-700 pb-2 mb-6 text-gray-900 dark:text-gray-100">Education</h2>
            <div className="flex flex-col gap-6">
                {education.map((entry) => (
                    <div key={entry.institution}>
                        <div className="flex justify-between items-start">
                            <div>
                                <h3 className="font-semibold text-gray-900 dark:text-gray-100">{entry.studyType} in {entry.area}</h3>
                                <a href={entry.url} className="text-blue-600 dark:text-blue-400 hover:underline text-sm">
                                    {entry.institution}
                                </a>
                            </div>
                            <span className="text-sm text-gray-400 dark:text-gray-500 whitespace-nowrap ml-4">
                                {entry.startDate.slice(0, 4)} — {entry.endDate.slice(0, 4)}
                            </span>
                        </div>
                        {entry.summary && (
                            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{entry.summary}</p>
                        )}
                    </div>
                ))}
            </div>
        </section>
    )
}