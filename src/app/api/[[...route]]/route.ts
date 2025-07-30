import { Hono } from "hono";
import { handle } from "hono/vercel";
import { GoogleGenerativeAI } from "@google/generative-ai";
import env from "@/lib/env";


const app = new Hono().basePath("/api");

const genAI = new GoogleGenerativeAI(env.geminiApiKey!);

app.post("/generate-tasks", async (c) => {
  const { transcript } = await c.req.json();

  try {
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

    const prompt = `
      Analyze this meeting transcript and extract:
      1. Meeting title (from "Meeting Title:" line)
      2. Actionable tasks with:
         - id: generated UUID
         - text: clear task description
         - title: shorter more brief
         - status: "pending"
         - priority: "high", "medium", or "low" (high=critical blocker, medium=important, low=backlog)
         - owner: person responsible
         - deadline: specific date if mentioned
         - createdAt: current timestamp
         - tags: relevant team tags (e.g., "@Tech", "@Marketing")

      Meeting format:
      **Meeting Title:** [title]
      **Date:** [date]
      **Attendees:** [list]
      ---
      [conversation]

      Rules:
      1. Mark launch-blocking issues as "high" priority
      2. Assign "medium" to important but non-blocking tasks
      3. Assign "low" to nice-to-have items
      4. Include technical tasks, reviews, and documentation needs
      5. Output as JSON with { title: string, tasks: [...] }

      Transcript: ${transcript}
    `;

    const result = await model.generateContent(prompt);

    // Add proper response handling
    if (!result.response) {
      throw new Error("No response from Gemini API");
    }

    const text = result.response.text();

    try {
      const jsonString = text.replace(/```json|```/g, "").trim();
      const { title, tasks: generatedTasks } = JSON.parse(jsonString);

      return c.json(generatedTasks);
    } catch (parseError) {
      console.error("Parsing error:", parseError);
      throw new Error("Failed to parse Gemini response");
    }
  } catch (error) {
    console.error("API Error:", error);
    return c.json(
      {
        error: "Failed to process request",
        details: error instanceof Error ? error.message : String(error),
      },
      500
    );
  }
});

export const GET = handle(app);
export const POST = handle(app);
