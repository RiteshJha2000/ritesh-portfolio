import { useMemo } from 'react'
import {
  ReactFlow,
  Background,
  Controls,
  MiniMap,
  useNodesState,
  useEdgesState,
  ConnectionMode,
  Position,
  type Node,
  type Edge,
} from '@xyflow/react'
import '@xyflow/react/dist/style.css'
import { motion } from 'framer-motion'
import { projects } from '@/data/portfolio'
import { 
  Server, 
  Database, 
  Search, 
  MessageSquare, 
  Shield,
  Layers,
  GitBranch,
} from 'lucide-react'

// Custom Node Component
function CustomNode({ data }: { data: { label: string; type: string; description?: string } }) {
  const getIcon = () => {
    switch (data.type) {
      case 'gateway':
        return <Shield size={20} />
      case 'service':
        return <Server size={20} />
      case 'queue':
        return <MessageSquare size={20} />
      case 'database':
        return <Database size={20} />
      case 'search':
        return <Search size={20} />
      default:
        return <Layers size={20} />
    }
  }

  const getColors = () => {
    switch (data.type) {
      case 'gateway':
        return { bg: 'rgba(59, 130, 246, 0.15)', border: '#3b82f6', text: '#60a5fa' }
      case 'service':
        return { bg: 'rgba(34, 197, 94, 0.15)', border: '#22c55e', text: '#4ade80' }
      case 'queue':
        return { bg: 'rgba(249, 115, 22, 0.15)', border: '#f97316', text: '#fb923c' }
      case 'database':
        return { bg: 'rgba(168, 85, 247, 0.15)', border: '#a855f7', text: '#c084fc' }
      case 'search':
        return { bg: 'rgba(236, 72, 153, 0.15)', border: '#ec4899', text: '#f472b6' }
      default:
        return { bg: 'rgba(113, 113, 122, 0.15)', border: '#71717a', text: '#a1a1aa' }
    }
  }

  const colors = getColors()

  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.05 }}
      className="px-4 py-3 rounded-lg cursor-pointer min-w-[140px]"
      style={{
        backgroundColor: colors.bg,
        border: `2px solid ${colors.border}`,
        boxShadow: `0 0 20px ${colors.border}30`,
      }}
    >
      <div className="flex items-center gap-2">
        <span style={{ color: colors.text }}>{getIcon()}</span>
        <span 
          className="text-sm font-semibold font-mono"
          style={{ color: colors.text }}
        >
          {data.label}
        </span>
      </div>
      {data.description && (
        <p 
          className="text-xs mt-1 opacity-70"
          style={{ color: colors.text }}
        >
          {data.description}
        </p>
      )}
    </motion.div>
  )
}

const nodeTypes = {
  custom: CustomNode,
}

export function SystemArchitecture() {
  const erpProject = projects.find((p) => p.id === 'erp-portal')

  const initialNodes: Node[] = useMemo(() => [
    {
      id: 'client',
      type: 'custom',
      position: { x: 400, y: 0 },
      data: { label: 'Client Apps', type: 'gateway', description: 'Web & Mobile' },
      sourcePosition: Position.Bottom,
    },
    {
      id: 'api-gateway',
      type: 'custom',
      position: { x: 400, y: 100 },
      data: { label: 'API Gateway', type: 'gateway', description: 'Auth & Rate Limiting' },
      sourcePosition: Position.Bottom,
      targetPosition: Position.Top,
    },
    {
      id: 'payroll-service',
      type: 'custom',
      position: { x: 150, y: 220 },
      data: { label: 'Payroll Service', type: 'service', description: 'Spring Boot' },
      sourcePosition: Position.Bottom,
      targetPosition: Position.Top,
    },
    {
      id: 'hr-service',
      type: 'custom',
      position: { x: 400, y: 220 },
      data: { label: 'HR Service', type: 'service', description: 'Spring Boot' },
      sourcePosition: Position.Bottom,
      targetPosition: Position.Top,
    },
    {
      id: 'notification-service',
      type: 'custom',
      position: { x: 650, y: 220 },
      data: { label: 'Notification', type: 'service', description: 'Event Driven' },
      sourcePosition: Position.Bottom,
      targetPosition: Position.Top,
    },
    {
      id: 'rabbitmq',
      type: 'custom',
      position: { x: 400, y: 350 },
      data: { label: 'RabbitMQ', type: 'queue', description: 'Message Broker' },
      sourcePosition: Position.Bottom,
      targetPosition: Position.Top,
    },
    {
      id: 'mysql',
      type: 'custom',
      position: { x: 100, y: 480 },
      data: { label: 'MySQL', type: 'database', description: 'Transactions' },
      targetPosition: Position.Top,
    },
    {
      id: 'mongodb',
      type: 'custom',
      position: { x: 350, y: 480 },
      data: { label: 'MongoDB', type: 'database', description: 'Employee Data' },
      targetPosition: Position.Top,
    },
    {
      id: 'elasticsearch',
      type: 'custom',
      position: { x: 600, y: 480 },
      data: { label: 'Elasticsearch', type: 'search', description: 'Search Engine' },
      targetPosition: Position.Top,
    },
  ], [])

  const initialEdges: Edge[] = useMemo(() => [
    { id: 'e1', source: 'client', target: 'api-gateway', animated: true, style: { stroke: '#3b82f6', strokeWidth: 2 } },
    { id: 'e2', source: 'api-gateway', target: 'payroll-service', animated: true, style: { stroke: '#22c55e', strokeWidth: 2 } },
    { id: 'e3', source: 'api-gateway', target: 'hr-service', animated: true, style: { stroke: '#22c55e', strokeWidth: 2 } },
    { id: 'e4', source: 'api-gateway', target: 'notification-service', animated: true, style: { stroke: '#22c55e', strokeWidth: 2 } },
    { id: 'e5', source: 'payroll-service', target: 'rabbitmq', style: { stroke: '#f97316', strokeWidth: 2 } },
    { id: 'e6', source: 'hr-service', target: 'rabbitmq', style: { stroke: '#f97316', strokeWidth: 2 } },
    { id: 'e7', source: 'notification-service', target: 'rabbitmq', style: { stroke: '#f97316', strokeWidth: 2 } },
    { id: 'e8', source: 'payroll-service', target: 'mysql', style: { stroke: '#a855f7', strokeWidth: 2 } },
    { id: 'e9', source: 'hr-service', target: 'mongodb', style: { stroke: '#a855f7', strokeWidth: 2 } },
    { id: 'e10', source: 'hr-service', target: 'elasticsearch', style: { stroke: '#ec4899', strokeWidth: 2 } },
  ], [])

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges)

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
            <GitBranch style={{ color: 'var(--color-terminal)' }} size={24} />
            <h2 
              className="text-3xl md:text-4xl font-bold"
              style={{ 
                fontFamily: 'var(--font-display)',
                color: 'var(--color-snow)',
              }}
            >
              System Architecture
            </h2>
          </div>
          <p 
            className="text-lg max-w-2xl"
            style={{ color: 'var(--color-silver)' }}
          >
            Interactive visualization of the Distributed ERP Portal architecture.
            Hover and drag nodes to explore the system design.
          </p>
        </motion.div>

        {/* Architecture Diagram */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="rounded-xl overflow-hidden"
          style={{ 
            height: '650px',
            backgroundColor: 'var(--color-obsidian)',
            border: '1px solid var(--color-steel)',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
          }}
        >
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            nodeTypes={nodeTypes}
            connectionMode={ConnectionMode.Loose}
            fitView
            fitViewOptions={{ padding: 0.2 }}
            minZoom={0.5}
            maxZoom={1.5}
            attributionPosition="bottom-left"
          >
            <Background 
              color="rgba(34, 197, 94, 0.1)" 
              gap={30} 
              size={1}
            />
            <Controls 
              style={{
                backgroundColor: 'var(--color-graphite)',
                border: '1px solid var(--color-steel)',
                borderRadius: '8px',
              }}
            />
            <MiniMap 
              style={{
                backgroundColor: 'var(--color-graphite)',
                border: '1px solid var(--color-steel)',
              }}
              maskColor="rgba(0, 0, 0, 0.7)"
              nodeColor={(node) => {
                switch (node.data?.type) {
                  case 'gateway': return '#3b82f6'
                  case 'service': return '#22c55e'
                  case 'queue': return '#f97316'
                  case 'database': return '#a855f7'
                  case 'search': return '#ec4899'
                  default: return '#71717a'
                }
              }}
            />
          </ReactFlow>
        </motion.div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-6 mt-8"
        >
          {[
            { label: 'Gateway/Client', color: '#3b82f6', icon: Shield },
            { label: 'Microservice', color: '#22c55e', icon: Server },
            { label: 'Message Queue', color: '#f97316', icon: MessageSquare },
            { label: 'Database', color: '#a855f7', icon: Database },
            { label: 'Search Engine', color: '#ec4899', icon: Search },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-2">
              <div 
                className="p-1.5 rounded"
                style={{ backgroundColor: `${item.color}20` }}
              >
                <item.icon size={14} style={{ color: item.color }} />
              </div>
              <span 
                className="text-sm font-mono"
                style={{ color: 'var(--color-silver)' }}
              >
                {item.label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Project Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 p-6 rounded-xl"
          style={{ 
            backgroundColor: 'var(--color-graphite)',
            border: '1px solid var(--color-steel)',
          }}
        >
          <h3 
            className="text-xl font-bold mb-4"
            style={{ 
              fontFamily: 'var(--font-display)',
              color: 'var(--color-snow)',
            }}
          >
            {erpProject?.title}
          </h3>
          <div className="flex flex-wrap gap-2 mb-4">
            {erpProject?.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-full text-xs font-mono"
                style={{ 
                  backgroundColor: 'rgba(34, 197, 94, 0.15)',
                  color: 'var(--color-terminal)',
                  border: '1px solid rgba(34, 197, 94, 0.3)',
                }}
              >
                {tech}
              </span>
            ))}
          </div>
          <ul className="space-y-2">
            {erpProject?.highlights.map((highlight, index) => (
              <li 
                key={index}
                className="flex items-start gap-2 text-sm"
                style={{ color: 'var(--color-silver)' }}
              >
                <span style={{ color: 'var(--color-terminal)' }}>▹</span>
                {highlight}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  )
}

