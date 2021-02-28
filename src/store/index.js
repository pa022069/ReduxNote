import { createStore } from 'redux'
// reducer
import stores from '../reducer'

const store = createStore(stores);

export default store;