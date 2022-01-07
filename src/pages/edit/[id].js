import { useSession } from 'next-auth/react'
import { Header, EditArticle } from '../../components'

function Edit() {
  const { data: session } = useSession()

  return (
    <div className="bg-gray-100">
      <Header />

      <main className="flex justify-center">
        <EditArticle />
      </main>
    </div>
  )
}

export default Edit
