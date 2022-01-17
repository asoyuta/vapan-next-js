import { useState } from 'react'
import { CharacterCard } from '..'
import { useAppDispatch, useAppSelector } from '../../redux/app/hooks'
import {
  addCharacter,
  deleteCharacter,
  selectAllCharacters,
  selectCharacters,
} from '../../redux/character/characterSlice'

function ChooseCharacters() {
  const dispatch = useAppDispatch()
  const allCharacters = useAppSelector(selectAllCharacters)
  const characters = useAppSelector(selectCharacters)

  const [editing, setEditing] = useState(false)

  return (
    <div className="mb-5">
      {/* Chosen Characters List */}
      <div className="flex items-center space-x-3 mb-2">
        <p className="text-xl">2. Characters</p>
        <button className="button" onClick={() => setEditing(!editing)}>
          {editing ? 'Save' : 'Edit'}
        </button>
      </div>
      <div className="flex overflow-scroll scrollbar-hide bg-yellow-200 rounded-xl">
        {characters.length === 0 && <CharacterCard name="Character Name" />}
        {characters.map(({ id, name, icon }) => (
          <CharacterCard
            key={id}
            name={name}
            icon={icon}
            onClick={() => {
              dispatch(deleteCharacter(id))
            }}
          />
        ))}
      </div>

      {/* All Characters */}
      {editing && (
        <div className="mt-5 space-y-2">
          <p className="flex justify-center text-base">You can choose Characters with click!</p>
          <div className="grid grid-flow-row-dense grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 bg-green-200 rounded-xl">
            {allCharacters.map(({ id, name, icon }) => {
              const isChosen = characters.some((character) => character.id === id)
              if (!isChosen) {
                return (
                  <CharacterCard
                    key={id}
                    name={name}
                    icon={icon}
                    onClick={() => {
                      dispatch(addCharacter(id))
                    }}
                  />
                )
              }
            })}
          </div>
        </div>
      )}
    </div>
  )
}

export default ChooseCharacters
