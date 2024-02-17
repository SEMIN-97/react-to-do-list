import { http, HttpResponse } from 'msw';

import { ToDoDTO, UpdateToDoParams } from '../types/todoType';

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
  http.get<never, never, Array<ToDoDTO>>('/todos', () => {
    return HttpResponse.json(todos);
  }),
  http.post<never, ToDoDTO>('/todos', async ({ request }) => {
    const data = await request.json();
    const nextId = Math.max(...todos.map(todo => todo.id)) + 1;
    todos.unshift({
      id: nextId,
      text: data.text,
      checked: false
    });

    return new HttpResponse(null, { status: 201 });
  }),
  http.patch<UpdateToDoParams, ToDoDTO>('/todos/:id', async ({ params, request }) => {
    const data = await request.json();
    const findItem = todos.find(({id}) => id === Number(params.id));

    if (!findItem) {
      return new HttpResponse(null, { status: 404 });
    }

    findItem.checked = data.checked;
    return new HttpResponse(null, { status: 204 });
  }),
  http.delete<UpdateToDoParams>('/todos/:id', async ({ params }) => {
    const findItemIdx = todos.findIndex(({id}) => id === Number(params.id));

    if (0 > findItemIdx) {
      return new HttpResponse(null, { status: 404 });
    }

    todos.splice(findItemIdx, 1);
    return new HttpResponse(null, { status: 200 });
  })
];

