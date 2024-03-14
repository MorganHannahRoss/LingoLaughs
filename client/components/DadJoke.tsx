import { useQuery } from "@tanstack/react-query"
import { getDadJoke } from "../api/dadjokeapi"

function DadJoke () {
  const { data } = useQuery({ queryKey: ['joke'], queryFn: () => getDadJoke() })
  return (
    <>
    <div>
      <h1>{data?.attachments[0].text}</h1>
    </div>
    </>
  )
}

export default DadJoke