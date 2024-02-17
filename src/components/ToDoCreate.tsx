import { ChangeEvent, FormEvent, useState } from 'react';

import axios from 'axios';
import styled, { keyframes } from 'styled-components';

const AddButton = styled.button<{ $isOpen: boolean }>`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 50%);
  transition: transform 0.3s;
  width: 80px;
  height: 80px;
  background-color: #27272A;
  border-radius: 50%;

  ${props => props.$isOpen && `
    transform: translate(-50%, 50%) rotate(135deg);
  `}
  
  &:before {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 3px;
    height: 30px;
    background-color: #FFF;
    content: '';
  }

  &:after {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 30px;
    height: 3px;
    background-color: #FFF;
    content: '';
  }
`;

const FadeIn = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

const PopupLayout = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 30px;
  width: 100%;
  height: 100%;
  background-color: #F8F8F8;
  border-radius: 20px;
  animation: .1s ${FadeIn};
`;

const PopupTitle = styled.p`
  font-size: 24px;
  text-align: center;
`;

const Form = styled.form`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  padding: inherit;
  margin: auto;
`;

const Input = styled.input`
  width: 100%;
  height: 40px;
  border-bottom: 1px solid #27272A;
  font-size: 14px;
`;

const SubmitButton = styled.button`
  display: block;
  padding: 10px;
  margin: 20px auto 0;
  font-size: 14px;
  transition: opacity 0.2s;
  
  &:disabled {
    opacity: .3;
  }
`;

export default function ToDoCreate() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [value, setValue] = useState<string>('');

  function togglePopup() {
    setIsOpen(prev => !prev);
  }

  function changeValue(e: ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
 }

  async function submit(e: FormEvent<HTMLFormElement>) {
    try {
      await axios.post(`/todos`, { text: value });
    } catch (e) {
      console.error(e);
    } finally {
      e.preventDefault();
    }
  }

  return (
    <>
      {isOpen && (
        <PopupLayout>
          <PopupTitle>NEW</PopupTitle>
          <Form onSubmit={submit}>
            <Input autoFocus onChange={changeValue} value={value} />
            <SubmitButton type='submit' disabled={!value.length}>SUBMIT</SubmitButton>
          </Form>
        </PopupLayout>
        )}
      <AddButton onClick={togglePopup} $isOpen={isOpen} />
    </>
  );

}
