import OpenAI from "openai"
import { NextResponse } from "next/server"

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export const GetAssistants = async () => {
  const data = await openai.beta.assistants.list()
  const assistants = data.body.data.map((assistant) => ({ id: assistant.id, name: assistant.name }))
  return assistants
  //return NextResponse.next({ message: "OK", assistantNames }, { status: 200 })
}

export const GetAssistant = async (id) => {
  const assistant = await openai.beta.assistants.retrieve("asst_I3zkF7wo9pHrn2YYeMNIMeTL")
  console.log("Assistant", assistant)
}
