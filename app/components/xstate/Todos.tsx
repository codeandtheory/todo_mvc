// Xstate TodoForm

import { todoMachineActor } from "@/app/components/xstate/storeContext";
import { ITodo } from "@/app/types";
import Todo from "@/app/components/xstate/Todo";

export default function Todos() {
  const { context } = todoMachineActor.getSnapshot();
  console.log(context.todos)
  return <div>{context.todos.map((todo: ITodo) => <Todo key={todo.id} todo={todo} />)}</div>;
}