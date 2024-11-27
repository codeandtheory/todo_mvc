import { ITodo } from "@/app/types";
import Todo from "@/app/components/xstate/Todo";
import TodoMachineContext from '@/app/store/xstate/TodoMachine';

export default function Todos() {
  const state = TodoMachineContext.useSelector(state => state)
  const { todos } = state.context;
  return todos.length ? (
    <div>
      {todos.map((todo: ITodo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </div>
  ) : null;
}