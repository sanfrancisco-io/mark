import type { IHeaderState } from '../interface/headerState'

type WithHeaderState = {
  HeaderSlice: IHeaderState
}
export const HeaderStateSelector = (state: WithHeaderState): IHeaderState =>
  state.HeaderSlice
