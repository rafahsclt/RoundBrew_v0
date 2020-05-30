import { createStore, combineReducers } from 'redux'

import BluetoothInfo from './reducers/btReducer'
import setRecipe from './reducers/recipeReducer'

const rootReducers = combineReducers({
    btState: BluetoothInfo,
    recipeState: setRecipe
})

const store = createStore(rootReducers)

export default store