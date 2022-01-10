import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { CharacterCard, CharacterCardEdit, Header } from '../../components'
import admin from '../../firebase/nodeApp'
import React from 'react'

function AllCharacters({ characters }) {
  const { data: session } = useSession()
  const router = useRouter()

  return (
    <div className="bg-gray-100">
      <Header />

      <main className="flex justify-center">
        <div className="max-w-5xl bg-white shadow-xl p-6 my-5 lg:my-10">
          <h1 className="flex justify-center text-4xl">Virtual YouTubers!</h1>

          <div className="grid grid-flow-row-dense grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 mx-auto">
            {session && <CharacterCardEdit />}
            {characters.map(({ name, icon, id }, i) => (
              <CharacterCard key={i} name={name} icon={icon} onClick={() => router.push(`/characters/${id}`)} />
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

export default AllCharacters

export async function getServerSideProps(context) {
  const db = admin.firestore()

  const characters = await db.collection('characters').get()

  const characterDocs = characters.docs.map((character) => ({
    ...character.data(),
  }))

  return {
    props: {
      characters: characterDocs,
    },
  }
}
