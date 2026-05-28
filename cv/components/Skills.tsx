import { ResumeSkill } from '../lib/resume'

interface Props {
    skills: ResumeSkill[]
}

export default function Skills({ skills }: Props) {
    return (
        <section className="mt-12">
            <h2 className="text-xl font-semibold border-b border-gray-200 dark:border-gray-700 pb-2 mb-6 text-gray-900 dark:text-gray-100">Skills</h2>
            <div className="flex flex-col gap-4">
                {skills.map((skill) => (
                    <div key={skill.name}>
                        <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">{skill.name}</h3>
                        <div className="flex flex-wrap gap-2">
                            {skill.keywords.map((keyword) => (
                                <span
                                    key={keyword}
                                    className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs rounded"
                                >
                                    {keyword}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}