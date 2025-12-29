import { motion } from 'framer-motion'
import { skills } from '@/data/portfolio'
import { 
  Code, 
  Server, 
  Database, 
  Lightbulb, 
  Wrench,
  Terminal,
} from 'lucide-react'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.4 },
  },
}

const skillCategories = [
  { 
    key: 'languages', 
    title: 'Languages', 
    icon: Code, 
    color: '#3b82f6',
    data: skills.languages,
  },
  { 
    key: 'technologies', 
    title: 'Technologies', 
    icon: Server, 
    color: '#22c55e',
    data: skills.technologies,
  },
  { 
    key: 'databases', 
    title: 'Databases', 
    icon: Database, 
    color: '#a855f7',
    data: skills.databases,
  },
  { 
    key: 'concepts', 
    title: 'Core Concepts', 
    icon: Lightbulb, 
    color: '#f59e0b',
    data: skills.concepts,
  },
  { 
    key: 'tools', 
    title: 'Tools', 
    icon: Wrench, 
    color: '#ec4899',
    data: skills.tools,
  },
]

// Skill Tag Component
function SkillTag({ 
  skill, 
  color, 
  delay 
}: { 
  skill: string
  color: string
  delay: number 
}) {
  return (
    <motion.span
      variants={itemVariants}
      whileHover={{ 
        scale: 1.1, 
        boxShadow: `0 0 20px ${color}40`,
      }}
      className="px-4 py-2 rounded-lg font-mono text-sm cursor-default transition-all"
      style={{ 
        backgroundColor: `${color}15`,
        color: color,
        border: `1px solid ${color}30`,
      }}
    >
      {skill}
    </motion.span>
  )
}

export function SkillsMatrix() {
  return (
    <section className="relative py-20 px-4">
      {/* Background */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-50"
        style={{
          background: 'linear-gradient(180deg, var(--color-void) 0%, var(--color-obsidian) 50%, var(--color-void) 100%)',
        }}
      />

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <Terminal style={{ color: 'var(--color-terminal)' }} size={24} />
            <h2 
              className="text-3xl md:text-4xl font-bold"
              style={{ 
                fontFamily: 'var(--font-display)',
                color: 'var(--color-snow)',
              }}
            >
              Technical Arsenal
            </h2>
          </div>
          <p 
            className="text-lg max-w-2xl"
            style={{ color: 'var(--color-silver)' }}
          >
            A comprehensive toolkit built through hands-on experience in enterprise software development.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="bento-item p-6"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-5">
                <div 
                  className="p-2 rounded-lg"
                  style={{ backgroundColor: `${category.color}15` }}
                >
                  <category.icon size={20} style={{ color: category.color }} />
                </div>
                <h3 
                  className="text-lg font-semibold"
                  style={{ 
                    fontFamily: 'var(--font-display)',
                    color: 'var(--color-snow)',
                  }}
                >
                  {category.title}
                </h3>
              </div>

              {/* Skills */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-wrap gap-2"
              >
                {category.data.map((skill, skillIndex) => (
                  <SkillTag 
                    key={skill} 
                    skill={skill} 
                    color={category.color}
                    delay={skillIndex * 0.1}
                  />
                ))}
              </motion.div>
            </motion.div>
          ))}

          {/* Featured Experience Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bento-item p-6 md:col-span-2 lg:col-span-1"
          >
            <div className="h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div 
                    className="w-3 h-3 rounded-full pulse-glow"
                    style={{ backgroundColor: 'var(--color-terminal)' }}
                  />
                  <span 
                    className="text-xs font-mono uppercase tracking-wider"
                    style={{ color: 'var(--color-terminal)' }}
                  >
                    Current Focus
                  </span>
                </div>
                <h3 
                  className="text-xl font-bold mb-3"
                  style={{ 
                    fontFamily: 'var(--font-display)',
                    color: 'var(--color-snow)',
                  }}
                >
                  Enterprise Backend Systems
                </h3>
                <p 
                  className="text-sm leading-relaxed"
                  style={{ color: 'var(--color-silver)' }}
                >
                  Building scalable microservices, optimizing search performance, 
                  and implementing secure B2B integrations at Sirion.
                </p>
              </div>

              {/* Tech Stack Visualization */}
              <div className="mt-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono" style={{ color: 'var(--color-ash)' }}>
                    Primary Stack
                  </span>
                  <span className="text-xs" style={{ color: 'var(--color-terminal)' }}>
                    Java • Spring Boot • Golang
                  </span>
                </div>
                <div className="flex gap-1">
                  {['Java', 'Spring', 'Go', 'Docker', 'ES'].map((tech, i) => (
                    <motion.div
                      key={tech}
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6 + i * 0.1, duration: 0.3 }}
                      className="flex-1 h-2 rounded-full"
                      style={{ 
                        backgroundColor: 'var(--color-terminal)',
                        opacity: 1 - i * 0.15,
                        transformOrigin: 'left',
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

