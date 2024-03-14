import { useQuery } from "@tanstack/react-query"
import { getDadJoke } from "../api/dadjokeapi"

function Header () {
  const { data } = useQuery({ queryKey: ['joke'], queryFn: () => getDadJoke() })
  return (
    <>
    <div className="header-container">
      <h1> 🤣🤣 Lingo Laughs 🤣🤣</h1>
      <h1>{data?.attachments[0].text}</h1>
    </div>
    </>
  )
}

export default Header