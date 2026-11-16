// Full-page "loss landscape": contour lines of a smooth surface with a global and a local minimum,
// plus a faint gradient-descent path settling into the global minimum. Computed once at module load.
const width = 1600;
const height = 1000;
const cell = 12;
const levelCount = 18;

const features = [
  { x: 210, y: 780, spread: 240, depth: -1 }, // global minimum
  { x: 1250, y: 820, spread: 190, depth: -0.55 }, // local minimum
  { x: 800, y: 250, spread: 300, depth: 0.5 }, // ridge
  { x: 1480, y: 160, spread: 180, depth: 0.35 }, // hill
];

const surface = (x: number, y: number) =>
  features.reduce(
    (sum, { x: fx, y: fy, spread, depth }) =>
      sum + depth * Math.exp(-((x - fx) ** 2 + (y - fy) ** 2) / (2 * spread * spread)),
    0,
  ) +
  0.04 * Math.sin(x / 160) * Math.cos(y / 140);

// Sample the surface on a grid
const cols = Math.floor(width / cell) + 1;
const rows = Math.floor(height / cell) + 1;
const grid = Array.from({ length: rows }, (_, j) => Array.from({ length: cols }, (_, i) => surface(i * cell, j * cell)));
const values = grid.flat();
const min = Math.min(...values);
const max = Math.max(...values);
const levels = Array.from({ length: levelCount }, (_, k) => min + ((k + 1) / (levelCount + 1)) * (max - min));

// Marching squares: for each cell and level, connect the points where the contour crosses the cell's edges
const contourPath = (level: number) => {
  let d = '';
  const fmt = (n: number) => n.toFixed(1);
  for (let j = 0; j < rows - 1; j++) {
    for (let i = 0; i < cols - 1; i++) {
      const [a, b, c, e] = [grid[j][i], grid[j][i + 1], grid[j + 1][i + 1], grid[j + 1][i]];
      const index = (a > level ? 8 : 0) | (b > level ? 4 : 0) | (c > level ? 2 : 0) | (e > level ? 1 : 0);
      if (index === 0 || index === 15) continue;

      const x0 = i * cell;
      const y0 = j * cell;
      const lerp = (v1: number, v2: number) => (level - v1) / (v2 - v1);
      const top = [x0 + lerp(a, b) * cell, y0];
      const right = [x0 + cell, y0 + lerp(b, c) * cell];
      const bottom = [x0 + lerp(e, c) * cell, y0 + cell];
      const left = [x0, y0 + lerp(a, e) * cell];

      const segments: number[][][] = {
        1: [[left, bottom]],
        2: [[bottom, right]],
        3: [[left, right]],
        4: [[top, right]],
        5: [[top, right], [bottom, left]],
        6: [[top, bottom]],
        7: [[left, top]],
        8: [[left, top]],
        9: [[top, bottom]],
        10: [[left, top], [right, bottom]],
        11: [[top, right]],
        12: [[left, right]],
        13: [[right, bottom]],
        14: [[bottom, left]],
      }[index]!;

      for (const [p, q] of segments) d += `M${fmt(p[0])} ${fmt(p[1])}L${fmt(q[0])} ${fmt(q[1])}`;
    }
  }
  return d;
};

const contours = levels.map(contourPath);

// Gradient descent from a slope on the left edge into the global minimum, in fixed-length steps
const descent = (() => {
  const points: number[][] = [];
  let [x, y] = [40, 290];
  for (let n = 0; n < 80; n++) {
    points.push([x, y]);
    const gx = (surface(x + 1, y) - surface(x - 1, y)) / 2;
    const gy = (surface(x, y + 1) - surface(x, y - 1)) / 2;
    const length = Math.hypot(gx, gy);
    if (length < 1e-5) break;
    x -= (gx / length) * 14;
    y -= (gy / length) * 14;
    if (Math.hypot(x - features[0].x, y - features[0].y) < 12) break;
  }
  return points;
})();

export const LossLandscape = ({ className = '' }: { className?: string }) => {
  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="xMidYMid slice"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <g className="stroke-rule" strokeWidth={1}>
        {contours.map((d, k) => (
          <path key={k} d={d} />
        ))}
      </g>

      <g className="stroke-muted fill-muted" opacity={0.35}>
        <polyline points={descent.map(([px, py]) => `${px},${py}`).join(' ')} strokeWidth={1} strokeDasharray="2 5" fill="none" />
        {descent
          .filter((_, n) => n % 4 === 0)
          .map(([px, py], n) => (
            <circle key={n} cx={px} cy={py} r={2} stroke="none" />
          ))}
        <circle cx={features[0].x} cy={features[0].y} r={5} fill="none" strokeWidth={1} />
      </g>
    </svg>
  );
};
