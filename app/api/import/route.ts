import { NextResponse } from "next/server";
import mammoth from "mammoth";
import { makeCards } from "@/lib/cards";
export const runtime = "nodejs";
export async function POST(request: Request) {
  try {
    const form = await request.formData();
    const files = form
      .getAll("files")
      .filter((f): f is File => f instanceof File);
    if (
      files.length > 60 ||
      files.reduce((s, f) => s + f.size, 0) > 30 * 1024 * 1024
    )
      return NextResponse.json(
        { error: "Please import up to 60 files and 30 MB at a time." },
        { status: 400 },
      );
    const cards = [];
    const skipped: string[] = [];
    for (const file of files) {
      try {
        const path = file.name.split("/");
        const course =
          path.length > 2 ? path[1] : path.length > 1 ? path[0] : "My course";
        const ext = file.name.split(".").pop()?.toLowerCase();
        const buffer = Buffer.from(await file.arrayBuffer());
        let content = "";
        if (ext === "pdf") {
          const pdf = (await import("pdf-parse/lib/pdf-parse.js")).default;
          content = (await pdf(buffer)).text;
        } else if (ext === "docx")
          content = (await mammoth.extractRawText({ buffer })).value;
        else if (["txt", "md"].includes(ext || ""))
          content = buffer.toString("utf8");
        else {
          skipped.push(file.name);
          continue;
        }
        const generated = makeCards(content, course, path.at(-1) || file.name);
        if (!generated.length) skipped.push(file.name);
        cards.push(...generated);
      } catch {
        skipped.push(file.name);
      }
    }
    return NextResponse.json({ cards, skipped });
  } catch {
    return NextResponse.json(
      { error: "Could not read that folder. Try a smaller selection." },
      { status: 400 },
    );
  }
}
