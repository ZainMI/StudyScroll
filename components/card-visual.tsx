import { MathText } from "./math-text";
import type { Card } from "@/lib/cards";

export function CardVisual({
  visual,
}: {
  visual: NonNullable<Card["visual"]>;
}) {
  return (
    <div
      className={`card-visual visual-${visual.type}`}
      aria-label={visual.label}
    >
      <span className="visual-caption">
        <MathText>{visual.label}</MathText>
      </span>
      <div className="visual-items">
        {visual.items.map((item, index) => (
          <div className="visual-item" key={index}>
            <span>
              <MathText>{item.label}</MathText>
            </span>
            <strong>
              <MathText>{item.value}</MathText>
            </strong>
          </div>
        ))}
      </div>
    </div>
  );
}
