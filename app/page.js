import { GetAssistant, GetAssistants } from "./api/assistant/apiconfig"
import Form from "./components/Form"
import Select from "./components/Select"

export default async function Home() {
  const assistants = await GetAssistants()
  return (
    <div className='p-10'>
      <Select assistants={assistants} />
      <Form assistants={assistants} />
    </div>
  )
}
