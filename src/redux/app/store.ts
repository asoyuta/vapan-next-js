import { configureStore } from '@reduxjs/toolkit'
import lineReducer from '../line/lineSlice'
import characterReducer from '../character/characterSlice'

export const store = configureStore({
  reducer: {
    lines: lineReducer,
    characters: characterReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
