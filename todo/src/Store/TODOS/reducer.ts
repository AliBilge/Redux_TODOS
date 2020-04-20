import { TodoState, REMOVE_TASK_FROM_LIST, ADD_TASK_TO_LIST, 
  TodoActionTypes } from './types';

// Set up a default or "initial" Todo state.
const initialState: TodoState = {
  tasks: [
    {
      id: 1,
      name: 'Todo something'
    }
  ]
}

export function todoReducer ( state = initialState, action: TodoActionTypes ) {
  switch ( action.type ) {
    case REMOVE_TASK_FROM_LIST:
      return {
        ...state,
        // Filter through, and return the array WITHOUT the matching ID.
        tasks: state.tasks.filter( task => task.id !== action.payload )
      }
    case ADD_TASK_TO_LIST:
      return {
        ...state,
        // Add NEW task
        tasks: [ ...state.tasks, action.payload ]
      }
    default:
      return state;
  }
}