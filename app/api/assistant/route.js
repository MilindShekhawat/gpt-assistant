import OpenAI from "openai"
import { NextResponse } from "next/server"

const secretKey = process.env.OPENAI_API_KEY
const openai = new OpenAI({
  apiKey: secretKey,
})

export async function GET() {
  // try {
  //   const assistants = await fetch("https://api.openai.com/v1/assistants", {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //       "Authorization": "Bearer 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",
  //       "OpenAI-Beta": "assistants=v1",
  //     },
  //   })
  //   console.log("Assistants", assistants)
  //   return NextResponse.json({ message: "OK", assistants }, { status: 200 })
  // } catch (error) {
  //   return NextResponse.json({ message: "Error", error }.error, { status: 500 })
  // }
  const assistants = await openai.beta.assistants.list()
  console.log("Assistants", assistants)
  const assistantNames = assistants.body.data.map((prop) => prop.name)
  return NextResponse.json({ message: "OK", assistantNames }, { status: 200 })
}
export async function POST() {}
export async function DELETE() {}
export async function PUT() {}
