import { setup, assign } from 'xstate';
import { ITodo } from '@/app/types';
export const todoMachine = setup({
  types: {
    context: {} as {
      todo: string;
      todos: ITodo[];
    },
    events: {} as {
      type: 'add';
      value: string;
    } | {
      type: 'delete';
      id: number;
    }
  }
}).createMachine({
  id: 'todo',
  initial: "form",
  context: {
    todo: '',
    todos: [
      { id: 1, todo: "Buy milk" },
      { id: 2, todo: "Buy bread" },
      { id: 3, todo: "Buy eggs" }
    ]
  },
  states: {
    form: {       // Refer: https://stately.ai/docs/states
      on: {
        'add': {
          actions: assign({
            todo: '',
            todos: ({ context, event }) => [...context.todos, { id: context.todos.length + 1, todo: event.value }]
          })
        },
        'delete': {
          actions: assign({
            todos: ({ context, event }) => context.todos.filter((todo: ITodo) => todo.id !== event.id)
          })
        }
      }
    },
  }
});
