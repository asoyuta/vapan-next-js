import { createSlice } from '@reduxjs/toolkit'
import { CharacterState } from '../../types'
import { RootState } from '../app/store'

const initialState: CharacterState = {
  allCharacters: [],
  characters: [],
  character: { id: '', name: '', icon: '' },
}

const characterSlice = createSlice({
  name: 'character',
  initialState,
  reducers: {
    // allCharactersをセットする
    setAllCharacters: (state, action) => {
      state.allCharacters = action.payload
    },
    // Dialogueに登場するcharacterを追加する
    addCharacter: (state, action) => {
      const newCharacter = state.allCharacters.find((character) => character.id === action.payload)
      state.characters = [newCharacter, ...state.characters]
    },
    // Dialogueに登場するcharacterを削除する
    deleteCharacter: (state, action) => {
      state.characters = state.characters.filter((character) => character.id !== action.payload)
    },
  },
})

export const { setAllCharacters, addCharacter, deleteCharacter } = characterSlice.actions

export const selectAllCharacters = (state: RootState) => state.characters.allCharacters
export const selectCharacters = (state: RootState) => state.characters.characters

export default characterSlice.reducer
