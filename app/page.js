import Form from "./components/Form"

export default async function Home() {
  const response = await fetch("http://localhost:3000/api/assistant")
  return (
    <div className='p-10'>
      <Form />
    </div>
  )
}
