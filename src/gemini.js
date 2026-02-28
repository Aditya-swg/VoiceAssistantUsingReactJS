
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: import.meta.env.VITE_GEMINI_API_KEY,
});

export async function run(prompt) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `Reply in two to four short sentence only. Maximum 12 words in one sentence. ${prompt}`,
      generationConfig: {
        maxOutputTokens: 5,
      },
    });

    return response.text;

  } catch (error) {
    console.error("Gemini Error:", error);
    return "Sorry, AI service is temporarily unavailable.";
  }
}

export default run;