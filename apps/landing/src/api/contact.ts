export async function createContact(email: string): Promise<void> {
  let response: Response;
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 12_000);
  try {
    response = await fetch("/api/contacts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
      signal: controller.signal,
    });
  } catch {
    throw new Error("failed");
  } finally {
    clearTimeout(timeout);
  }

  if (response.ok) return;

  let code = "failed";
  try {
    const data: unknown = await response.json();
    if (
      typeof data === "object" &&
      data !== null &&
      "error" in data &&
      typeof data.error === "string"
    ) {
      code = data.error;
    }
  } catch {
    code = "failed";
  }

  throw new Error(code);
}
