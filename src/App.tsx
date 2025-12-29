import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SystemBoot } from '@/components/SystemBoot'
import { TerminalHero } from '@/components/TerminalHero'
import { WorkExperience } from '@/components/WorkExperience'
import { Projects } from '@/components/Projects'
import { SystemArchitecture } from '@/components/SystemArchitecture'
import { MetricsBentoGrid } from '@/components/MetricsBentoGrid'
import { SkillsMatrix } from '@/components/SkillsMatrix'
import { PatternsLab } from '@/components/PatternsLab'
import { AiMlInsights } from '@/components/AiMlInsights'
import { Footer } from '@/components/Footer'

function App() {
  const [isBooted, setIsBooted] = useState(false)

  return (
    <div className="min-h-screen relative" style={{ backgroundColor: 'var(--color-void)' }}>
      {/* System Boot Animation */}
      <SystemBoot onComplete={() => setIsBooted(true)} />

      {/* Main Content */}
      <AnimatePresence>
        {isBooted && (
          <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Background Grid Pattern */}
            <div className="fixed inset-0 grid-pattern opacity-30 pointer-events-none" />
            
            {/* Noise Overlay */}
            <div className="fixed inset-0 noise pointer-events-none" />

            {/* Navigation Bar */}
            <motion.nav
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="fixed top-0 left-0 right-0 z-40 px-4 py-4"
            >
              <div 
                className="max-w-7xl mx-auto px-6 py-3 rounded-xl glass"
                style={{ 
                  backdropFilter: 'blur(12px)',
                }}
              >
                <div className="flex items-center justify-between">
                  {/* Logo */}
                  <a href="#about" className="flex items-center gap-3">
                    <div 
                      className="w-8 h-8 rounded-lg flex items-center justify-center font-bold font-mono"
                      style={{ 
                        backgroundColor: 'var(--color-terminal)',
                        color: 'var(--color-void)',
                      }}
                    >
                      R
                    </div>
                    <span 
                      className="font-semibold hidden sm:block"
                      style={{ 
                        fontFamily: 'var(--font-display)',
                        color: 'var(--color-snow)',
                      }}
                    >
                      Ritesh.dev
                    </span>
                  </a>

                  {/* Nav Links */}
                  <div className="hidden md:flex items-center gap-6">
                    {[
                      { label: 'Experience', href: '#experience' },
                      { label: 'Projects', href: '#projects' },
                      { label: 'Skills', href: '#skills' },
                      { label: 'Metrics', href: '#metrics' },
                      { label: 'AI/ML', href: '#ai-ml' },
                    ].map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        className="text-sm font-mono hover:text-[var(--color-terminal)] transition-colors"
                        style={{ color: 'var(--color-silver)' }}
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>

                  {/* Status Indicator */}
                  <div className="flex items-center gap-2">
                    <div 
                      className="w-2 h-2 rounded-full pulse-glow"
                      style={{ backgroundColor: 'var(--color-terminal)' }}
                    />
                    <span 
                      className="text-xs font-mono hidden sm:block"
                      style={{ color: 'var(--color-terminal)' }}
                    >
                      ONLINE
                    </span>
                  </div>
                </div>
              </div>
            </motion.nav>

            {/* Hero Section */}
            <section id="about">
              <TerminalHero />
            </section>

            {/* Divider */}
            <div 
              className="h-px max-w-4xl mx-auto"
              style={{ 
                background: 'linear-gradient(90deg, transparent, var(--color-terminal), transparent)',
                opacity: 0.3,
              }}
            />

            {/* Work Experience Section */}
            <section id="experience">
              <WorkExperience />
            </section>

            {/* Projects Section */}
            <section id="projects">
              <Projects />
            </section>

            {/* System Architecture Section */}
            <section id="architecture">
              <SystemArchitecture />
            </section>

            {/* Metrics Section */}
            <section id="metrics">
              <MetricsBentoGrid />
            </section>

            {/* Skills Section */}
            <section id="skills">
              <SkillsMatrix />
            </section>

            {/* Patterns Lab Section */}
            <section id="patterns">
              <PatternsLab />
            </section>

            {/* AI/ML Section */}
            <section id="ai-ml">
              <AiMlInsights />
            </section>

            {/* Footer */}
            <Footer />
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  )
}

export default App
