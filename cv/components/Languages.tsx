interface Language {
    language: string
    fluency: string
}

interface Props {
    languages: Language[]
}

const fluencyOrder = ['Native', 'Full Professional', 'Professional working proficiency', 'Intermediate', 'Beginner']

export default function Languages({ languages }: Props) {
    const sorted = [...languages].sort(
        (a, b) => fluencyOrder.indexOf(a.fluency) - fluencyOrder.indexOf(b.fluency)
    )

    return (
        <section className="mt-12">
            <h2 className="text-xl font-semibold border-b border-gray-200 dark:border-gray-700 pb-2 mb-6 text-gray-900 dark:text-gray-100">Languages</h2>
            <div className="flex flex-col gap-2">
                {sorted.map((lang) => (
                    <div key={lang.language} className="flex justify-between text-sm">
                        <span className="font-medium text-gray-900 dark:text-gray-100">{lang.language}</span>
                        <span className="text-gray-500 dark:text-gray-400">{lang.fluency}</span>
                    </div>
                ))}
            </div>
        </section>
    )
}