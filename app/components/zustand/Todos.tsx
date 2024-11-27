import { ITodo } from "@/app/types";
import Todo from "@/app/components/zustand/Todo";
import { useTodoStore } from "@/app/store/zustand/TodoStore";

export default function Todos() {
  const { todos } = useTodoStore();
  return <div>{todos.map((todo: ITodo) => <Todo key={todo.id} todo={todo} />)}</div>;
}
