# Unl + AI SDK chat (Deploy with Vercel)

A Next.js chat on the Vercel AI Gateway. The model carries your why on every call: one line, `withUnl(model)`.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fneilmortimer-kar%2Funl-ai-sdk-chat&env=UNL_KEY&envDescription=A%20key%20from%20Unl%20so%20the%20model%20carries%20your%20decisions%20and%20their%20reasons&envLink=https%3A%2F%2Funlimitless.ai%2Fportal%2Fkeys&project-name=unl-ai-sdk-chat)

Click the button, sign in to Vercel, and paste a key from [unlimitless.ai/portal/keys](https://unlimitless.ai/portal/keys) as `UNL_KEY`. On Vercel the AI Gateway authenticates itself; nothing else is needed.

## Run it locally

```bash
cp .env.example .env.local   # set UNL_KEY, and AI_GATEWAY_API_KEY outside Vercel
npm install
npm run dev
```

The integration is [`app/api/chat/route.ts`](app/api/chat/route.ts):

```ts
import { withUnl } from "@unlimitless/ai-sdk";
const model = withUnl("openai/gpt-5-mini");
```

Change `UNL_MODEL` to any AI Gateway model id. Your model, prompts and tools stay yours; Unl adds one system message holding the decisions that bear on the call, and nothing when none do.

Checked 26 Sep 2026: `next build` passes on Next 16.3.6 with `ai` 7.0.116 and `@unlimitless/ai-sdk` 0.1.0 from npm.

MIT licensed.
