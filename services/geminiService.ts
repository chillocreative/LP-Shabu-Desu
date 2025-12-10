import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const generateChefResponse = async (userMessage: string): Promise<string> => {
  if (!apiKey) {
    return "I apologize, but my connection to the kitchen is currently down. Please contact the staff directly.";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: userMessage,
      config: {
        systemInstruction: `You are the Head Chef and Concierge of 'SHABU DESU', a high-end Japanese Shabu Shabu restaurant. 
        Your tone is elegant, polite, welcoming, and knowledgeable (Wabi-sabi aesthetic).
        
        Key Information:
        - Shabu Shabu is a hotpot dish where thin slices of meat and vegetables are boiled in water or broth.
        - "Shabu Shabu" is an onomatopoeia for the sound of stirring the ingredients in the cooking pot.
        - We serve A5 Wagyu, Kurobuta Pork, and fresh Seafood.
        - We have signature Ponzu and Goma sauces.
        - If asked about prices, refer to: Wagyu ($120), Pork ($85), Seafood ($95).
        - If asked about cooking: "Dip the meat for just 3-5 seconds until slightly pink. Swish it gently."
        
        Keep responses concise (under 80 words) but helpful. Use Japanese honorifics occasionally (e.g., -san, irasshaimase) if appropriate but keep it accessible English.`,
      }
    });

    return response.text || "I am momentarily distracted by the broth. Could you repeat that?";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I apologize, I am having trouble hearing you over the simmering pots. Please try again.";
  }
};
