import { motion } from 'framer-motion'
import { 
  competitiveProgramming, 
  systemMetrics, 
  education, 
  achievements 
} from '@/data/portfolio'
import { 
  Trophy, 
  Code2, 
  Zap, 
  GraduationCap, 
  TrendingUp,
  Star,
  Award,
  Target,
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
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { duration: 0.5 },
  },
}

// Animated Counter Component
function AnimatedCounter({ 
  value, 
  suffix = '', 
  prefix = '',
  duration = 2 
}: { 
  value: number
  suffix?: string
  prefix?: string
  duration?: number
}) {
  return (
    <motion.span
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        {prefix}
      </motion.span>
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {value}
      </motion.span>
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        {suffix}
      </motion.span>
    </motion.span>
  )
}

// CP Platform Card
function CPCard({ 
  platform, 
  rating, 
  questions, 
  percentile, 
  icon, 
  color 
}: {
  platform: string
  rating: number
  questions?: number
  percentile: string
  icon: string
  color: string
}) {
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ scale: 1.02, y: -5 }}
      className="bento-item p-6 flex flex-col justify-between h-full"
    >
      <div>
        <div className="flex items-center justify-between mb-4">
          <span className="text-3xl">{icon}</span>
          <div 
            className="px-3 py-1 rounded-full text-xs font-mono"
            style={{ 
              backgroundColor: `${color}20`,
              color: color,
              border: `1px solid ${color}40`,
            }}
          >
            {percentile}
          </div>
        </div>
        <h3 
          className="text-lg font-bold mb-1"
          style={{ 
            fontFamily: 'var(--font-display)',
            color: 'var(--color-snow)',
          }}
        >
          {platform}
        </h3>
      </div>
      <div className="mt-4">
        <div 
          className="text-4xl font-bold font-mono"
          style={{ color }}
        >
          <AnimatedCounter value={rating} suffix="+" />
        </div>
        {questions && (
          <div className="flex items-center gap-2 mt-2">
            <Code2 size={14} style={{ color: 'var(--color-ash)' }} />
            <span 
              className="text-sm"
              style={{ color: 'var(--color-silver)' }}
            >
              {questions}+ Problems Solved
            </span>
          </div>
        )}
      </div>
    </motion.div>
  )
}

// Stat Card
function StatCard({ 
  value, 
  unit, 
  label, 
  description, 
  icon: Icon 
}: {
  value: number
  unit: string
  label: string
  description: string
  icon: React.ElementType
}) {
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ scale: 1.02 }}
      className="bento-item p-6"
    >
      <div className="flex items-start justify-between mb-4">
        <div 
          className="p-3 rounded-lg"
          style={{ backgroundColor: 'rgba(34, 197, 94, 0.1)' }}
        >
          <Icon size={24} style={{ color: 'var(--color-terminal)' }} />
        </div>
        <TrendingUp size={20} style={{ color: 'var(--color-terminal)' }} />
      </div>
      <div 
        className="text-4xl font-bold font-mono mb-2"
        style={{ color: 'var(--color-terminal)' }}
      >
        <AnimatedCounter value={value} suffix={unit} />
      </div>
      <h3 
        className="text-sm font-semibold mb-1"
        style={{ color: 'var(--color-snow)' }}
      >
        {label}
      </h3>
      <p 
        className="text-xs"
        style={{ color: 'var(--color-ash)' }}
      >
        {description}
      </p>
    </motion.div>
  )
}

export function MetricsBentoGrid() {
  const { leetcode, geeksforgeeks, codechef } = competitiveProgramming

  return (
    <section className="relative py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <Target style={{ color: 'var(--color-terminal)' }} size={24} />
            <h2 
              className="text-3xl md:text-4xl font-bold"
              style={{ 
                fontFamily: 'var(--font-display)',
                color: 'var(--color-snow)',
              }}
            >
              Performance Metrics
            </h2>
          </div>
          <p 
            className="text-lg max-w-2xl"
            style={{ color: 'var(--color-silver)' }}
          >
            Real-time dashboard of competitive programming achievements and impact metrics.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {/* LeetCode - Large Card */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.02, y: -5 }}
            className="bento-item p-6 md:col-span-2 lg:col-span-2"
          >
            <div className="flex items-start justify-between mb-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-4xl">🏆</span>
                  <div 
                    className="px-3 py-1 rounded-full text-xs font-mono font-bold"
                    style={{ 
                      backgroundColor: 'rgba(255, 161, 22, 0.15)',
                      color: '#ffa116',
                      border: '1px solid rgba(255, 161, 22, 0.3)',
                    }}
                  >
                    TOP 10%
                  </div>
                </div>
                <h3 
                  className="text-2xl font-bold"
                  style={{ 
                    fontFamily: 'var(--font-display)',
                    color: 'var(--color-snow)',
                  }}
                >
                  LeetCode
                </h3>
              </div>
              <Trophy size={32} style={{ color: '#ffa116' }} />
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <div 
                  className="text-5xl font-bold font-mono"
                  style={{ color: '#ffa116' }}
                >
                  {leetcode.rating}+
                </div>
                <p className="text-sm mt-1" style={{ color: 'var(--color-silver)' }}>
                  Contest Rating
                </p>
              </div>
              <div>
                <div 
                  className="text-5xl font-bold font-mono"
                  style={{ color: '#ffa116' }}
                >
                  {leetcode.questions}+
                </div>
                <p className="text-sm mt-1" style={{ color: 'var(--color-silver)' }}>
                  Problems Solved
                </p>
              </div>
            </div>
            {/* Progress Bar */}
            <div className="mt-6">
              <div className="flex justify-between text-xs mb-2">
                <span style={{ color: 'var(--color-ash)' }}>Progress to Guardian</span>
                <span style={{ color: '#ffa116' }}>89%</span>
              </div>
              <div 
                className="h-2 rounded-full overflow-hidden"
                style={{ backgroundColor: 'var(--color-steel)' }}
              >
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '89%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: 'easeOut' }}
                  className="h-full rounded-full"
                  style={{ backgroundColor: '#ffa116' }}
                />
              </div>
            </div>
          </motion.div>

          {/* GFG Card */}
          <CPCard
            platform={geeksforgeeks.platform}
            rating={geeksforgeeks.rating}
            questions={geeksforgeeks.questions}
            percentile={geeksforgeeks.percentile}
            icon={geeksforgeeks.icon}
            color={geeksforgeeks.color}
          />

          {/* CodeChef Card */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.02, y: -5 }}
            className="bento-item p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-3xl">{codechef.icon}</span>
              <div className="flex gap-1">
                {[...Array(codechef.stars)].map((_, i) => (
                  <Star key={i} size={16} fill="#ffa116" color="#ffa116" />
                ))}
              </div>
            </div>
            <h3 
              className="text-lg font-bold mb-1"
              style={{ 
                fontFamily: 'var(--font-display)',
                color: 'var(--color-snow)',
              }}
            >
              {codechef.platform}
            </h3>
            <div className="mt-4">
              <div 
                className="text-4xl font-bold font-mono"
                style={{ color: codechef.color }}
              >
                {codechef.rating}
              </div>
              <p 
                className="text-xs mt-2"
                style={{ color: 'var(--color-silver)' }}
              >
                {codechef.achievement}
              </p>
            </div>
          </motion.div>

          {/* Impact Stats Row */}
          <StatCard
            value={systemMetrics.latencyReduction.value}
            unit={systemMetrics.latencyReduction.unit}
            label={systemMetrics.latencyReduction.label}
            description={systemMetrics.latencyReduction.description}
            icon={Zap}
          />

          <StatCard
            value={systemMetrics.problemsSolved.value}
            unit={systemMetrics.problemsSolved.unit}
            label={systemMetrics.problemsSolved.label}
            description={systemMetrics.problemsSolved.description}
            icon={Code2}
          />

          {/* Academic Card */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            className="bento-item p-6 md:col-span-2"
          >
            <div className="flex items-start gap-4">
              <div 
                className="p-4 rounded-lg"
                style={{ backgroundColor: 'rgba(59, 130, 246, 0.1)' }}
              >
                <GraduationCap size={32} style={{ color: '#3b82f6' }} />
              </div>
              <div className="flex-1">
                <h3 
                  className="text-xl font-bold mb-1"
                  style={{ 
                    fontFamily: 'var(--font-display)',
                    color: 'var(--color-snow)',
                  }}
                >
                  Academic Excellence
                </h3>
                <p 
                  className="text-sm mb-4"
                  style={{ color: 'var(--color-silver)' }}
                >
                  {education.university}
                </p>
                <div className="flex items-baseline gap-4">
                  <div 
                    className="text-4xl font-bold font-mono"
                    style={{ color: '#3b82f6' }}
                  >
                    {education.cgpa}
                  </div>
                  <span style={{ color: 'var(--color-ash)' }}>/ {education.maxCgpa} CGPA</span>
                </div>
                <p 
                  className="text-xs mt-2"
                  style={{ color: 'var(--color-ash)' }}
                >
                  {education.degree} • {education.duration}
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Achievements Row */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4"
        >
          {achievements.map((achievement) => (
            <motion.div
              key={achievement.id}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="bento-item p-5 flex items-center gap-4"
            >
              <span className="text-3xl">{achievement.icon}</span>
              <div>
                <h4 
                  className="text-sm font-semibold"
                  style={{ color: 'var(--color-snow)' }}
                >
                  {achievement.title}
                </h4>
                <p 
                  className="text-xs"
                  style={{ color: 'var(--color-ash)' }}
                >
                  {achievement.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

