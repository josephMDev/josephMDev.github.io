import { useEffect, useRef, useState } from 'react';

// Small feed-forward network drawn as line art. A signal path changes every few seconds
// with a pulse travelling along it; hovering a node shows its connections instead.
const layers = [3, 4, 4, 2];

const width = 280;
const height = 136;
const spacing = 40;
const cycleMs = 6000;
const pulseDur = '3s';

const x = (layer: number) => 12 + layer * ((width - 24) / (layers.length - 1));
const y = (layer: number, node: number) => height / 2 + (node - (layers[layer] - 1) / 2) * spacing;

const edges = layers.slice(1).flatMap((count, i) =>
  Array.from({ length: layers[i] }, (_, from) =>
    Array.from({ length: count }, (_, to) => ({ layer: i, from, to })),
  ).flat(),
);

const randomPath = () => layers.map((count) => Math.floor(Math.random() * count));

const prefersReducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

type NodeRef = { layer: number; node: number };

export const NetworkMotif = ({ className = '' }: { className?: string }) => {
  const [signal, setSignal] = useState([1, 2, 1, 0]);
  const [cycle, setCycle] = useState(0);
  const [hovered, setHovered] = useState<NodeRef | null>(null);
  const motionRef = useRef<SVGAnimateMotionElement>(null);
  const fadeRef = useRef<SVGAnimateElement>(null);

  // Pick a new path on an interval, paused while a node is hovered
  useEffect(() => {
    if (hovered || prefersReducedMotion()) return;
    const id = setInterval(() => {
      setSignal(randomPath());
      setCycle((c) => c + 1);
    }, cycleMs);
    return () => clearInterval(id);
  }, [hovered]);

  // Start the pulse for each new path
  useEffect(() => {
    if (prefersReducedMotion()) return;
    motionRef.current?.beginElement();
    fadeRef.current?.beginElement();
  }, [cycle]);

  const pulsePath = signal.map((node, layer) => `${layer ? 'L' : 'M'}${x(layer)} ${y(layer, node)}`).join(' ');

  const edgeActive = (layer: number, from: number, to: number) =>
    hovered
      ? (hovered.layer === layer && hovered.node === from) || (hovered.layer === layer + 1 && hovered.node === to)
      : signal[layer] === from && signal[layer + 1] === to;

  const nodeActive = (layer: number, node: number) =>
    hovered ? hovered.layer === layer && hovered.node === node : signal[layer] === node;

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className={className} fill="none" aria-hidden="true">
      {edges.map(({ layer, from, to }) => (
        <line
          key={`${layer}-${from}-${to}`}
          x1={x(layer)}
          y1={y(layer, from)}
          x2={x(layer + 1)}
          y2={y(layer + 1, to)}
          strokeWidth={1}
          className={`transition-colors duration-[1500ms] ${edgeActive(layer, from, to) ? 'stroke-ink/70' : 'stroke-muted/30'}`}
        />
      ))}

      {layers.map((count, layer) =>
        Array.from({ length: count }, (_, node) => (
          <g
            key={`${layer}-${node}`}
            onMouseEnter={() => setHovered({ layer, node })}
            onMouseLeave={() => setHovered(null)}
          >
            <circle
              cx={x(layer)}
              cy={y(layer, node)}
              r={4}
              strokeWidth={1.25}
              className={`transition-colors duration-[1500ms] ${nodeActive(layer, node) ? 'fill-ink stroke-ink' : 'fill-paper stroke-muted'}`}
            />
            <circle cx={x(layer)} cy={y(layer, node)} r={12} fill="transparent" />
          </g>
        )),
      )}

      {!hovered && (
        <circle key={cycle} r={2} className="fill-ink" opacity={0}>
          <animateMotion
            ref={motionRef}
            path={pulsePath}
            dur={pulseDur}
            begin="indefinite"
            fill="freeze"
            calcMode="spline"
            keyTimes="0;1"
            keyPoints="0;1"
            keySplines="0.4 0 0.2 1"
          />
          <animate
            ref={fadeRef}
            attributeName="opacity"
            values="0;1;1;0"
            keyTimes="0;0.15;0.8;1"
            dur={pulseDur}
            begin="indefinite"
            fill="freeze"
          />
        </circle>
      )}
    </svg>
  );
};
