import { motion } from 'framer-motion'
import { projects } from '@/data/portfolio'
import { 
  Layers, 
  ArrowRight, 
  Box, 
  GitMerge,
  CheckCircle,
  Code2,
  Shield,
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

// Adapter Pattern Visualization
function AdapterPatternDiagram() {
  const steps = [
    { label: 'External Client', icon: Box, color: '#3b82f6' },
    { label: 'UUID Request', icon: ArrowRight, color: '#71717a', isArrow: true },
    { label: 'ID Translator (Adapter)', icon: GitMerge, color: '#f59e0b' },
    { label: 'Internal ID', icon: ArrowRight, color: '#71717a', isArrow: true },
    { label: 'Database', icon: Layers, color: '#22c55e' },
  ]

  return (
    <motion.div
      variants={itemVariants}
      className="bento-item p-6 md:p-8"
    >
      <div className="flex items-center gap-3 mb-6">
        <div 
          className="p-2 rounded-lg"
          style={{ backgroundColor: 'rgba(245, 158, 11, 0.15)' }}
        >
          <GitMerge size={24} style={{ color: '#f59e0b' }} />
        </div>
        <div>
          <h3 
            className="text-xl font-bold"
            style={{ 
              fontFamily: 'var(--font-display)',
              color: 'var(--color-snow)',
            }}
          >
            Adapter Pattern
          </h3>
          <p 
            className="text-sm"
            style={{ color: 'var(--color-ash)' }}
          >
            Schema Abstraction Layer
          </p>
        </div>
      </div>

      {/* Visual Flow */}
      <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 mb-6 py-4">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15, duration: 0.4 }}
            className={`flex items-center ${step.isArrow ? '' : 'flex-col'}`}
          >
            {step.isArrow ? (
              <step.icon 
                size={24} 
                style={{ color: step.color }} 
                className="mx-2"
              />
            ) : (
              <>
                <div 
                  className="p-3 rounded-lg mb-2"
                  style={{ 
                    backgroundColor: `${step.color}15`,
                    border: `1px solid ${step.color}40`,
                  }}
                >
                  <step.icon size={24} style={{ color: step.color }} />
                </div>
                <span 
                  className="text-xs font-mono text-center max-w-[80px]"
                  style={{ color: 'var(--color-silver)' }}
                >
                  {step.label}
                </span>
              </>
            )}
          </motion.div>
        ))}
      </div>

      {/* Code Preview */}
      <div 
        className="rounded-lg p-4 font-mono text-sm overflow-x-auto"
        style={{ backgroundColor: 'var(--color-void)' }}
      >
        <pre style={{ color: 'var(--color-silver)' }}>
          <span style={{ color: '#f59e0b' }}>public class</span>{' '}
          <span style={{ color: '#22c55e' }}>IdTranslatorAdapter</span>{' '}
          <span style={{ color: '#f59e0b' }}>implements</span>{' '}
          <span style={{ color: '#3b82f6' }}>IdResolver</span> {'{'}
          {'\n'}  <span style={{ color: 'var(--color-ash)' }}>// Translates external UUIDs to internal DB IDs</span>
          {'\n'}  <span style={{ color: '#f59e0b' }}>public</span> Long{' '}
          <span style={{ color: '#ec4899' }}>resolve</span>(UUID externalId) {'{'}
          {'\n'}    <span style={{ color: '#f59e0b' }}>return</span> repository.findByExternalId(externalId);
          {'\n'}  {'}'}
          {'\n'}{'}'}
        </pre>
      </div>

      {/* Benefits */}
      <div className="flex flex-wrap gap-2 mt-4">
        {['Schema Abstraction', 'Loose Coupling', 'API Stability'].map((benefit) => (
          <span
            key={benefit}
            className="flex items-center gap-1 px-3 py-1 rounded-full text-xs"
            style={{ 
              backgroundColor: 'rgba(245, 158, 11, 0.1)',
              color: '#f59e0b',
              border: '1px solid rgba(245, 158, 11, 0.2)',
            }}
          >
            <CheckCircle size={12} />
            {benefit}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

// Template Method Pattern Visualization
function TemplateMethodDiagram() {
  const abstractMethod = 'validateAndPersist()'
  const concreteClasses = [
    { name: 'PayloadValidator', step: 'validate()' },
    { name: 'SchemaValidator', step: 'checkSchema()' },
    { name: 'IntegrityValidator', step: 'persist()' },
  ]

  return (
    <motion.div
      variants={itemVariants}
      className="bento-item p-6 md:p-8"
    >
      <div className="flex items-center gap-3 mb-6">
        <div 
          className="p-2 rounded-lg"
          style={{ backgroundColor: 'rgba(168, 85, 247, 0.15)' }}
        >
          <Layers size={24} style={{ color: '#a855f7' }} />
        </div>
        <div>
          <h3 
            className="text-xl font-bold"
            style={{ 
              fontFamily: 'var(--font-display)',
              color: 'var(--color-snow)',
            }}
          >
            Template Method Pattern
          </h3>
          <p 
            className="text-sm"
            style={{ color: 'var(--color-ash)' }}
          >
            Validation & Persistence Framework
          </p>
        </div>
      </div>

      {/* Visual Hierarchy */}
      <div className="flex flex-col items-center mb-6">
        {/* Abstract Class */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="px-6 py-4 rounded-lg text-center mb-4"
          style={{ 
            backgroundColor: 'rgba(168, 85, 247, 0.15)',
            border: '2px solid #a855f7',
          }}
        >
          <span 
            className="text-xs font-mono block mb-1"
            style={{ color: 'var(--color-ash)' }}
          >
            abstract
          </span>
          <span 
            className="font-bold font-mono"
            style={{ color: '#a855f7' }}
          >
            AbstractValidator
          </span>
          <span 
            className="text-xs font-mono block mt-2"
            style={{ color: 'var(--color-silver)' }}
          >
            {abstractMethod}
          </span>
        </motion.div>

        {/* Inheritance Arrow */}
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          className="w-0.5 h-8"
          style={{ 
            backgroundColor: 'var(--color-steel)',
            transformOrigin: 'top',
          }}
        />

        {/* Concrete Classes */}
        <div className="flex flex-wrap justify-center gap-4">
          {concreteClasses.map((cls, index) => (
            <motion.div
              key={cls.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="px-4 py-3 rounded-lg text-center"
              style={{ 
                backgroundColor: 'var(--color-graphite)',
                border: '1px solid var(--color-steel)',
              }}
            >
              <span 
                className="font-semibold font-mono text-sm"
                style={{ color: 'var(--color-terminal)' }}
              >
                {cls.name}
              </span>
              <span 
                className="text-xs font-mono block mt-1"
                style={{ color: 'var(--color-ash)' }}
              >
                {cls.step}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Code Preview */}
      <div 
        className="rounded-lg p-4 font-mono text-sm overflow-x-auto"
        style={{ backgroundColor: 'var(--color-void)' }}
      >
        <pre style={{ color: 'var(--color-silver)' }}>
          <span style={{ color: '#a855f7' }}>public abstract class</span>{' '}
          <span style={{ color: '#22c55e' }}>AbstractValidator</span> {'{'}
          {'\n'}  <span style={{ color: '#a855f7' }}>public final void</span>{' '}
          <span style={{ color: '#ec4899' }}>validateAndPersist</span>(Data data) {'{'}
          {'\n'}    validate(data);
          {'\n'}    checkSchema(data);
          {'\n'}    persist(data);
          {'\n'}  {'}'}
          {'\n'}  <span style={{ color: '#a855f7' }}>protected abstract void</span>{' '}
          <span style={{ color: '#3b82f6' }}>validate</span>(Data data);
          {'\n'}{'}'}
        </pre>
      </div>

      {/* Benefits */}
      <div className="flex flex-wrap gap-2 mt-4">
        {['Code Reuse', 'Extensibility', 'Data Integrity'].map((benefit) => (
          <span
            key={benefit}
            className="flex items-center gap-1 px-3 py-1 rounded-full text-xs"
            style={{ 
              backgroundColor: 'rgba(168, 85, 247, 0.1)',
              color: '#a855f7',
              border: '1px solid rgba(168, 85, 247, 0.2)',
            }}
          >
            <CheckCircle size={12} />
            {benefit}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

export function PatternsLab() {
  const b2bProject = projects.find((p) => p.id === 'b2b-gateway')

  return (
    <section className="relative py-20 px-4">
      {/* Background Accent */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 30% 50%, rgba(168, 85, 247, 0.05) 0%, transparent 50%)',
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
            <Code2 style={{ color: 'var(--color-terminal)' }} size={24} />
            <h2 
              className="text-3xl md:text-4xl font-bold"
              style={{ 
                fontFamily: 'var(--font-display)',
                color: 'var(--color-snow)',
              }}
            >
              Design Patterns Lab
            </h2>
          </div>
          <p 
            className="text-lg max-w-2xl"
            style={{ color: 'var(--color-silver)' }}
          >
            Enterprise-grade design patterns implemented in the Secure B2B Integration Gateway.
          </p>
        </motion.div>

        {/* Project Context */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 p-6 rounded-xl flex items-start gap-4"
          style={{ 
            backgroundColor: 'var(--color-graphite)',
            border: '1px solid var(--color-steel)',
          }}
        >
          <Shield size={32} style={{ color: 'var(--color-terminal)' }} />
          <div>
            <h3 
              className="text-xl font-bold mb-2"
              style={{ 
                fontFamily: 'var(--font-display)',
                color: 'var(--color-snow)',
              }}
            >
              {b2bProject?.title}
            </h3>
            <p 
              className="text-sm mb-4"
              style={{ color: 'var(--color-silver)' }}
            >
              {b2bProject?.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {b2bProject?.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-full text-xs font-mono"
                  style={{ 
                    backgroundColor: 'rgba(34, 197, 94, 0.1)',
                    color: 'var(--color-terminal)',
                    border: '1px solid rgba(34, 197, 94, 0.2)',
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Pattern Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6"
        >
          <AdapterPatternDiagram />
          <TemplateMethodDiagram />
        </motion.div>
      </div>
    </section>
  )
}

