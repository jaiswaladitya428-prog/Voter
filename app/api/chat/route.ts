import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");
const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

export async function POST(req: Request) {
  try {
    const { message, history } = await req.json();

    // DO NOT put your real API key in this check! 
    // This condition is meant to throw an error ONLY IF the key is missing or is the default placeholder.
    if (!process.env.GEMINI_API_KEY || process.env.GEMINI_API_KEY === "AIzaSyAqvthTUN7eqYE4H9d_4tbWRqBDgC3R0TY" || process.env.GEMINI_API_KEY === "") {
      return NextResponse.json(
        { error: "Gemini API key not configured. Please set it in .env file." },
        { status: 500 }
      );
    }

    const chat = model.startChat({
      history: history || [],
      generationConfig: {
        maxOutputTokens: 500,
      },
    });

    const systemPrompt = `You are the VoterAssist AI, an expert civic assistant specialized in the Indian Election System and the West Bengal elections. 
    Your goal is to help citizens with queries regarding the Election Commission of India (ECI), voter registration (Form 6), and local West Bengal phase-wise polling.
    Provide information on:
    1. Polling dates for West Bengal phases.
    2. Document requirements (EPIC, Aadhaar, etc.).
    3. The voting process at the booth (EVM/VVPAT).
    Be neutral, non-partisan, and accurate. 
    If you don't know something for sure, refer the user to official sources like eci.gov.in.`;

    const result = await chat.sendMessage(`${systemPrompt}\n\nUser: ${message}`);
    const response = await result.response;
    const text = response.text();

    return NextResponse.json({ text });
  } catch (error: any) {
    console.error("Gemini API Error:", error);
    return NextResponse.json(
      { error: "Failed to fetch response from Gemini AI." },
      { status: 500 }
    );
  }
}
