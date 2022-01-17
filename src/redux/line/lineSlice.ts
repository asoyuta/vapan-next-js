import { createSlice } from '@reduxjs/toolkit'
import { LineState } from '../../types'

const initialState: LineState = {
  idCount: 0,
  lines: [],
  chosenLine: { id: 0, name: '', icon: '', JP: '', PG: '', EN: '', description: '' },
  isModalOpen: false,
}

const lineSlice = createSlice({
  name: 'lines',
  initialState,
  reducers: {},
})

export default lineSlice.reducer
