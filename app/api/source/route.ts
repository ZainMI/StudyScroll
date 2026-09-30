import { readFile, realpath } from "node:fs/promises";
import path from "node:path";
import feed from "@/content/master-feed.json";
export const runtime = "nodejs";
const allowed = new Set(
  feed.cards.flatMap((card) => card.sources.map((source) => source.path)),
);
export async function GET(request: Request) {
  const requested = new URL(request.url).searchParams.get("path");
  if (!requested || !allowed.has(requested))
    return new Response("Source not found", { status: 404 });
  try {
    const root = await realpath(path.join(process.cwd(), "courses"));
    const resolved = await realpath(path.join(process.cwd(), requested));
    if (!resolved.startsWith(root + path.sep))
      return new Response("Source not found", { status: 404 });
    const buffer = await readFile(resolved);
    if (resolved.endsWith(".ipynb")) {
      const notebook = JSON.parse(buffer.toString("utf8"));
      const cells = notebook.cells
        .map(
          (cell: { cell_type: string; source: string[] }, i: number) =>
            `--- Cell ${i + 1} (${cell.cell_type}) ---\n${cell.source.join("")}`,
        )
        .join("\n\n");
      return new Response(cells, {
        headers: {
          "Content-Type": "text/plain; charset=utf-8",
          "Cache-Control": "private, no-store",
          "X-Content-Type-Options": "nosniff",
        },
      });
    }
    return new Response(buffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": "inline",
        "Cache-Control": "private, no-store",
        "X-Content-Type-Options": "nosniff",
      },
    });
  } catch {
    return new Response("This local source could not be opened.", {
      status: 404,
    });
  }
}
