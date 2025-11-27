import { GoogleGenAI } from "@google/genai";

const getClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    throw new Error("API Key not found in environment variables");
  }
  return new GoogleGenAI({ apiKey });
};

export const generateFitnessAdvice = async (userQuery: string): Promise<string> => {
  try {
    const ai = getClient();
    const systemInstruction = `
      You are "Burnie", an energetic and knowledgeable virtual fitness assistant for HOTWORX Houston Katy Green.
      
      Your personality:
      - Motivating, high-energy, and professional.
      - Expert on Infrared Sauna Workouts (3D Training: Heat + Infrared + Exercise).
      - Brief and punchy in your responses (max 2-3 sentences unless asked for a list).
      
      Key knowledge base:
      - We are open 24 hours.
      - We use Virtual Instructors.
      - Benefits: Detox, Weight Loss, Muscle Recovery, Lower Blood Pressure.
      - Workouts: Hot Yoga, Hot Pilates, Hot Cycle, Hot Blast (Keiser Total Body Trainer), Hot Thunder (Rowing).
      - Location: Houston Katy Green.
      
      If asked about pricing, encourage them to click "Claim Free Session" to speak with a general manager as rates vary.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: userQuery,
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.7,
        maxOutputTokens: 250,
      }
    });

    return response.text || "Let's sweat it out! Ask me anything about our workouts.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having a little trouble connecting to the infrared network. Please try again or ask a staff member!";
  }
};
