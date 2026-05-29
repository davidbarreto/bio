import { ResumeSkill } from '../lib/resume'
import Section from './ui/Section'

interface Props {
    skills: ResumeSkill[]
}

export default function Skills({ skills }: Props) {
    return (
        <Section title="Skills">
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
        </Section>
    )
}