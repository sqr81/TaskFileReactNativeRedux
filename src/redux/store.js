import {createStore, combineReducers} from "redux"

// Selectors: selectionner une partie de notre store

// Actions: fonctions qui renvoient un objet aux reducers - {type: MON_ACTION, payload:{data}}

// Reducers: fonctions retournent un nouveau state
const initialState = [{id:1, title:"init task", completed: false}]
const tasksList = (state = initialState, action) => {
    switch(action.type){
        //case MON_ACTION:
            //modifs
            //return newState
        default:
            return state
    }
}

const rootReducers = combineReducers({
    tasksList
})

// Store: attaché à React - accessible depuis tous les composants

export const store = createStore(rootReducers);