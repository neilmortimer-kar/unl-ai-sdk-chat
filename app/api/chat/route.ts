// The whole integration: wrap the model with Unl, and every call carries the part of your why that
// bears on it. The model id goes through the Vercel AI Gateway (auth is automatic on Vercel).
import { convertToModelMessages, streamText, type UIMessage } from "ai";
import { withUnl } from "@unlimitless/ai-sdk";

const model = withUnl(process.env.UNL_MODEL ?? "openai/gpt-5-mini");

export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json();
  const result = streamText({
    model,
    system: "You help the person with their project.",
    messages: await convertToModelMessages(messages),
  });
  return result.toUIMessageStreamResponse();
}
