
import { GoogleGenAI, Type } from "@google/genai";
import { AppraisalResult, GeneratedSword } from "../types";

const API_KEY = process.env.API_KEY || "";
const ai = new GoogleGenAI({ apiKey: API_KEY });

export const appraiseArtifact = async (description: string, imageBase64?: string): Promise<AppraisalResult> => {
  const model = ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: [
      {
        parts: [
          { text: `You are a mystical artifact appraiser for the world of Alisword. Given this description: "${description}", appraise the artifact. If an image is provided, incorporate its details.` },
          ...(imageBase64 ? [{ inlineData: { mimeType: 'image/jpeg', data: imageBase64 } }] : [])
        ]
      }
    ],
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          name: { type: Type.STRING },
          origin: { type: Type.STRING },
          powerLevel: { type: Type.STRING },
          lore: { type: Type.STRING },
          element: { type: Type.STRING }
        },
        required: ["name", "origin", "powerLevel", "lore", "element"]
      }
    }
  });

  const response = await model;
  return JSON.parse(response.text || "{}") as AppraisalResult;
};

export const forgeLegendarySword = async (prompt: string): Promise<GeneratedSword> => {
  const model = ai.models.generateContent({
    model: 'gemini-3-pro-preview',
    contents: `Forge a unique legendary sword based on these keywords: ${prompt}. Describe its appearance, epic history, and special magical abilities.`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          name: { type: Type.STRING },
          appearance: { type: Type.STRING },
          history: { type: Type.STRING },
          abilities: {
            type: Type.ARRAY,
            items: { type: Type.STRING }
          }
        },
        required: ["name", "appearance", "history", "abilities"]
      }
    }
  });

  const response = await model;
  return JSON.parse(response.text || "{}") as GeneratedSword;
};
