export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Only POST requests allowed" });
  }

  const { text, context } = req.body;

  if (!text) {
    return res.status(400).json({ error: "Text is required" });
  }

  res.status(200).json({
    tone: "Neutral",
    explanation: [
      "This is a placeholder response",
      "AI integration will be added next"
    ],
    suggested_responses: {
      polite: "Okay, let me know if you need anything.",
      neutral: "Okay.",
      direct: "Please tell me if changes are needed."
    }
  });
}
