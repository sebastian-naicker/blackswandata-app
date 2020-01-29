import { reducerFactory } from 'factories'
import * as actions from './actions'

const initialState = {
	repos: [],
	issues: {},
	loading: false,
	success: false,
	error: undefined,
	searchQuery: '',
	pageNum: 1
}

/* eslint-disable */
const global = reducerFactory(initialState, actions)
export default global
