// Faint, hand-drawn system diagrams for the side margins, drawn tall to fit beside the content column.
// Shapes go through a turbulence filter for a sketched, whiteboard look; labels stay crisp.
const Label = ({ x, y, children, anchor = 'middle' }: { x: number; y: number; children: string; anchor?: 'start' | 'middle' }) => (
  <text x={x} y={y} textAnchor={anchor} dominantBaseline="central" className="fill-muted font-mono" fontSize={12}>
    {children}
  </text>
);

// Turbulence filter for the hand-drawn wobble, and an open arrowhead, under unique ids per diagram
const SketchDefs = ({ id, seed }: { id: string; seed: number }) => (
  <defs>
    <filter id={id}>
      <feTurbulence type="fractalNoise" baseFrequency="0.035" numOctaves="2" seed={seed} result="noise" />
      <feDisplacementMap in="SourceGraphic" in2="noise" scale="3" xChannelSelector="R" yChannelSelector="G" />
    </filter>
    <marker id={`${id}-arrow`} viewBox="0 0 10 10" refX="9" refY="5" markerWidth="9" markerHeight="9" orient="auto-start-reverse">
      <path d="M1 1L9 5L1 9" className="stroke-muted" fill="none" strokeWidth={1.2} />
    </marker>
  </defs>
);

// Horizontal cylinder (queue): side ellipse on the right, stripes for messages
const Queue = ({ x, y, w, h }: { x: number; y: number; w: number; h: number }) => {
  const rx = h / 4;
  return (
    <g>
      <path d={`M${x + rx} ${y}H${x + w - rx}a${rx} ${h / 2} 0 0 1 0 ${h}H${x + rx}a${rx} ${h / 2} 0 0 1 0 ${-h}Z`} />
      <ellipse cx={x + w - rx} cy={y + h / 2} rx={rx} ry={h / 2} />
      {[1, 2].map((i) => (
        <path key={i} d={`M${x + (w * i) / 3} ${y}a${rx} ${h / 2} 0 0 0 0 ${h}`} />
      ))}
    </g>
  );
};

// Vertical cylinder (database)
const Cylinder = ({ x, y, w, h }: { x: number; y: number; w: number; h: number }) => {
  const ry = 7;
  return (
    <g>
      <ellipse cx={x + w / 2} cy={y + ry} rx={w / 2} ry={ry} />
      <path d={`M${x} ${y + ry}V${y + h - ry}a${w / 2} ${ry} 0 0 0 ${w} 0V${y + ry}`} />
    </g>
  );
};

// Stack of offset cards (replicated servers)
const Stack = ({ x, y, w, h, count = 3 }: { x: number; y: number; w: number; h: number; count?: number }) => (
  <g>
    {Array.from({ length: count }, (_, i) => (
      <rect key={i} x={x + (count - 1 - i) * 6} y={y - (count - 1 - i) * 6} width={w} height={h} rx={2} className="fill-paper" />
    ))}
  </g>
);

const sketchProps = {
  className: 'stroke-muted',
  strokeWidth: 1.2,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
};

// Left margin: edge delivery and observability
export const EdgeDiagram = ({ className = '' }: { className?: string }) => {
  return (
    <svg viewBox="0 0 420 300" preserveAspectRatio="xMidYMin meet" className={className} fill="none" aria-hidden="true">
      <SketchDefs id="sketch-edge" seed={3} />

      <g filter="url(#sketch-edge)" {...sketchProps}>
        {/* dns, cdn, object storage */}
        <rect x={20} y={36} width={64} height={30} rx={4} />
        <rect x={130} y={32} width={96} height={38} rx={19} />
        <path d="M276 30h76l-8 46h-60Z" />
        <ellipse cx={314} cy={30} rx={38} ry={6} />

        {/* observability group */}
        <rect x={20} y={140} width={340} height={96} rx={12} strokeDasharray="7 6" />
        <rect x={40} y={166} width={84} height={40} rx={6} />
        <rect x={146} y={166} width={92} height={40} rx={6} />
        <rect x={260} y={166} width={84} height={40} rx={6} />

        <g markerEnd="url(#sketch-edge-arrow)">
          <path d="M86 51H126" />
          <path d="M228 51H272" />
          <path d="M178 72C176 96 172 116 170 136" strokeDasharray="5 5" />
        </g>
      </g>

      <Label x={52} y={51}>dns</Label>
      <Label x={178} y={51}>cdn</Label>
      <Label x={314} y={56}>blob</Label>
      <Label x={82} y={186}>logs</Label>
      <Label x={192} y={186}>metrics</Label>
      <Label x={302} y={186}>traces</Label>
      <Label x={190} y={254}>observability</Label>
    </svg>
  );
};

// Right margin: request path, services, async work and storage
export const CoreDiagram = ({ className = '' }: { className?: string }) => {
  return (
    <svg viewBox="0 0 260 560" preserveAspectRatio="xMidYMax meet" className={className} fill="none" aria-hidden="true">
      <SketchDefs id="sketch-core" seed={7} />

      <g filter="url(#sketch-core)" {...sketchProps}>
        {/* client */}
        <rect x={108} y={24} width={44} height={28} rx={3} />
        <path d="M122 60h16M130 52v8" />

        {/* load balancer */}
        <path d="M130 84l32 28l-32 28l-32-28Z" />

        {/* api gateway group */}
        <rect x={40} y={170} width={180} height={52} rx={10} />
        <path d="M56 184l12-7h34l12 7v18l-12 7h-34l-12-7Z" />

        {/* services and cache */}
        <Stack x={36} y={266} w={110} h={40} />
        <circle cx={214} cy={286} r={16} />
        <circle cx={219} cy={281} r={16} />

        {/* queue and worker */}
        <Queue x={36} y={352} w={116} h={32} />
        <rect x={180} y={348} width={64} height={40} rx={8} />

        {/* shards */}
        <rect x={10} y={428} width={240} height={100} rx={12} strokeDasharray="7 6" />
        <Cylinder x={28} y={448} w={58} h={60} />
        <Cylinder x={101} y={448} w={58} h={60} />
        <Cylinder x={174} y={448} w={58} h={60} />

        <g markerEnd="url(#sketch-core-arrow)">
          <path d="M130 62V80" />
          <path d="M130 142V166" />
          <path d="M120 224C112 238 100 250 96 260" />
          <path d="M152 286H194" />
          <path d="M94 310V348" />
          <path d="M154 368H176" />
          <path d="M212 390V424" />
        </g>
      </g>

      <Label x={130} y={12}>client</Label>
      <Label x={130} y={112}>lb</Label>
      <Label x={150} y={196}>api</Label>
      <Label x={91} y={286}>service</Label>
      <Label x={216} y={316}>cache</Label>
      <Label x={86} y={398}>queue</Label>
      <Label x={212} y={368}>worker</Label>
      <Label x={130} y={544}>shards</Label>
    </svg>
  );
};
