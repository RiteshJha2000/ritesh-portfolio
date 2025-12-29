import { motion } from 'framer-motion'
import { personalInfo } from '@/data/portfolio'
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin,
  Heart,
  Terminal,
  ArrowUpRight,
} from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { 
      icon: Github, 
      href: personalInfo.github, 
      label: 'GitHub',
      color: '#fff',
    },
    { 
      icon: Linkedin, 
      href: personalInfo.linkedin, 
      label: 'LinkedIn',
      color: '#0077b5',
    },
    { 
      icon: Mail, 
      href: `mailto:${personalInfo.email}`, 
      label: 'Email',
      color: '#ea4335',
    },
  ]

  return (
    <footer className="relative py-16 px-4">
      {/* Top Border */}
      <div 
        className="absolute top-0 left-0 right-0 h-px"
        style={{ 
          background: 'linear-gradient(90deg, transparent, var(--color-steel), transparent)',
        }}
      />

      <div className="max-w-7xl mx-auto">
        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
            style={{ 
              backgroundColor: 'rgba(34, 197, 94, 0.1)',
              border: '1px solid rgba(34, 197, 94, 0.2)',
            }}
          >
            <div 
              className="w-2 h-2 rounded-full pulse-glow"
              style={{ backgroundColor: 'var(--color-terminal)' }}
            />
            <span 
              className="text-sm font-mono"
              style={{ color: 'var(--color-terminal)' }}
            >
              AVAILABLE FOR OPPORTUNITIES
            </span>
          </motion.div>

          <h2 
            className="text-3xl md:text-5xl font-bold mb-4"
            style={{ 
              fontFamily: 'var(--font-display)',
              color: 'var(--color-snow)',
            }}
          >
            Let's Build Something
            <span style={{ color: 'var(--color-terminal)' }}> Great</span>
          </h2>
          <p 
            className="text-lg max-w-xl mx-auto mb-8"
            style={{ color: 'var(--color-silver)' }}
          >
            Open to discussing backend engineering roles, system design challenges, 
            or interesting collaboration opportunities.
          </p>

          <motion.a
            href={`mailto:${personalInfo.email}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-lg font-semibold transition-all"
            style={{ 
              backgroundColor: 'var(--color-terminal)',
              color: 'var(--color-void)',
            }}
          >
            <Mail size={20} />
            Get In Touch
            <ArrowUpRight size={18} />
          </motion.a>
        </motion.div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 
              className="text-sm font-mono uppercase tracking-wider mb-4"
              style={{ color: 'var(--color-ash)' }}
            >
              Contact
            </h3>
            <div className="space-y-3">
              <a 
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-3 text-sm hover:translate-x-1 transition-transform"
                style={{ color: 'var(--color-silver)' }}
              >
                <Mail size={16} style={{ color: 'var(--color-terminal)' }} />
                {personalInfo.email}
              </a>
              <a 
                href={`tel:${personalInfo.phone}`}
                className="flex items-center gap-3 text-sm hover:translate-x-1 transition-transform"
                style={{ color: 'var(--color-silver)' }}
              >
                <Phone size={16} style={{ color: 'var(--color-terminal)' }} />
                {personalInfo.phone}
              </a>
              <div 
                className="flex items-center gap-3 text-sm"
                style={{ color: 'var(--color-silver)' }}
              >
                <MapPin size={16} style={{ color: 'var(--color-terminal)' }} />
                {personalInfo.location}
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 
              className="text-sm font-mono uppercase tracking-wider mb-4"
              style={{ color: 'var(--color-ash)' }}
            >
              Navigation
            </h3>
            <div className="space-y-3">
              {[
                { label: 'About', href: '#about' },
                { label: 'Experience', href: '#experience' },
                { label: 'Projects', href: '#projects' },
                { label: 'Skills', href: '#skills' },
                { label: 'Metrics', href: '#metrics' },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block text-sm hover:translate-x-1 transition-transform"
                  style={{ color: 'var(--color-silver)' }}
                >
                  <span style={{ color: 'var(--color-terminal)' }}>→ </span>
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3 
              className="text-sm font-mono uppercase tracking-wider mb-4"
              style={{ color: 'var(--color-ash)' }}
            >
              Connect
            </h3>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 rounded-lg transition-all"
                  style={{ 
                    backgroundColor: 'var(--color-graphite)',
                    border: '1px solid var(--color-steel)',
                  }}
                  title={link.label}
                >
                  <link.icon size={20} style={{ color: 'var(--color-silver)' }} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div 
          className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
          style={{ borderTop: '1px solid var(--color-steel)' }}
        >
          <div className="flex items-center gap-2">
            <Terminal size={18} style={{ color: 'var(--color-terminal)' }} />
            <span 
              className="font-mono text-sm"
              style={{ color: 'var(--color-silver)' }}
            >
              {personalInfo.name}
            </span>
          </div>

          <div 
            className="flex items-center gap-2 text-sm"
            style={{ color: 'var(--color-ash)' }}
          >
            <span>Built with</span>
            <Heart size={14} style={{ color: 'var(--color-error)' }} fill="var(--color-error)" />
            <span>using React & Tailwind</span>
          </div>

          <span 
            className="text-sm font-mono"
            style={{ color: 'var(--color-ash)' }}
          >
            © {currentYear}
          </span>
        </div>
      </div>
    </footer>
  )
}

