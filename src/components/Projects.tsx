import { motion } from 'framer-motion'
import { projects } from '@/data/portfolio'
import { 
  FolderGit2, 
  ExternalLink, 
  Server,
  Shield,
  Database,
  MessageSquare,
  Search,
  Layers,
  ArrowRight,
} from 'lucide-react'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 },
  },
}

// Get icon for technology
function getTechIcon(tech: string) {
  const techLower = tech.toLowerCase()
  if (techLower.includes('mysql') || techLower.includes('mongo') || techLower.includes('postgres')) {
    return Database
  }
  if (techLower.includes('rabbit') || techLower.includes('queue')) {
    return MessageSquare
  }
  if (techLower.includes('elastic') || techLower.includes('search')) {
    return Search
  }
  if (techLower.includes('docker') || techLower.includes('micro')) {
    return Layers
  }
  return Server
}

export function Projects() {
  return (
    <section className="relative py-20 px-4">
      {/* Background */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 20% 80%, rgba(59, 130, 246, 0.05) 0%, transparent 50%)',
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
            <FolderGit2 style={{ color: 'var(--color-terminal)' }} size={24} />
            <h2 
              className="text-3xl md:text-4xl font-bold"
              style={{ 
                fontFamily: 'var(--font-display)',
                color: 'var(--color-snow)',
              }}
            >
              Featured Projects
            </h2>
          </div>
          <p 
            className="text-lg max-w-2xl"
            style={{ color: 'var(--color-silver)' }}
          >
            Enterprise-grade applications showcasing scalable architecture and clean design patterns.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => {
            const isERP = project.id === 'erp-portal'
            const accentColor = isERP ? '#22c55e' : '#3b82f6'
            const Icon = isERP ? Server : Shield

            return (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="group relative"
              >
                {/* Card */}
                <div 
                  className="h-full rounded-2xl overflow-hidden"
                  style={{ 
                    backgroundColor: 'var(--color-obsidian)',
                    border: '1px solid var(--color-steel)',
                  }}
                >
                  {/* Header with Gradient */}
                  <div 
                    className="relative p-6 pb-8"
                    style={{
                      background: `linear-gradient(135deg, ${accentColor}15 0%, transparent 60%)`,
                    }}
                  >
                    {/* Project Number */}
                    <div 
                      className="absolute top-4 right-4 text-6xl font-bold opacity-10"
                      style={{ 
                        fontFamily: 'var(--font-mono)',
                        color: accentColor,
                      }}
                    >
                      0{index + 1}
                    </div>

                    {/* Icon & Title */}
                    <div className="relative z-10">
                      <div 
                        className="inline-flex p-3 rounded-xl mb-4"
                        style={{ 
                          backgroundColor: `${accentColor}20`,
                          border: `1px solid ${accentColor}40`,
                        }}
                      >
                        <Icon size={28} style={{ color: accentColor }} />
                      </div>

                      <h3 
                        className="text-xl md:text-2xl font-bold mb-2"
                        style={{ 
                          fontFamily: 'var(--font-display)',
                          color: 'var(--color-snow)',
                        }}
                      >
                        {project.title}
                      </h3>

                      <p 
                        className="text-sm leading-relaxed"
                        style={{ color: 'var(--color-silver)' }}
                      >
                        {project.description}
                      </p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 pt-0">
                    {/* Technologies */}
                    <div className="mb-6">
                      <h4 
                        className="text-xs font-semibold uppercase tracking-wider mb-3"
                        style={{ color: 'var(--color-ash)' }}
                      >
                        Tech Stack
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => {
                          const TechIcon = getTechIcon(tech)
                          return (
                            <motion.span
                              key={tech}
                              whileHover={{ scale: 1.05 }}
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono"
                              style={{ 
                                backgroundColor: `${accentColor}10`,
                                color: accentColor,
                                border: `1px solid ${accentColor}30`,
                              }}
                            >
                              <TechIcon size={12} />
                              {tech}
                            </motion.span>
                          )
                        })}
                      </div>
                    </div>

                    {/* Key Features */}
                    <div className="mb-6">
                      <h4 
                        className="text-xs font-semibold uppercase tracking-wider mb-3"
                        style={{ color: 'var(--color-ash)' }}
                      >
                        Key Features
                      </h4>
                      <ul className="space-y-2">
                        {project.highlights.slice(0, 3).map((highlight, hIndex) => (
                          <motion.li
                            key={hIndex}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 + hIndex * 0.1 }}
                            className="flex items-start gap-2"
                          >
                            <ArrowRight 
                              size={14} 
                              className="mt-1 flex-shrink-0"
                              style={{ color: accentColor }} 
                            />
                            <span 
                              className="text-sm leading-relaxed"
                              style={{ color: 'var(--color-silver)' }}
                            >
                              {highlight}
                            </span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Architecture Preview for ERP */}
                    {isERP && (
                      <div 
                        className="p-4 rounded-xl mb-4"
                        style={{ backgroundColor: 'var(--color-void)' }}
                      >
                        <div className="flex items-center justify-between text-xs mb-3">
                          <span style={{ color: 'var(--color-ash)' }}>Architecture Components</span>
                          <span style={{ color: accentColor }}>Microservices</span>
                        </div>
                        <div className="flex justify-between gap-2">
                          {['API Gateway', 'Services', 'Message Queue', 'Databases'].map((comp, i) => (
                            <div 
                              key={comp}
                              className="flex-1 text-center py-2 rounded-lg text-[10px] font-mono"
                              style={{ 
                                backgroundColor: `${accentColor}15`,
                                color: accentColor,
                                opacity: 1 - i * 0.15,
                              }}
                            >
                              {comp}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Design Patterns for B2B */}
                    {!isERP && (
                      <div 
                        className="p-4 rounded-xl mb-4"
                        style={{ backgroundColor: 'var(--color-void)' }}
                      >
                        <div className="flex items-center justify-between text-xs mb-3">
                          <span style={{ color: 'var(--color-ash)' }}>Design Patterns Used</span>
                          <span style={{ color: accentColor }}>OOD</span>
                        </div>
                        <div className="flex gap-2">
                          <div 
                            className="flex-1 text-center py-2 rounded-lg text-[10px] font-mono"
                            style={{ 
                              backgroundColor: `${accentColor}15`,
                              color: accentColor,
                            }}
                          >
                            Adapter Pattern
                          </div>
                          <div 
                            className="flex-1 text-center py-2 rounded-lg text-[10px] font-mono"
                            style={{ 
                              backgroundColor: `${accentColor}15`,
                              color: accentColor,
                            }}
                          >
                            Template Method
                          </div>
                        </div>
                      </div>
                    )}

                    {/* View Details Link */}
                    <motion.a
                      href={isERP ? '#architecture' : '#patterns'}
                      whileHover={{ x: 5 }}
                      className="inline-flex items-center gap-2 text-sm font-medium transition-colors"
                      style={{ color: accentColor }}
                    >
                      View {isERP ? 'Architecture' : 'Patterns'}
                      <ExternalLink size={14} />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p 
            className="text-sm"
            style={{ color: 'var(--color-ash)' }}
          >
            These projects demonstrate expertise in{' '}
            <span style={{ color: 'var(--color-terminal)' }}>distributed systems</span>,{' '}
            <span style={{ color: 'var(--color-terminal)' }}>microservices architecture</span>, and{' '}
            <span style={{ color: 'var(--color-terminal)' }}>enterprise design patterns</span>.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

