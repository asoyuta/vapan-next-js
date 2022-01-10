import { useRef, useState } from 'react'
import { CharacterCard, Header } from '../../components'
import admin from '../../firebase/nodeApp'
import noIcon from '../../public/img/blank-profile.png'

function EditNewDialogue({ characters }) {
  const titleRef = useRef('')
  const [chosenCharas, setChosenCharas] = useState([])
  const [openCharaEdit, setOpenCharaEdit] = useState(false)
  const [lines,setLines] = useState([])

  return (
    <div className="bg-gray-100">
      <Header />

      <main className="flex justify-center">
        {/* Edit */}
        <div className="bg-white max-w-5xl mt-10 p-5">
          {/* Title */}
          <div className="mb-5">
            <p className="text-xl mb-3">1. Title of the Dialogue</p>
            <input
              className=" text-3xl bg-gray-100 rounded-md px-2 py-3 focus:outline-none"
              ref={titleRef}
              type="text"
              placeholder="Title of Dialogue"
            />
          </div>

          {/* Characters */}
          <div className="mb-5">
            {/* Chosen Characters List */}
            <div className="flex items-center space-x-3 mb-2">
              <p className="text-xl">2. Characters</p>
              <button className="button" onClick={() => setOpenCharaEdit(!openCharaEdit)}>
                {openCharaEdit ? 'Save' : 'Edit'}
              </button>
            </div>
            <div className="flex overflow-scroll scrollbar-hide bg-yellow-200 rounded-xl p-3">
              {chosenCharas.length === 0 && <CharacterCard name="Character Name" icon={noIcon} />}
              {chosenCharas.map(({ id, name, icon }) => (
                <CharacterCard
                  key={id}
                  name={name}
                  icon={icon}
                  onClick={() => {
                    openCharaEdit ? setChosenCharas(chosenCharas.filter((character) => character.id !== id)) : {}
                  }}
                />
              ))}
            </div>

            {/* All Characters */}
            {openCharaEdit && (
              <div className='mt-5 space-y-2'>
                <p className='flex justify-center text-xl'>You can choose Characters with click!</p>
                <div className="grid grid-flow-row-dense grid-cols-5 bg-green-200 rounded-xl p-3">
                  {characters.map(({ id, name, icon }) => {
                    const isChosen = chosenCharas.some((character) => character.id === id)
                    if (!isChosen) {
                      return (
                        <CharacterCard
                          key={id}
                          name={name}
                          icon={icon}
                          onClick={() => {
                            setChosenCharas([...chosenCharas, { id, name, icon }])
                          }}
                        />
                      )
                    }
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Dialogue */}
          <div>
            <p className='text-xl'>3. Dialogue</p>
            <div>

            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default EditNewDialogue

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
