import { useEffect, useState } from 'react';

import axios from 'axios';
import styled from 'styled-components';

import ToDoItem from './ToDoItem';
import { ToDoDTO } from '../types/todoType';

const StyledTodoList = styled.ul`
  margin-top: 45px;

  li + li {
    margin-top: 10px;
  }
`;

export default function ToDoList() {
  const [todos, setTodos] = useState<Array<ToDoDTO>>([]);
  const fetchTodo = async () => {
    try {
      const res = await axios.get('/todos');
      setTodos(res.data);
    } catch (e) {
      console.error('error', e);
    }
  };

  useEffect(() => {
    fetchTodo();
  }, []);

  async function updateTodo(id: number, checked: boolean) {
    try {
      await axios.patch(`/todos/${id}`, { checked: !checked });
      await fetchTodo();
    } catch (e) {
      console.error('error', e);
    }
  }

  async function deleteTodo(id: number) {
    try {
      await axios.delete(`/todos/${id}`);
      await fetchTodo();
    } catch (e) {
      console.error('error', e);
    }
  }


  return (
    <StyledTodoList>
      {todos.map(({ id, text, checked }) => (
        <li key={id}>
          <ToDoItem id={id} text={text} checked={checked} onToggleCheck={() => updateTodo(id, checked)} onDeleteItem={() => deleteTodo(id)} />
        </li>
      ))}
    </StyledTodoList>
  );
}
