// Large, faint fragment of a system diagram that sits behind the page and bleeds off the right edge
const boxes = [
  { label: 'api', x: 230, y: 40 },
  { label: 'model', x: 440, y: 40 },
  { label: 'queue', x: 230, y: 180 },
  { label: 'worker', x: 440, y: 180 },
  { label: 'store', x: 650, y: 180 },
  { label: 'cache', x: 230, y: 320 },
];

const boxWidth = 130;
const boxHeight = 48;

// Edges as [from, to, dashed]
const links: [string, string, boolean][] = [
  ['api', 'model', false],
  ['api', 'queue', false],
  ['queue', 'worker', true],
  ['model', 'worker', true],
  ['worker', 'store', false],
  ['api', 'cache', true],
];

const box = (label: string) => boxes.find((b) => b.label === label)!;

// Connect box edges: horizontal neighbours side to side, vertical neighbours top to bottom
const connector = (from: string, to: string) => {
  const a = box(from);
  const b = box(to);
  if (a.y === b.y) {
    return { x1: a.x + boxWidth, y1: a.y + boxHeight / 2, x2: b.x, y2: b.y + boxHeight / 2 };
  }
  return { x1: a.x + boxWidth / 2, y1: a.y + boxHeight, x2: b.x + boxWidth / 2, y2: b.y };
};

export const DiagramBackdrop = ({ className = '' }: { className?: string }) => {
  return (
    <svg viewBox="0 0 800 400" className={className} fill="none" aria-hidden="true">
      <defs>
        <marker id="diagram-arrow" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="8" markerHeight="8" orient="auto">
          <path d="M0 0L8 4L0 8" className="stroke-rule" strokeWidth={1} fill="none" />
        </marker>
      </defs>

      {links.map(([from, to, dashed]) => (
        <line
          key={`${from}-${to}`}
          {...connector(from, to)}
          className="stroke-rule"
          strokeWidth={1}
          strokeDasharray={dashed ? '4 4' : undefined}
          markerEnd="url(#diagram-arrow)"
        />
      ))}

      {boxes.map(({ label, x, y }) => (
        <g key={label}>
          <rect x={x} y={y} width={boxWidth} height={boxHeight} rx={6} className="stroke-rule" strokeWidth={1} />
          <text
            x={x + 14}
            y={y + boxHeight / 2}
            dominantBaseline="central"
            className="fill-rule font-mono"
            fontSize={13}
          >
            {label}
          </text>
        </g>
      ))}
    </svg>
  );
};
