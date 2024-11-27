import { setup, assign } from 'xstate';
import { ITodo } from '@/app/types';

interface TodoContext {
  todo: string;
  todos: ITodo[];
}

type AddEvent = {
  type: 'add';
  value: string;
}

type DeleteEvent = {
  type: 'delete';
  id: number;
}
export const todoMachine = setup({
  types: {
    context: {} as TodoContext,
    events: {} as AddEvent | DeleteEvent
  },
  actions: {
    addTodo: assign({
      todos: ({ context, event }) => [...context.todos, { id: context.todos.length + 1, todo: (event as AddEvent).value }]
    }),
    deleteTodo: assign({
      todos: ({ context, event }) => context.todos.filter((todo: ITodo) => todo.id !== (event as DeleteEvent).id)
    })
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
        'add': { actions: 'addTodo'},
        'delete': { actions: 'deleteTodo'}
      }
    },
  }
});
