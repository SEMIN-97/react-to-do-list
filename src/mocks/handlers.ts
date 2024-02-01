import { http, HttpResponse } from 'msw';

import { ToDoDTO } from '../types/todoType';

const todos: Array<ToDoDTO> = [
  {
    id: 1,
    text: 'TO DO LIST를 만들어보자!',
    checked: true
  },
  {
    id: 2,
    text: '+ 버튼으로 아이템 추가하기',
    checked: false
  },
  {
    id: 3,
    text: '다크/라이트 테마 변경',
    checked: false
  }
];

export const handlers = [
  http.get('/todos', () => {
  http.get<never, never, Array<ToDoDTO>>('/todos', () => {
    return HttpResponse.json(todos);
  })
];

