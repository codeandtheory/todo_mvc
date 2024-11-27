import { ITodo } from "@/app/types";
export default function Todo({ todo }: { todo: ITodo }) {
  return <div>{todo.todo}</div>;
}

