// Course references stay in the authored content, but source files are not served.
export async function GET() {
  return new Response("Source downloads are unavailable.", { status: 404 });
}
