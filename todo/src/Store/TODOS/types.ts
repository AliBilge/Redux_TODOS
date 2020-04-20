export interface Task {
    id: number,
    name: string
  }
  
  export interface TaskListState {
    tasks: Task[]
  }
  
  export const REMOVE_TASK_FROM_LIST = 'REMOVE_TASK_FROM_LIST';
  export const ADD_TASK_TO_LIST = 'ADD_TASK_TO_LIST';
  
  // Define action.
  
  interface RemovetASKFromlIST {
    type: typeof REMOVE_TASK_FROM_LIST,
    payload: number
  }
  
  interface AddTaskToList {
    type: typeof ADD_TASK_TO_LIST,
    payload: Task
  }
  
  export type 
  TodoActionTypes = RemoveTaskFromList | AddTaskToList;