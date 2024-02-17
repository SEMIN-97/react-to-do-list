import styled from 'styled-components';

import ToDoItem from './ToDoItem';
import { ToDoDTO } from '../types/todoType';

interface ToDoListProps {
  toDos: ToDoDTO[];
  onToggleCheck: (id: number, checked: boolean) => void;
  onDeleteItem: (id: number) => void;
}

const StyledTodoList = styled.ul`
  margin-top: 45px;

  li + li {
    margin-top: 10px;
  }
`;

export default function ToDoList({ toDos, onToggleCheck, onDeleteItem }: ToDoListProps) {
  return (
    <StyledTodoList>
      {toDos.map(({ id, text, checked }) => (
        <li key={id}>
          <ToDoItem
            id={id}
            text={text}
            checked={checked}
            onToggleCheck={() => onToggleCheck(id, checked)}
            onDeleteItem={() => onDeleteItem(id)}
          />
        </li>
      ))}
    </StyledTodoList>
  );
}
