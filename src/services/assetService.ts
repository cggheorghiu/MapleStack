import { GoogleGenAI } from "@google/genai";

export async function generateAppAssets() {
  const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
  
  const logoResponse = await ai.models.generateContent({
    model: 'gemini-2.5-flash-image',
    contents: {
      parts: [
        {
          text: "A modern, minimalist logo for 'MapleStack', a Canadian software directory. The logo should feature a stylized, geometric maple leaf integrated with a digital circuit or code brackets. Colors: Emerald green and slate gray. Professional, clean, high-tech aesthetic. Vector style on a white background.",
        },
      ],
    },
    config: {
      imageConfig: {
        aspectRatio: "1:1"
      }
    }
  });

  let logoUrl = "";
  for (const part of logoResponse.candidates[0].content.parts) {
    if (part.inlineData) {
      logoUrl = `data:image/png;base64,${part.inlineData.data}`;
      break;
    }
  }

  const bannerResponse = await ai.models.generateContent({
    model: 'gemini-2.5-flash-image',
    contents: {
      parts: [
        {
          text: "A professional hero banner for a Canadian software directory website called 'MapleStack'. The image should show a modern, clean office space in a Canadian city like Toronto or Vancouver, with a laptop in the foreground displaying a software directory interface. Subtle Canadian elements like a small maple leaf logo. High-tech, professional, bright, and airy atmosphere.",
        },
      ],
    },
    config: {
      imageConfig: {
        aspectRatio: "16:9"
      }
    }
  });

  let bannerUrl = "";
  for (const part of bannerResponse.candidates[0].content.parts) {
    if (part.inlineData) {
      bannerUrl = `data:image/png;base64,${part.inlineData.data}`;
      break;
    }
  }

  return { logoUrl, bannerUrl };
}
