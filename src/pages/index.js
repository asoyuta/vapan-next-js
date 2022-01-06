import { addDoc, collection, doc, setDoc } from 'firebase/firestore'
import { useSession } from 'next-auth/react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { Header } from '../components'
import { db } from '../firebase/clientApp'

export default function Home() {
  const { data: session } = useSession()
  const router = useRouter()

  const createNewArticle = () => {
    addDoc(collection(db, 'articles'), {
      uid: session.user.uid,
    }).then((document) => {
      setDoc(doc(db, 'users', session.user.uid, 'articles', document.id), {
        id: document.id,
      })
      router.push(`/edit/${document.id}`)
    })
  }

  return (
    <div className=" bg-gray-100">
      <Head>
        <title>vapan!</title>
      </Head>

      <Header />

      <div>
        <div className="flex justify-center">
          <p onClick={createNewArticle} className="cursor-pointer bg-blue-500 p-3 m-3 rounded-xl text-white">
            Create a new Article
          </p>
        </div>
      </div>

      <main></main>
    </div>
  )
}
