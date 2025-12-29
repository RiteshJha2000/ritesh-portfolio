import { motion } from 'framer-motion'
import { aiMlProjects } from '@/data/portfolio'
import { 
  Brain, 
  Eye, 
  Mic, 
  Cpu, 
  Sparkles,
  Activity,
  Layers,
  Zap,
} from 'lucide-react'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: { duration: 0.6 },
  },
}

// Neural Network Animation
function NeuralNetworkAnimation() {
  const layers = [3, 5, 5, 3]
  
  return (
    <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
      <svg className="w-full h-full" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice">
        {layers.map((nodes, layerIndex) => {
          const x = 80 + layerIndex * 80
          return Array.from({ length: nodes }).map((_, nodeIndex) => {
            const y = 150 + (nodeIndex - (nodes - 1) / 2) * 40
            return (
              <g key={`${layerIndex}-${nodeIndex}`}>
                {/* Connections to next layer */}
                {layerIndex < layers.length - 1 &&
                  Array.from({ length: layers[layerIndex + 1] }).map((_, nextNodeIndex) => {
                    const nextY = 150 + (nextNodeIndex - (layers[layerIndex + 1] - 1) / 2) * 40
                    return (
                      <motion.line
                        key={`line-${layerIndex}-${nodeIndex}-${nextNodeIndex}`}
                        x1={x}
                        y1={y}
                        x2={x + 80}
                        y2={nextY}
                        stroke="var(--color-terminal)"
                        strokeWidth="0.5"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 0.3 }}
                        transition={{ 
                          duration: 2, 
                          delay: layerIndex * 0.3,
                          repeat: Infinity,
                          repeatType: 'reverse',
                        }}
                      />
                    )
                  })}
                {/* Node */}
                <motion.circle
                  cx={x}
                  cy={y}
                  r="6"
                  fill="var(--color-terminal)"
                  initial={{ scale: 0 }}
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ 
                    duration: 2, 
                    delay: layerIndex * 0.3 + nodeIndex * 0.1,
                    repeat: Infinity,
                  }}
                />
              </g>
            )
          })
        })}
      </svg>
    </div>
  )
}

// AI Project Card
function AiProjectCard({ 
  project 
}: { 
  project: typeof aiMlProjects.projects[0] 
}) {
  const isVision = project.type === 'Computer Vision'
  const Icon = isVision ? Eye : Mic
  const accentColor = isVision ? '#3b82f6' : '#ec4899'

  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ scale: 1.02, y: -5 }}
      className="bento-item p-6 relative overflow-hidden"
    >
      {/* Background Glow */}
      <div 
        className="absolute -top-20 -right-20 w-40 h-40 rounded-full blur-3xl opacity-20"
        style={{ backgroundColor: accentColor }}
      />

      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div 
            className="p-3 rounded-lg"
            style={{ backgroundColor: `${accentColor}15` }}
          >
            <Icon size={28} style={{ color: accentColor }} />
          </div>
          <span 
            className="px-3 py-1 rounded-full text-xs font-mono"
            style={{ 
              backgroundColor: `${accentColor}15`,
              color: accentColor,
              border: `1px solid ${accentColor}40`,
            }}
          >
            {project.type}
          </span>
        </div>

        {/* Title & Description */}
        <h3 
          className="text-xl font-bold mb-2"
          style={{ 
            fontFamily: 'var(--font-display)',
            color: 'var(--color-snow)',
          }}
        >
          {project.name}
        </h3>
        <p 
          className="text-sm mb-4 leading-relaxed"
          style={{ color: 'var(--color-silver)' }}
        >
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 rounded text-xs font-mono"
              style={{ 
                backgroundColor: 'var(--color-steel)',
                color: 'var(--color-silver)',
              }}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-3 gap-3">
          {Object.entries(project.metrics).map(([key, value]) => (
            <div 
              key={key}
              className="text-center p-3 rounded-lg"
              style={{ backgroundColor: 'var(--color-void)' }}
            >
              <div 
                className="text-lg font-bold font-mono"
                style={{ color: accentColor }}
              >
                {value}
              </div>
              <div 
                className="text-xs uppercase tracking-wider mt-1"
                style={{ color: 'var(--color-ash)' }}
              >
                {key}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export function AiMlInsights() {
  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Background Effects */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 70% 30%, rgba(236, 72, 153, 0.08) 0%, transparent 50%)',
        }}
      />
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 30% 70%, rgba(59, 130, 246, 0.08) 0%, transparent 50%)',
        }}
      />

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
            style={{ 
              backgroundColor: 'rgba(236, 72, 153, 0.1)',
              border: '1px solid rgba(236, 72, 153, 0.2)',
            }}
          >
            <Sparkles size={16} style={{ color: '#ec4899' }} />
            <span 
              className="text-sm font-mono"
              style={{ color: '#ec4899' }}
            >
              NEURAL SYSTEMS
            </span>
          </motion.div>

          <div className="flex items-center justify-center gap-3 mb-4">
            <Brain style={{ color: 'var(--color-terminal)' }} size={32} />
            <h2 
              className="text-3xl md:text-4xl font-bold"
              style={{ 
                fontFamily: 'var(--font-display)',
                color: 'var(--color-snow)',
              }}
            >
              {aiMlProjects.title}
            </h2>
          </div>
          <p 
            className="text-lg max-w-2xl mx-auto"
            style={{ color: 'var(--color-silver)' }}
          >
            {aiMlProjects.subtitle}
          </p>
        </motion.div>

        {/* AI Core Visualization */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative mb-12 rounded-2xl overflow-hidden"
          style={{ 
            backgroundColor: 'var(--color-obsidian)',
            border: '1px solid var(--color-steel)',
            minHeight: '200px',
          }}
        >
          <NeuralNetworkAnimation />
          
          {/* Core Status */}
          <div className="relative z-10 p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <motion.div
                animate={{ 
                  boxShadow: [
                    '0 0 20px rgba(34, 197, 94, 0.3)',
                    '0 0 40px rgba(34, 197, 94, 0.5)',
                    '0 0 20px rgba(34, 197, 94, 0.3)',
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="p-4 rounded-full"
                style={{ 
                  backgroundColor: 'rgba(34, 197, 94, 0.1)',
                  border: '2px solid var(--color-terminal)',
                }}
              >
                <Cpu size={32} style={{ color: 'var(--color-terminal)' }} />
              </motion.div>
              <div>
                <div className="flex items-center gap-2">
                  <div 
                    className="w-2 h-2 rounded-full pulse-glow"
                    style={{ backgroundColor: 'var(--color-terminal)' }}
                  />
                  <span 
                    className="text-sm font-mono"
                    style={{ color: 'var(--color-terminal)' }}
                  >
                    AI CORE ACTIVE
                  </span>
                </div>
                <h3 
                  className="text-xl font-bold mt-1"
                  style={{ color: 'var(--color-snow)' }}
                >
                  Machine Learning Systems
                </h3>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="flex gap-6">
              {[
                { icon: Activity, label: 'Models', value: '2+' },
                { icon: Layers, label: 'Frameworks', value: '5+' },
                { icon: Zap, label: 'Efficiency', value: '+20%' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <stat.icon 
                    size={20} 
                    style={{ color: 'var(--color-ash)' }} 
                    className="mx-auto mb-1"
                  />
                  <div 
                    className="text-xl font-bold font-mono"
                    style={{ color: 'var(--color-terminal)' }}
                  >
                    {stat.value}
                  </div>
                  <div 
                    className="text-xs"
                    style={{ color: 'var(--color-ash)' }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Project Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {aiMlProjects.projects.map((project) => (
            <AiProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

