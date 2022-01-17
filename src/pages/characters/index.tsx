import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { CharacterCard, CharacterCardEdit, Header } from '../../components'
import admin from '../../firebase/nodeApp'
import { GetServerSideProps } from 'next'
import { Character } from '../../types'
import { useAppDispatch } from '../../redux/app/hooks'
import { useEffect } from 'react'
import { setAllCharacters } from '../../redux/character/characterSlice'

type Data = {
  allCharacters: Character[]
}

function AllCharacters({ allCharacters }: Data) {
  const { data: session } = useSession()
  const router = useRouter()

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(setAllCharacters(allCharacters))
  }, [allCharacters, dispatch])

  return (
    <div className="bg-gray-100">
      <Header />

      <main className="flex justify-center">
        <div className="w-screen max-w-5xl bg-white shadow-xl p-1 my-10">
          <h1 className="flex justify-center text-4xl my-5">Characters</h1>

          {session && (
            <button className="button" onClick={() => router.push('/characters/new')}>
              Add New Character
            </button>
          )}

          <div className="grid grid-flow-row-dense grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 mx-auto mb-10">
            {session && <CharacterCardEdit />}
            {allCharacters.map(({ name, icon, id }, i) => (
              <CharacterCard key={i} name={name} icon={icon} onClick={() => router.push(`/allCharacters/${id}`)} />
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

export default AllCharacters

export const getServerSideProps: GetServerSideProps = async () => {
  const db = admin.firestore()

  const allCharacters = await db.collection('characters').get()

  const characterDocs = allCharacters.docs.map((character) => ({
    ...character.data(),
  }))

  return {
    props: {
      allCharacters: characterDocs,
    },
  }
}
