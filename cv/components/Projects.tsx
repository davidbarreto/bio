import { ResumeProject } from '../lib/resume'

interface Props {
    projects: ResumeProject[]
}

export default function Projects({ projects }: Props) {
    return (
        <section className="mt-12">
            <h2 className="text-xl font-semibold border-b border-gray-200 dark:border-gray-700 pb-2 mb-6 text-gray-900 dark:text-gray-100">Projects</h2>
            <div className="flex flex-col gap-6">
                {projects.map((project) => (
                    <div key={project.name}>
                        <div className="flex items-center gap-2">
                            {project.url ? (
                                <a href={project.url} className="font-semibold text-blue-600 dark:text-blue-400 hover:underline">
                                    {project.name}
                                </a>
                            ) : (
                                <h3 className="font-semibold text-gray-900 dark:text-gray-100">{project.name}</h3>
                            )}
                        </div>
                        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mt-2">
                            {project.keywords.map((keyword) => (
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