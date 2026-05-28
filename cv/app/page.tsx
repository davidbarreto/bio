// app/page.tsx
import { getResume } from '../lib/resume'
import WorkExperience from '../components/WorkExperience'
import Education from '../components/Education'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Languages from '../components/Languages'
import ThemeToggle from '../components/ThemeToggle'

export default function Home() {
  const resume = getResume()
  const { basics } = resume

  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <header>
        <div className="flex justify-end mb-8">
          <ThemeToggle />
        </div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">{basics.name}</h1>
        <p className="text-lg text-gray-500 dark:text-gray-400 mt-1">{basics.label}</p>
        <p className="mt-4 text-gray-700 dark:text-gray-300">{basics.summary}</p>

        <div className="mt-4 flex gap-4 text-sm">
          <a href={`mailto:${basics.email}`} className="text-blue-600 dark:text-blue-400 hover:underline">
            {basics.email}
          </a>
          <a href={basics.url} className="text-blue-600 dark:text-blue-400 hover:underline">
            {basics.url}
          </a>
        </div>

        <div className="mt-3 flex flex-wrap gap-3 text-sm">
          {basics.profiles.map((profile) => (
            <a
              key={profile.network}
              href={profile.url}
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              {profile.network}
            </a>
          ))}
        </div>
      </header>
      <WorkExperience work={resume.work} />
      <Education education={resume.education} />
      <Skills skills={resume.skills} />
      <Projects projects={resume.projects} />
      <Languages languages={resume.languages} />
    </main >
  )
}