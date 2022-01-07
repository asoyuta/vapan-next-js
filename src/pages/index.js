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
    <div className="bg-gray-100">
      <Head>
        <title>vapan!</title>
      </Head>

      <Header />

      <div>
        <div className="flex justify-center">
          <button disabled={!session} onClick={createNewArticle} className={`${session ? 'button' : 'disabledButton'}`}>
            {session ? 'Create a new Article' : 'Sign in to create Articles'}
          </button>
        </div>
      </div>

      <main></main>
    </div>
  )
}
