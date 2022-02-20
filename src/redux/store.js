import {createStore} from "redux"

// Selectors: selectionner une partie de notre store

// Actions: fonctions qui renvoient un objet aux reducers - {type: MON_ACTION, payload:{data}}

// Reducers: fonctions retournent un nouveau state

// Store: attaché à React - accessible depuis tous les composants

export const store = createStore()