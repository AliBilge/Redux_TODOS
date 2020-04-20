import { TodoActionTypes, ADD_TASK_TO_LIST, REMOVE_TASK_FROM_LIST, Task } from './types';

export function removeTaskFromList ( id: number ): 
TodoActionTypes {
  return {
    type: REMOVE_TASK_FROM_LIST,
    payload: id 
  }
}

export function addTaskToList ( task: Task ): 
TodoActionTypes {
  return {
    type: ADD_TASK_TO_LIST,
    payload: task 
  }
}