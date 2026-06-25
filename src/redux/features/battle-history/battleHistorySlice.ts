// Mettre en place un historique des combats qui ont eu lieu sur la page battle
// Sur la page Profile, je dois avoir la liste des combats que l'utilisateur a effectué (ainsi que le vainqueur)
// Cet historique doit etre présent dans le store
// Je peux supprimer un combat de l'historique via la page profile

import { createSlice } from '@reduxjs/toolkit'

type BattleHistoryEntry = {
  id: string
  datetime: string
  winner: string
  loser: string
}

type BattleHistoryState = Array<BattleHistoryEntry>

const initialState: BattleHistoryState = []

export const battleHistorySlice = createSlice({
  name: 'battleHistory',
  initialState,
  reducers: {
    addBattleHistoryEntry: (state, action: { payload: BattleHistoryEntry }) => {
      state.push(action.payload)
    },
    removeBattleHistoryEntry: (state, action: { payload: number }) => {
      state.splice(action.payload, 1)
    },
  },
})

export const { addBattleHistoryEntry, removeBattleHistoryEntry } = battleHistorySlice.actions

export default battleHistorySlice.reducer
