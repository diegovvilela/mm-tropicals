export async function onRequestGet() {
  return new Response("lead endpoint ok", { status: 200 });
}

export async function onRequestPost({ request, env }) {
  let payload;
  try {
    payload = await request.json();
  } catch {
    return new Response("Invalid JSON", { status: 400 });
  }

  const resp = await fetch(env.N8N_WEBHOOK_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${env.N8N_BEARER_TOKEN}`,
    },
    body: JSON.stringify(payload),
  });

  if (!resp.ok) {
    return new Response("Upstream error", { status: 502 });
  }

  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: { "Content-Type": "application/json; charset=utf-8" },
  });
}