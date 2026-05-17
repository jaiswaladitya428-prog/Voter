const { GoogleGenAI } = require('@google/genai');

// Initialize Gemini Client
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

exports.handleChat = async (req, res) => {
  try {
    const { message, history } = req.body;

    if (!message) {
      return res.status(400).json({ error: "Message is required" });
    }

    const systemPrompt = `You are the VoterAssist AI, an expert civic assistant specialized in the Indian Election System. 
Your goal is to provide accurate, unbiased, and easy-to-understand information about voting, elections, voter registration (like Form 6), and required documents. 
Always refer users to the official Election Commission of India website (https://eci.gov.in/) and the Voters' Services Portal (https://voters.eci.gov.in/) for official actions.
IMPORTANT: If the user writes in Hindi, you MUST respond entirely in Hindi. If the user writes in English, respond in English.
Always be polite and helpful. If you don't know the answer, advise the user to consult official ECI resources.`;

    // Format history for Gemini API if provided
    let contents = [
      {
        role: "user",
        parts: [{ text: systemPrompt }]
      },
      {
        role: "model",
        parts: [{ text: "Understood. I will act as a helpful election assistant." }]
      }
    ];

    if (history && Array.isArray(history)) {
      history.forEach((msg) => {
        contents.push({
          role: msg.role === 'user' ? 'user' : 'model',
          parts: [{ text: msg.text }]
        });
      });
    }

    contents.push({
      role: 'user',
      parts: [{ text: message }]
    });

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: contents,
    });

    res.json({ reply: response.text });
  } catch (error) {
    console.error("Error generating chat response:", error);
    res.status(500).json({ error: "Failed to generate response", details: error.message });
  }
};
