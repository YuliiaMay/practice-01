import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import { Grid, GridItem, SearchForm, EditForm, Text, Todo } from 'components';

const localTodos = 'todos';

export default function Todos() {
  const [todos, setTodos] = useState(
    () => JSON.parse(localStorage.getItem(localTodos)) ?? []
  );

  useEffect(() => {
    localStorage.setItem(localTodos, JSON.stringify(todos));
  }, [todos]);

  const addTodo = text => {
    const todo = {
      text,
      id: nanoid(),
    };
    setTodos(prevTodos => [...prevTodos, todo]);
  };

  const delTodo = id => {
    const updatedTodos = todos.filter(item => item.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <>
      <SearchForm onSubmit={addTodo} />
      <Grid>
        {todos.map((todo, index) => {
          const { text, id } = todo;
          return (
            <GridItem key={id}>
              <Todo
                id={id}
                text={text}
                counter={index + 1}
                onRemove={delTodo}
              />
            </GridItem>
          );
        })}
      </Grid>
    </>
  );
}
