import React from 'react';
import { RootState } from '../Store/index'
import { removeTaskFromList, addTaskToList } from '../Store/TODOS/action';
import { Task } from '../Store/TODOS/types';
import { Grid, Form, Input, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';

export interface ITodoProps {
  removeTaskFromList: typeof removeTaskFromList,
  addTaskToList: typeof addTaskToList,
  tasks: Task[]
}

export class Todo extends React.Component<ITodoProps>
{
  generateID = (): number => {
    let randomNumber: number = Math.floor( Math.random() * 1000 );
    randomNumber += this.props.tasks.length;
    return randomNumber;
  }
  newTask = ( event: any ) => {
    event.preventDefault();
    const formField: 
    HTMLInputElement | null = document.querySelector( '[name="todo-input"]' );
    let formFieldValue: string = '';
    if ( formField !== null ) formFieldValue = formField.value;
    // Add new Todos to the list.
    this.props.addTaskToList( {
      id: this.generateID(),
      name: formFieldValue
    } );
  }

  // Remove the Task by the ID number
  deleteTask = ( id: number ) => {
    this.props.removeTaskFromList(id);
  }
  render () {
    return (
      <Grid>
        <Grid.Row centered>
          <Form onSubmit={this.newTask}>
            <Form.Field>
              <label htmlFor="todo-input">Enter New Todos</label>
              <Input name="todo-input" type='text' />
            </Form.Field>
            <Input type="submit" value="Add to list" />
          </Form>
        </Grid.Row>
        <h3>New Todos List</h3>
        <Grid.Row centered>
        <ul>
          { this.props.tasks.map( element => (
              <li>
                {element.name}
                <Button size='tiny' color='green'
                  onClick={(event) => {
                    this.deleteTask( element.id )
                }}>
                  Delete
                </Button>
              </li>
          ) ) }
        </ul>
        </Grid.Row>
      </Grid>
    );
  }
}

// redux task state.
const mapStateToProps = ( state: RootState ) => {
  return {
    tasks: state.todo.tasks
  }
}

// Combine react and redux
export default connect(
  mapStateToProps,
  { addTaskToList, removeTaskFromList }
)(Todo);