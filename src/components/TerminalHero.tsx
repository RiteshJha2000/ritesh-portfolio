import { motion } from 'framer-motion'
import { useTypingEffect } from '@/hooks/useTypingEffect'
import { personalInfo } from '@/data/portfolio'
import { Github, Linkedin, Mail, MapPin, Terminal } from 'lucide-react'

export function TerminalHero() {
  const { displayText } = useTypingEffect({
    texts: personalInfo.taglines,
    typingSpeed: 60,
    deletingSpeed: 40,
    pauseDuration: 2500,
  })

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 grid-pattern" />
      
      {/* Gradient Overlays */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 0%, rgba(34, 197, 94, 0.08) 0%, transparent 50%)',
        }}
      />
      <div 
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background: 'linear-gradient(to top, var(--color-void), transparent)',
        }}
      />

      <div className="relative z-10 w-full max-w-5xl mx-auto">
        {/* System Status Bar */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center justify-between mb-8 px-4 py-2 rounded-lg"
          style={{ 
            backgroundColor: 'rgba(17, 17, 19, 0.6)',
            border: '1px solid var(--color-steel)',
          }}
        >
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <div 
                className="w-2 h-2 rounded-full pulse-glow"
                style={{ backgroundColor: 'var(--color-terminal)' }}
              />
              <span className="text-xs font-mono" style={{ color: 'var(--color-terminal)' }}>
                SYSTEM ONLINE
              </span>
            </div>
            <span className="text-xs" style={{ color: 'var(--color-ash)' }}>|</span>
            <span className="text-xs font-mono" style={{ color: 'var(--color-silver)' }}>
              {new Date().toLocaleString('en-US', { 
                weekday: 'short', 
                month: 'short', 
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
              })}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={12} style={{ color: 'var(--color-ash)' }} />
            <span className="text-xs font-mono" style={{ color: 'var(--color-silver)' }}>
              {personalInfo.location}
            </span>
          </div>
        </motion.div>

        {/* Main Terminal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="rounded-xl overflow-hidden"
          style={{ 
            backgroundColor: 'var(--color-obsidian)',
            border: '1px solid var(--color-steel)',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 100px rgba(34, 197, 94, 0.1)',
          }}
        >
          {/* Terminal Header */}
          <div 
            className="flex items-center justify-between px-4 py-3"
            style={{ 
              backgroundColor: 'var(--color-graphite)',
              borderBottom: '1px solid var(--color-steel)',
            }}
          >
            <div className="flex items-center gap-2">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full hover:brightness-110 transition-all cursor-pointer" style={{ backgroundColor: '#ff5f56' }} />
                <div className="w-3 h-3 rounded-full hover:brightness-110 transition-all cursor-pointer" style={{ backgroundColor: '#ffbd2e' }} />
                <div className="w-3 h-3 rounded-full hover:brightness-110 transition-all cursor-pointer" style={{ backgroundColor: '#27c93f' }} />
              </div>
              <div className="flex items-center gap-2 ml-4">
                <Terminal size={14} style={{ color: 'var(--color-terminal)' }} />
                <span className="text-sm font-mono" style={{ color: 'var(--color-silver)' }}>
                  ritesh@portfolio:~
                </span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <a 
                href={personalInfo.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
              >
                <Github size={18} style={{ color: 'var(--color-silver)' }} />
              </a>
              <a 
                href={personalInfo.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
              >
                <Linkedin size={18} style={{ color: 'var(--color-silver)' }} />
              </a>
              <a 
                href={`mailto:${personalInfo.email}`}
                className="hover:scale-110 transition-transform"
              >
                <Mail size={18} style={{ color: 'var(--color-silver)' }} />
              </a>
            </div>
          </div>

          {/* Terminal Content */}
          <div className="p-8 md:p-12 font-mono">
            {/* Greeting */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mb-4"
            >
              <span style={{ color: 'var(--color-terminal)' }}>$ </span>
              <span style={{ color: 'var(--color-ash)' }}>whoami</span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
              style={{ 
                fontFamily: 'var(--font-display)',
                color: 'var(--color-snow)',
              }}
            >
              {personalInfo.name}
            </motion.h1>

            {/* Typing Effect */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="flex items-center gap-2 mb-8"
            >
              <span style={{ color: 'var(--color-terminal)' }}>→ </span>
              <span 
                className="text-xl md:text-2xl terminal-glow"
                style={{ color: 'var(--color-terminal)' }}
              >
                {displayText}
              </span>
              <span 
                className="cursor-blink text-2xl"
                style={{ color: 'var(--color-terminal)' }}
              >
                █
              </span>
            </motion.div>

            {/* Summary */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="mb-8"
            >
              <span style={{ color: 'var(--color-terminal)' }}>$ </span>
              <span style={{ color: 'var(--color-ash)' }}>cat ./about.md</span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 }}
              className="text-base md:text-lg leading-relaxed max-w-3xl"
              style={{ 
                color: 'var(--color-silver)',
                fontFamily: 'var(--font-body)',
              }}
            >
              {personalInfo.summary}
            </motion.p>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10"
            >
              {[
                { label: 'Experience', value: '1+ Years' },
                { label: 'LeetCode', value: '1780+ Rating' },
                { label: 'Problems', value: '1200+ Solved' },
                { label: 'CGPA', value: '8.369/10' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.8 + index * 0.1 }}
                  className="p-4 rounded-lg text-center"
                  style={{ 
                    backgroundColor: 'var(--color-graphite)',
                    border: '1px solid var(--color-steel)',
                  }}
                >
                  <div 
                    className="text-2xl font-bold mb-1"
                    style={{ color: 'var(--color-terminal)' }}
                  >
                    {stat.value}
                  </div>
                  <div 
                    className="text-xs uppercase tracking-wider"
                    style={{ color: 'var(--color-ash)' }}
                  >
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2 }}
          className="flex flex-col items-center mt-12"
        >
          <span className="text-xs font-mono mb-2" style={{ color: 'var(--color-ash)' }}>
            SCROLL TO EXPLORE
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 rounded-full flex justify-center pt-2"
            style={{ border: '2px solid var(--color-steel)' }}
          >
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-3 rounded-full"
              style={{ backgroundColor: 'var(--color-terminal)' }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

