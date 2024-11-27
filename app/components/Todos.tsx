import { ITodo } from "@/app/types";
import Todo from "./Todo";
export default function Todos({ todos }: { todos: ITodo[] }) {
  return <div>{todos.map((todo) => <Todo key={todo.id} todo={todo} />)}</div>;
}
