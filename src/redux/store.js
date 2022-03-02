import {createStore, combineReducers} from 'redux';

// Selectors: selectionner une partie de notre store
export const getTasks = store => store.tasksList;
/*Autre facon de l'ecrire:
export function getTasks(store){
    return store.tasksList
} */
export const getCompletedTasks = store =>
  store.tasksList.filter(task => task.completed);

// Actions: fonctions qui renvoient un objet aux reducers - {type: MON_ACTION, payload:{data}}
// On va ajouter, modifier, supprimer une tache

// ADD_TASK
// on nomme l'acion
const ADD_TASK = 'ADD_TASK';
// on cree la fonction qui va renvoyer l'objet
export function addTask(title) {
  return {
    type: ADD_TASK,
    payload: {
      title: title,
    },
  };
}

// TOGGLE_TASK

// DELETE_TASK

// Reducers: fonctions retournent un nouveau state
const initialState = [{id: 1, title: 'init task', isCompleted: false}];

const tasksList = (state = initialState, action) => {
  switch (action.type) {
    //case MON_ACTION:
    case ADD_TASK:
      //modifs
      /*return newState. 
        On ajoute le nouveau state dans le nouvel array avec les trois "."
        On ajoute la nouvelle tâche avec l'id le title le completed
        */
      return [
        ...state,
        {
          id: new Date().getTime(),
          title: action.payload.title,
          isCompleted: false,
        },
      ];
    default:
      return state;
  }
};

/* a chaque fois que l'on va creer un nouveau reducer,
les donnees du store auront la forme d un objet (ici Store avec une clé
tasksList) 
Store = {
    tasksList: [{id: 1, title: 'init task', isCompleted: false}]
}
*/
const rootReducers = combineReducers({
  tasksList,
});

// Store: attaché à React - accessible depuis tous les composants

export const store = createStore(rootReducers);
