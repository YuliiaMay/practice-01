import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Grid, GridItem, SearchForm, EditForm, Text, Todo } from 'components';

export class Todos extends Component {
  state = {
    todos: [],
  };

  componentDidUpdate() {
    console.log(this.state.todos);
  }

  onSubmit = text => {
    this.addTodo(text);
  };

  addTodo = text => {
    const todo = {
      text,
      id: nanoid(),
    };
    this.setState(prevState => ({ todos: [...prevState.todos, todo] }));
  };

  render() {
    return (
      <>
        <SearchForm onSubmit={this.onSubmit} />
      </>
    );
  }
}
