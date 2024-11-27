import { create } from 'zustand'
import { ITodo } from '@/app/types'

export type TodoState = {
  todos: ITodo[]
  addTodo: (todo: string) => void;
  deleteTodo: (id: number) => void;
}

export const useTodoStore = create<TodoState>()((set) => ({
  todos: [
    { id: 1, todo: "Buy milk" },
    { id: 2, todo: "Buy bread" },
    { id: 3, todo: "Buy eggs" },
  ],
  addTodo: (todo: string) => set((state: { todos: ITodo[]}) => ({ todos: [...state.todos, { id: state.todos.length + 1, todo }]})),
  deleteTodo: (id: number) => set((state: { todos: ITodo[]}) => ({ todos: state.todos.filter((todo) => todo.id !== id)})),
}))

export default useTodoStore;
