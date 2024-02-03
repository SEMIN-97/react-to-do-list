import styled from 'styled-components';

import { ToDoType } from '../types/todoType';

const ToDoItemLayout = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  background-color: #FFF;
  border-radius: 10px;
  font-size: 14px;
  cursor: pointer;
`;

const Checkbox = styled.div<{ $checked: boolean }>`
  position: relative;
  width: 20px;
  height: 20px;
  border: 1px solid #27272A;
  
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

export default function ToDoItem({ text, checked, onToggleCheck}: ToDoType) {
  return (
    <ToDoItemLayout onClick={onToggleCheck}>
      <Checkbox $checked={checked} />
      <Text $checked={checked}>{ text }</Text>
    </ToDoItemLayout>
  );
}
