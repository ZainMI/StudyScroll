import { memo } from "react";
import katex from "katex";

// Explicit delimiters avoid interpreting finance dollar amounts as mathematics.
export const MathText = memo(function MathText({
  children,
}: {
  children: string;
}) {
  const parts = children.split(/(\\\([\s\S]*?\\\)|\\\[[\s\S]*?\\\])/g);
  return (
    <>
      {parts.map((part, index) => {
        const display = part.startsWith("\\[");
        if (!display && !part.startsWith("\\(")) return part;
        try {
          const html = katex.renderToString(part.slice(2, -2), {
            displayMode: display,
            throwOnError: true,
            trust: false,
            strict: "error",
            maxSize: 10,
            maxExpand: 500,
            output: "htmlAndMathml",
          });
          return (
            <span
              key={index}
              className={display ? "math-block" : "math-inline"}
              dangerouslySetInnerHTML={{ __html: html }}
            />
          );
        } catch {
          return (
            <span key={index} className="math-fallback">
              {part.slice(2, -2)}
            </span>
          );
        }
      })}
    </>
  );
});
