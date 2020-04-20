import React from 'react';
import { RootState } from '../Store/index'
import { removeItemFromInventory, addItemToInventory } from '../store/inventory/action';
import { Item } from '../store/TODOS/types';
import { Grid, Form, Input, Button, Card } from 'semantic-ui-react';
import { connect } from 'react-redux';

export interface ITodoProps {
  removeTaskFromList: typeof removeTaskFromList,
  addTaskToList: typeof addTaskToList,
  items: Task[]
}

export class Todo extends React.Component<ITodoProps>
{
  generateID = (): number => {
    let randomNumber: number = Math.floor( Math.random() * 1000 );
    randomNumber += this.props.items.length;
    return randomNumber;
  }
  newTask = ( event: any ) => {
    event.preventDefault();
    // Handle retrieval of form field value.
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
        <Grid.Row>
          <Form onSubmit={this.newTask}>
            <Form.Field>
              <label htmlFor="todo-input">Enter New Todos</label>
              <Input name="todo-input" type='text' />
            </Form.Field>
            <Input type="submit" value="Add" />
          </Form>
        </Grid.Row>
        <h3>New Task List</h3>
        <ul>
          { this.props.items.map( element => (
              <li>
                {element.name}
                <Button size='large' color='green'
                  onClick={(event) => {
                    this.deleteTask( element.id )
                }}>
                  Delete
                </Button>
              </li>
          ) ) }
        </ul>
      </Grid>
    );
  }
}

// redux task state.
const mapStateToProps = ( state: RootState ) => {
  return {
    items: state.todo.items
  }
}

// Combine react and redux
export default connect(
  mapStateToProps,
  { addTaskToList, removeTaskFromList }
)( Todo );