import styled from 'styled-components';

import { ToDoDTO } from '../types/todoType';

const ToDoItemLayout = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  background-color: #FFF;
  border-radius: 10px;
  font-size: 14px;
`;

const Checkbox = styled.div<{ $checked: boolean }>`
  position: relative;
  width: 20px;
  height: 20px;
  border: 1px solid #27272A;
  cursor: pointer;
  
  ${props => props.$checked && `
    &:after {
      position: absolute;
      top: 44%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 18px;
      content: 'X';
    }
  `}
`;

const Text = styled.p<{ $checked: boolean }>`
  padding-left: 10px;
  ${props => props.$checked && `
    text-decoration: line-through;
  `}
`;

export default function ToDoItem({ id, text, checked }: ToDoDTO) {
  return (
    <ToDoItemLayout>
      <Checkbox $checked={checked} />
      <Text $checked={checked}>{ text }</Text>
    </ToDoItemLayout>
  );
}
