import Head from 'next/head'
import { Header } from '../components'

export default function Home() {
  return (
    <div className=" bg-gray-100">
      <Head>
        <title>vapan!</title>
      </Head>

      <Header />

      <main></main>
    </div>
  )
}
