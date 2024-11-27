import { create } from 'zustand'
import { ITodo } from '@/app/types'

export const useTodoStore = create((set) => {
  return {
    todos: [
      { id: 1, todo: "Buy milk" },
      { id: 2, todo: "Buy bread" },
      { id: 3, todo: "Buy eggs" },
    ],
    addTodo: (todo: string) => set((state: { todos: ITodo[]}) => ({ todos: [...state.todos, { id: state.todos.length + 1, todo }]})),
  }
})

export default useTodoStore;
