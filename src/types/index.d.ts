export type Character = {
  id: string
  name: string
  icon: string
}

export type CharacterState = {
  allCharacters: Character[]
  characters: Character[]
  character: Character
}

export type Line = {
  id: number
  name: string
  icon: string
  JP: string
  PG: string
  EN: string
  description: string
}

export type LineState = {
  idCount: number
  lines: Line[]
  chosenLine: Line
  isModalOpen: boolean
}
