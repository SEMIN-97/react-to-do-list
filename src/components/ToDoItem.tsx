import styled from 'styled-components';

import { ToDoDTO } from '../types/todoType';
import { useState } from 'react';

interface ToDoItemProps extends ToDoDTO {
  onToggleCheck: () => void;
  onDeleteItem: () => void;
}

const ToDoItemLayout = styled.div`
  position: relative;
  overflow: hidden;
  
  .hover-area {
    position: absolute;
    top: 0;
    right: 0;
    width: 60px;
    height: 100%;
    content: '';
  }
`;

const ToDoItemContents = styled.div<{ $isHover: boolean }>`
  display: flex;
  align-items: center;
  position: relative;
  padding: 20px;
  background-color: var(--color-secondary);
  border-radius: 10px;
  font-size: 14px;
  cursor: pointer;
  transition: transform 0.3s;

  ${props => props.$isHover && `
    transform: translateX(-60px);
  `}
`;

const Checkbox = styled.div<{ $checked: boolean }>`
  position: relative;
  width: 20px;
  height: 20px;
  border: 1px solid var(--color-text);
  
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

const DeleteButton = styled.button<{ $isHover: boolean }>`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translate(0%, -50%);
  width: 40px;
  height: 40px;
  background-color: var(--color-primary);
  border-radius: 50%;
  color: var(--color-secondary);
  font-size: 16px;
  
  &:after {
    position: absolute; 
    top: 0;
    right: -10px;
    width: 60px;
    height: 100%;
    background-color: var(--color-secondary);
    transition: transform 0.3s;
    content: '';

    ${props => props.$isHover && `
      transform: translateX(-60px);
  `}
  }
`;

export default function ToDoItem({ text, checked, onToggleCheck, onDeleteItem }: ToDoItemProps) {
  const [isHover, setIsHover] = useState<any>(false);

  function handleMouseOver() {
    setIsHover(true);
  }

  function handleMouseOut() {
    setIsHover(false);
  }

  return (
    <ToDoItemLayout>
      <ToDoItemContents $isHover={isHover} onClick={onToggleCheck}>
        <Checkbox $checked={checked} />
        <Text $checked={checked}>{ text }</Text>
      </ToDoItemContents>
      <div className="hover-area" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
        <DeleteButton className="material-symbols-outlined" $isHover={isHover} onClick={onDeleteItem}>delete</DeleteButton>
      </div>
    </ToDoItemLayout>
  );
}
