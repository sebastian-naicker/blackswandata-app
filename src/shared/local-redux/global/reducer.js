import { reducerFactory } from 'factories'
import * as actions from './actions'

const initialState = {
	repos: [],
	loading: false,
	success: false,
	error: undefined
}

/* eslint-disable */
const global = reducerFactory(initialState, actions)
export default global
