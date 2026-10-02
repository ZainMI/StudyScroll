// Course content is maintained manually in the canonical feed.
export function POST() {
  return Response.json({ error: "File uploads are disabled." }, { status: 404 });
}
