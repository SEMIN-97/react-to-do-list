export interface UpdateToDoParams {
  id: string;
}

export interface UpdateToDoRequestBody {
  checked: boolean;
}

export interface ToDoDTO {
  id: number;
  text: string;
  checked: boolean;
}

export interface ToDoType extends ToDoDTO {
  onToggleCheck: () => void;
}
