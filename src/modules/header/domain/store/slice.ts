import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

import type { IHeaderState } from '../interface/headerState'

const initialState: IHeaderState = {
  query: '',
}

const HeaderSlice = createSlice({
  name: 'HeaderSlice',
  initialState,
  reducers: {
    setQuery: (state, { payload }: PayloadAction<string>) => {
      state.query = payload
    },
  },
})

export default HeaderSlice.reducer

export const { setQuery } = HeaderSlice.actions
