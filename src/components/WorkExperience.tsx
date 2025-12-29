import { motion } from 'framer-motion'
import { workExperience } from '@/data/portfolio'
import { 
  Briefcase, 
  Calendar, 
  Building2, 
  ChevronRight,
  Zap,
  ArrowUpRight,
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
  hidden: { opacity: 0, x: -30 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6 },
  },
}

export function WorkExperience() {
  return (
    <section className="relative py-20 px-4">
      {/* Background */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 80% 20%, rgba(34, 197, 94, 0.05) 0%, transparent 50%)',
        }}
      />

      <div className="relative max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <Briefcase style={{ color: 'var(--color-terminal)' }} size={24} />
            <h2 
              className="text-3xl md:text-4xl font-bold"
              style={{ 
                fontFamily: 'var(--font-display)',
                color: 'var(--color-snow)',
              }}
            >
              Work Experience
            </h2>
          </div>
          <p 
            className="text-lg max-w-2xl"
            style={{ color: 'var(--color-silver)' }}
          >
            My professional journey building enterprise software and AI systems.
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Vertical Line */}
          <div 
            className="absolute left-0 md:left-8 top-0 bottom-0 w-px"
            style={{ backgroundColor: 'var(--color-steel)' }}
          />

          {workExperience.map((job, index) => (
            <motion.div
              key={job.id}
              variants={itemVariants}
              className="relative pl-8 md:pl-20 pb-12 last:pb-0"
            >
              {/* Timeline Dot */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, type: 'spring' }}
                className="absolute left-0 md:left-8 -translate-x-1/2 w-4 h-4 rounded-full"
                style={{ 
                  backgroundColor: index === 0 ? 'var(--color-terminal)' : 'var(--color-steel)',
                  boxShadow: index === 0 ? '0 0 20px var(--color-terminal)' : 'none',
                }}
              />

              {/* Current Badge */}
              {index === 0 && (
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="absolute left-0 md:left-8 -translate-x-1/2 top-6 px-2 py-0.5 rounded text-[10px] font-mono"
                  style={{ 
                    backgroundColor: 'rgba(34, 197, 94, 0.2)',
                    color: 'var(--color-terminal)',
                    border: '1px solid var(--color-terminal)',
                  }}
                >
                  CURRENT
                </motion.div>
              )}

              {/* Card */}
              <motion.div
                whileHover={{ scale: 1.01, y: -2 }}
                className="bento-item p-6 md:p-8"
              >
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Building2 size={18} style={{ color: 'var(--color-terminal)' }} />
                      <span 
                        className="text-sm font-mono"
                        style={{ color: 'var(--color-terminal)' }}
                      >
                        {job.company}
                      </span>
                    </div>
                    <h3 
                      className="text-xl md:text-2xl font-bold mb-2"
                      style={{ 
                        fontFamily: 'var(--font-display)',
                        color: 'var(--color-snow)',
                      }}
                    >
                      {job.role}
                    </h3>
                    <div className="flex items-center gap-2">
                      <Calendar size={14} style={{ color: 'var(--color-ash)' }} />
                      <span 
                        className="text-sm"
                        style={{ color: 'var(--color-ash)' }}
                      >
                        {job.duration}
                      </span>
                    </div>
                  </div>

                  {/* Impact Badge */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg self-start"
                    style={{ 
                      backgroundColor: 'rgba(34, 197, 94, 0.1)',
                      border: '1px solid rgba(34, 197, 94, 0.3)',
                    }}
                  >
                    <Zap size={16} style={{ color: 'var(--color-terminal)' }} />
                    <span 
                      className="text-sm font-bold font-mono"
                      style={{ color: 'var(--color-terminal)' }}
                    >
                      {job.impactStat}
                    </span>
                  </motion.div>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {job.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full text-xs font-mono"
                      style={{ 
                        backgroundColor: 'var(--color-steel)',
                        color: 'var(--color-silver)',
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Highlights */}
                <div className="space-y-4">
                  <h4 
                    className="text-sm font-semibold uppercase tracking-wider"
                    style={{ color: 'var(--color-ash)' }}
                  >
                    Key Contributions
                  </h4>
                  <ul className="space-y-3">
                    {job.highlights.map((highlight, hIndex) => (
                      <motion.li
                        key={hIndex}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 + hIndex * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <ChevronRight 
                          size={16} 
                          className="mt-1 flex-shrink-0"
                          style={{ color: 'var(--color-terminal)' }} 
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
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

