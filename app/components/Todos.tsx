import { ITodo } from "@/app/types";
import Todo from "./Todo";
import { useTodoStore } from "@/app/store/TodoStore";

export default function Todos() {
  const { todos } = useTodoStore();
  return <div>{todos.map((todo: ITodo) => <Todo key={todo.id} todo={todo} />)}</div>;
}
