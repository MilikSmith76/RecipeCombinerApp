import { google } from '@ai-sdk/google';
import { streamObject } from 'ai';
import {
  AI_RECIPE_SYSTEM,
  GEMINI_LATEST_FLASH_LITE_MODEL,
  MAX_GEMINI_RESPONSE_TIME,
  RECIPE_SCHEMA
} from '@/constants';

const maxDuration = MAX_GEMINI_RESPONSE_TIME;

const POST = async (req: Request): Promise<Response> => {
  const { recipe, urls } = await req.json();

  try {
    const result = streamObject({
      model: google(GEMINI_LATEST_FLASH_LITE_MODEL),
      system: AI_RECIPE_SYSTEM,
      prompt: `Use ${urls.join(', ')} to determine a ${recipe} recipe`,
      tools: {
          url_context: google.tools.urlContext({}),
      },
      schema: RECIPE_SCHEMA,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } as any);

    return result.toTextStreamResponse();
  } catch (error) {
    return Response.json(error, { status: 500 });
  }
};

export { maxDuration, POST };
