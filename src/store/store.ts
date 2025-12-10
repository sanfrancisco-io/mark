import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { basicApi } from './basicApi'
import HeaderSlice from '@/modules/header/domain/store/slice'

const rootReducer = combineReducers({
  HeaderSlice,
  [basicApi.reducerPath]: basicApi.reducer,
})

export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(basicApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
