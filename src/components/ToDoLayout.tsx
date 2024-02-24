import { useEffect, useState } from 'react';

import axios from 'axios';
import styled from 'styled-components';

import ToDoList from './ToDoList';
import ToDoCreate from './ToDoCreate';
import { ToDoDTO } from '../types/todoType';
import ProgressIndicator from './ProgressIndicator';

const StyledLayout = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 430px;
  height: 700px;
  padding: 60px 30px;
  margin: auto;
  background-color: #F8F8F8;
  border-radius: 20px;
  box-shadow: 5px 5px 20px rgba(0, 0, 0, .15);
`;

const H1 = styled.h1`
  font-size: 36px;
  font-weight: 900;
`;

const ProgressLayout = styled.div`
  margin: 35px 0 45px;
`;

export default function ToDoLayout() {
  const [toDos, setToDos] = useState<Array<ToDoDTO>>([]);
  const completedItemCount = toDos.filter(item => item.checked).length;
  const percentage = completedItemCount / toDos.length * 100;

  useEffect(() => {
    fetchTodo();
  }, []);

  const fetchTodo = async () => {
    try {
      const res = await axios.get('/todos');
      setToDos(res.data);
    } catch (e) {
      console.error('error', e);
    }
  };

  async function updateToDo(id: number, checked: boolean) {
    try {
      await axios.patch(`/todos/${id}`, { checked: !checked });
      await fetchTodo();
    } catch (e) {
      console.error('error', e);
    }
  }

  async function deleteToDo(id: number) {
    try {
      await axios.delete(`/todos/${id}`);
      await fetchTodo();
    } catch (e) {
      console.error('error', e);
    }
  }

  async function createToDo(text: string) {
    try {
      await axios.post(`/todos`, { text });
      await fetchTodo();
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <StyledLayout>
      <H1>TO DO LIST</H1>
      <ProgressLayout>
        <ProgressIndicator percentage={percentage} />
      </ProgressLayout>
      <ToDoList
        toDos={toDos}
        onToggleCheck={updateToDo}
        onDeleteItem={deleteToDo}
      />
      <ToDoCreate
        onSubmit={createToDo}
      />
    </StyledLayout>
  );
}
