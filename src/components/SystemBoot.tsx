import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { bootSequence } from '@/data/portfolio'

interface SystemBootProps {
  onComplete: () => void
}

export function SystemBoot({ onComplete }: SystemBootProps) {
  const [currentLine, setCurrentLine] = useState(0)
  const [lines, setLines] = useState<string[]>([])
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    if (currentLine < bootSequence.length) {
      const timer = setTimeout(() => {
        setLines((prev) => [...prev, bootSequence[currentLine].message])
        setCurrentLine((prev) => prev + 1)
      }, bootSequence[currentLine].delay)
      return () => clearTimeout(timer)
    } else {
      const completeTimer = setTimeout(() => {
        setIsComplete(true)
        setTimeout(onComplete, 800)
      }, 500)
      return () => clearTimeout(completeTimer)
    }
  }, [currentLine, onComplete])

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
          style={{ backgroundColor: 'var(--color-void)' }}
        >
          {/* Grid Background */}
          <div className="absolute inset-0 grid-pattern opacity-30" />
          
          {/* Scanlines */}
          <div className="absolute inset-0 scanlines opacity-50" />
          
          {/* CRT Vignette */}
          <div 
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.4) 100%)',
            }}
          />

          {/* Boot Terminal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative w-full max-w-2xl mx-4"
          >
            {/* Terminal Header */}
            <div 
              className="flex items-center gap-2 px-4 py-3 rounded-t-lg border-b"
              style={{ 
                backgroundColor: 'var(--color-graphite)',
                borderColor: 'var(--color-steel)',
              }}
            >
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: 'var(--color-error)' }} />
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: 'var(--color-warning)' }} />
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: 'var(--color-success)' }} />
              </div>
              <span 
                className="ml-4 text-sm font-mono"
                style={{ color: 'var(--color-silver)' }}
              >
                system_boot.sh — bash
              </span>
            </div>

            {/* Terminal Body */}
            <div 
              className="p-6 rounded-b-lg font-mono text-sm min-h-[300px]"
              style={{ 
                backgroundColor: 'var(--color-obsidian)',
                border: '1px solid var(--color-steel)',
                borderTop: 'none',
              }}
            >
              {/* ASCII Art Logo */}
              <motion.pre
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="text-xs mb-6 leading-tight"
                style={{ color: 'var(--color-terminal)' }}
              >
{`
  ██████╗ ██╗████████╗███████╗███████╗██╗  ██╗
  ██╔══██╗██║╚══██╔══╝██╔════╝██╔════╝██║  ██║
  ██████╔╝██║   ██║   █████╗  ███████╗███████║
  ██╔══██╗██║   ██║   ██╔══╝  ╚════██║██╔══██║
  ██║  ██║██║   ██║   ███████╗███████║██║  ██║
  ╚═╝  ╚═╝╚═╝   ╚═╝   ╚══════╝╚══════╝╚═╝  ╚═╝
                                     v2.0.24
`}
              </motion.pre>

              {/* Boot Messages */}
              <div className="space-y-1">
                {lines.map((line, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-center gap-2"
                  >
                    <span style={{ color: 'var(--color-terminal)' }}>[✓]</span>
                    <span style={{ color: 'var(--color-mercury)' }}>{line}</span>
                  </motion.div>
                ))}

                {/* Cursor */}
                {currentLine < bootSequence.length && (
                  <div className="flex items-center gap-2">
                    <span style={{ color: 'var(--color-terminal)' }}>[</span>
                    <motion.span
                      animate={{ opacity: [1, 0] }}
                      transition={{ duration: 0.5, repeat: Infinity }}
                      style={{ color: 'var(--color-terminal)' }}
                    >
                      ⠋
                    </motion.span>
                    <span style={{ color: 'var(--color-terminal)' }}>]</span>
                    <span style={{ color: 'var(--color-ash)' }}>Processing...</span>
                  </div>
                )}
              </div>

              {/* Progress Bar */}
              <div className="mt-8">
                <div className="flex justify-between text-xs mb-2">
                  <span style={{ color: 'var(--color-silver)' }}>System Boot Progress</span>
                  <span style={{ color: 'var(--color-terminal)' }}>
                    {Math.round((currentLine / bootSequence.length) * 100)}%
                  </span>
                </div>
                <div 
                  className="h-2 rounded-full overflow-hidden"
                  style={{ backgroundColor: 'var(--color-steel)' }}
                >
                  <motion.div
                    className="h-full rounded-full"
                    style={{ backgroundColor: 'var(--color-terminal)' }}
                    initial={{ width: '0%' }}
                    animate={{ width: `${(currentLine / bootSequence.length) * 100}%` }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Floating Particles */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full"
              style={{ backgroundColor: 'var(--color-terminal)' }}
              initial={{
                x: Math.random() * window.innerWidth,
                y: window.innerHeight + 10,
                opacity: 0.3,
              }}
              animate={{
                y: -10,
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: 'linear',
              }}
            />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  )
}

