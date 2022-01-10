import Head from 'next/head'
import { useRouter } from 'next/router'
import { Header } from '../components'

export default function Home() {
  const router = useRouter()

  return (
    <div className="bg-gray-100 h-screen">
      <Head>
        <title>vapan!</title>
      </Head>

      <Header />

      <div className="flex justify-center">
        <div className="bg-white flex flex-col items-center mt-10 p-5 space-y-5 text-xl">
          <p>This Website support your study of Japanese language!</p>
          <p>Now it's developping!!!</p>
          <button onClick={() => router.push(`/115652764675316647506/articles/ex1`)} className="button">
            Go to example Article Page!
          </button>
        </div>
      </div>
    </div>
  )
}
