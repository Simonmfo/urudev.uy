import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { Terminal, Cpu, Database, GitBranch, ShieldCheck, Zap } from 'lucide-react';

interface CodeSnippet {
  filename: string;
  lines: Array<{
    type: 'comment' | 'import' | 'keyword' | 'function' | 'string' | 'success';
    content: string;
  }>;
}

const SNIPPETS: CodeSnippet[] = [
  {
    filename: 'architecture.deploy.ts',
    lines: [
      { type: 'comment', content: '// urudev.uy :: Enterprise Architecture' },
      { type: 'import', content: "import { CloudCluster, HighAvailability } from '@urudev/core';" },
      { type: 'keyword', content: 'export const system = new CloudCluster({' },
      { type: 'string', content: "  region: 'paysandu-uy'," },
      { type: 'string', content: "  architecture: 'event-driven-microservices'," },
      { type: 'string', content: "  uptimeTarget: '99.99%'," },
      { type: 'keyword', content: '});' },
      { type: 'function', content: 'await system.provision({ zeroDowntime: true });' },
      { type: 'success', content: '✓ Cluster desplegado en producción · Latencia: 14ms' },
    ],
  },
  {
    filename: 'scalable-database.sql',
    lines: [
      { type: 'comment', content: '-- urudev.uy :: PostgreSQL ACID Engine' },
      { type: 'keyword', content: 'CREATE TABLE enterprise_transactions (' },
      { type: 'string', content: '  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),' },
      { type: 'string', content: '  status VARCHAR(32) NOT NULL DEFAULT \'ACTIVE\',' },
      { type: 'string', content: '  latency_ms NUMERIC(6, 2) NOT NULL DEFAULT 4.2' },
      { type: 'keyword', content: ');' },
      { type: 'function', content: 'CREATE INDEX CONCURRENTLY idx_throughput ON enterprise_transactions;' },
      { type: 'success', content: '✓ Integridad ACID y particionamiento activo' },
    ],
  },
];

export const HeroDevVisual: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [snippetIndex, setSnippetIndex] = useState(0);

  // Cycle snippets periodically
  useEffect(() => {
    const timer = setInterval(() => {
      setSnippetIndex((prev) => (prev + 1) % SNIPPETS.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  // Canvas interactive circuit and node animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 1200);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 650);

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener('resize', handleResize);

    // Nodes for tech mesh
    const nodeCount = Math.min(32, Math.floor(width / 35));
    const nodes: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      pulse: number;
      glow: string;
    }> = [];

    const colors = ['#005ff9', '#00b087', '#3b82f6', '#10b981'];

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        radius: Math.random() * 2 + 1.2,
        pulse: Math.random() * Math.PI,
        glow: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    // Light pulses traveling along connections
    interface Pulse {
      fromIndex: number;
      toIndex: number;
      progress: number;
      speed: number;
    }
    const pulses: Pulse[] = [];

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // 1. Draw subtle isometric grid lines
      ctx.strokeStyle = 'rgba(194, 198, 216, 0.12)';
      ctx.lineWidth = 1;
      const gridSize = 48;

      ctx.beginPath();
      for (let x = 0; x < width; x += gridSize) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
      }
      ctx.stroke();

      // 2. Update and draw nodes
      nodes.forEach((node) => {
        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;

        node.pulse += 0.03;
        const currentRadius = node.radius + Math.sin(node.pulse) * 0.6;

        ctx.beginPath();
        ctx.arc(node.x, node.y, currentRadius, 0, Math.PI * 2);
        ctx.fillStyle = node.glow;
        ctx.globalAlpha = 0.5 + Math.sin(node.pulse) * 0.25;
        ctx.fill();
        ctx.globalAlpha = 1;
      });

      // 3. Connect close nodes
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 140) {
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            const alpha = (1 - dist / 140) * 0.22;
            ctx.strokeStyle = `rgba(0, 95, 249, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();

            // Randomly spawn pulses on connected lines
            if (Math.random() < 0.003 && pulses.length < 12) {
              pulses.push({
                fromIndex: i,
                toIndex: j,
                progress: 0,
                speed: 0.015 + Math.random() * 0.02,
              });
            }
          }
        }
      }

      // 4. Update and render active pulses
      for (let p = pulses.length - 1; p >= 0; p--) {
        const pulse = pulses[p];
        pulse.progress += pulse.speed;

        if (pulse.progress >= 1) {
          pulses.splice(p, 1);
          continue;
        }

        const from = nodes[pulse.fromIndex];
        const to = nodes[pulse.toIndex];
        if (!from || !to) continue;

        const currentX = from.x + (to.x - from.x) * pulse.progress;
        const currentY = from.y + (to.y - from.y) * pulse.progress;

        ctx.beginPath();
        ctx.arc(currentX, currentY, 2.8, 0, Math.PI * 2);
        ctx.fillStyle = '#005ff9';
        ctx.shadowColor = '#005ff9';
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const currentSnippet = SNIPPETS[snippetIndex];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
      {/* 1. Interactive Technical Circuit Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-60 sm:opacity-80"
      />

      {/* 2. Soft Ambient Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[450px] bg-gradient-to-tr from-[#005ff9]/10 via-[#00b087]/8 to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* 3. Holographic Code Terminal Centered Behind Headline */}
      <div 
        className="absolute top-[48%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[980px] px-4 pointer-events-none"
        style={{
          maskImage: 'radial-gradient(ellipse 95% 75% at 50% 50%, black 35%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 95% 75% at 50% 50%, black 35%, transparent 100%)',
        }}
      >
        <motion.div
          key={snippetIndex}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="relative rounded-2xl bg-zinc-950/[0.025] border border-[#005ff9]/15 shadow-2xl p-6 sm:p-8 overflow-hidden text-left"
        >
          {/* Laser Scanline Effect */}
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-[#005ff9]/40 to-transparent animate-scanline pointer-events-none" />

          {/* Terminal Header */}
          <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#c2c6d8]/20">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]/60" />
              <span className="ml-2 font-mono-tech text-[11px] text-[#737687] flex items-center gap-1.5 font-medium">
                <Terminal className="w-3.5 h-3.5 text-[#005ff9]" />
                {currentSnippet.filename}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono-tech text-[#00604b] bg-[#aeffe3]/50 border border-[#00604b]/20 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-[#007b61] animate-pulse" />
                Live Engine
              </span>
            </div>
          </div>

          {/* Code Lines Display */}
          <div className="space-y-2 font-mono-tech text-[11px] sm:text-[13px] leading-relaxed opacity-25 select-none">
            {currentSnippet.lines.map((line, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <span className="text-[#999eb4] text-[10px] w-4 text-right select-none opacity-60">
                  {idx + 1}
                </span>
                <span
                  className={
                    line.type === 'comment'
                      ? 'text-zinc-500 italic'
                      : line.type === 'import'
                      ? 'text-[#0049c5] font-medium'
                      : line.type === 'keyword'
                      ? 'text-[#1c1b1b] font-semibold'
                      : line.type === 'function'
                      ? 'text-[#00604b] font-medium'
                      : line.type === 'success'
                      ? 'text-[#007b61] font-semibold bg-[#aeffe3]/30 px-1.5 rounded'
                      : 'text-[#424656]'
                  }
                >
                  {line.content}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* 4. Floating Satellite Technical Badges around Title */}
      {/* Floating Pill: Left */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="hidden md:flex absolute top-[18%] left-[4%] lg:left-[8%] items-center gap-2.5 px-3.5 py-2 rounded-xl bg-white/80 backdrop-blur-md border border-[#c2c6d8]/60 shadow-lg text-[12px] font-mono-tech text-[#1c1b1b]"
      >
        <div className="w-7 h-7 rounded-lg bg-[#dbe1ff]/60 flex items-center justify-center text-[#005ff9]">
          <GitBranch className="w-4 h-4" />
        </div>
        <div>
          <div className="font-bold flex items-center gap-1.5">
            <span>git::main</span>
            <span className="text-[10px] text-[#007b61] font-semibold bg-[#aeffe3]/50 px-1 rounded">
              deployed
            </span>
          </div>
          <div className="text-[10px] text-[#737687]">commit 8f3d · 14ms ping</div>
        </div>
      </motion.div>

      {/* Floating Pill: Right */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="hidden md:flex absolute top-[24%] right-[4%] lg:right-[8%] items-center gap-2.5 px-3.5 py-2 rounded-xl bg-white/80 backdrop-blur-md border border-[#c2c6d8]/60 shadow-lg text-[12px] font-mono-tech text-[#1c1b1b]"
      >
        <div className="w-7 h-7 rounded-lg bg-[#aeffe3]/50 flex items-center justify-center text-[#00604b]">
          <ShieldCheck className="w-4 h-4" />
        </div>
        <div>
          <div className="font-bold">Uptime 99.99%</div>
          <div className="text-[10px] text-[#737687]">SLA Garantizado en Nube</div>
        </div>
      </motion.div>

      {/* Floating Pill: Bottom Center Right */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="hidden lg:flex absolute bottom-[24%] right-[12%] items-center gap-2 px-3 py-1.5 rounded-lg bg-white/75 backdrop-blur-md border border-[#c2c6d8]/50 shadow-md text-[11px] font-mono-tech text-[#424656]"
      >
        <Cpu className="w-3.5 h-3.5 text-[#005ff9]" />
        <span>Microservicios · Cero Downtime</span>
      </motion.div>
    </div>
  );
};
