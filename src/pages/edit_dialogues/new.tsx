import { GetServerSideProps } from 'next'
import { useEffect, useRef, useState } from 'react'
import { CharacterCard, Dialogue, Header } from '../../components'
import ChooseCharacters from '../../components/Characters/ChooseCharacters'
import admin from '../../firebase/nodeApp'
import noIcon from '../../public/img/blank-profile.png'
import { useAppDispatch } from '../../redux/app/hooks'
import { setAllCharacters } from '../../redux/character/characterSlice'
import { Character } from '../../types'

type Data = {
  allCharacters: Character[]
}

function EditNewDialogue({ allCharacters }: Data) {
  const titleRef = useRef(null)

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(setAllCharacters(allCharacters))
  }, [allCharacters])

  return (
    <div className="bg-gray-100">
      <Header />

      <main className="flex justify-center">
        {/* Edit */}
        <div className="bg-white w-screen max-w-5xl mt-10 p-2">
          {/* Title */}
          <div className="mb-5">
            <p className="text-xl mb-3">1. Title of the Dialogue</p>
            <input
              className="  bg-gray-100 rounded-md px-2 py-3 focus:outline-none"
              ref={titleRef}
              type="text"
              placeholder="Title of Dialogue"
            />
          </div>

          <ChooseCharacters />
        </div>
      </main>
    </div>
  )
}

export default EditNewDialogue

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
