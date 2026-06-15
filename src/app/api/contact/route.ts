import { contactFormSchema } from "@/lib/validations";
import type { RateLimitEntry } from "@/types/api";

const rateLimitMap = new Map<string, RateLimitEntry>();

export async function POST(request: Request) {
  const ip = request.headers.get("x-forwarded-for") ?? "unknown";
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (entry && now < entry.reset && entry.count >= 5) {
    return Response.json(
      { success: false, error: "Too many requests. Please try again later." },
      { status: 429 }
    );
  }

  if (!entry || now >= entry.reset) {
    rateLimitMap.set(ip, { count: 1, reset: now + 60 * 60 * 1000 });
  } else {
    entry.count++;
  }

  try {
    const body = await request.json();
    const result = contactFormSchema.safeParse(body);

    if (!result.success) {
      return Response.json(
        {
          success: false,
          error: result.error.issues[0]?.message ?? "Invalid input",
        },
        { status: 400 }
      );
    }

    // In production, send email or forward to CRM
    if (process.env.NODE_ENV === "development") {
      console.log("Contact form submission:", result.data);
    }

    return Response.json({ success: true });
  } catch {
    return Response.json(
      { success: false, error: "Invalid request body" },
      { status: 400 }
    );
  }
}
