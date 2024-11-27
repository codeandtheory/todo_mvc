// Xstate TodoForm
import { ITodo } from "@/app/types";
import Todo from "@/app/components/xstate/Todo";
import { useMachine } from '@xstate/react';
import { todoMachine } from '@/app/store/xstate/TodoMachine';

export default function Todos() {
  const [state, send] = useMachine(todoMachine);
  console.log("render todo", send);
  const { todos } = state.context;
  return todos.length ? (
    <div>
      {todos.map((todo: ITodo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </div>
  ) : null;
}