import type { Card } from "@/lib/cards";

export function CardVisual({ visual }: { visual: NonNullable<Card["visual"]> }) {
  return (
    <div className={`card-visual visual-${visual.type}`} aria-label={visual.label}>
      <span className="visual-caption">{visual.label}</span>
      <div className="visual-items">
        {visual.items.map((item, index) => (
          <div className="visual-item" key={index}>
            <span>{item.label}</span>
            <strong>{item.value}</strong>
          </div>
        ))}
      </div>
    </div>
  );
}
