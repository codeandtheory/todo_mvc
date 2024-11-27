import { ITodo } from "@/app/types";
import { Button } from "@/app/components/ui/button";
import { useTodoStore } from "@/app/store/zustand/TodoStore";
export default function Todo({ todo }: { todo: ITodo }) {
  const { deleteTodo } = useTodoStore();

  return (
    <div className="flex justify-between items-center w-full">
      <span>{todo.todo}</span>
      <Button variant="link" onClick={() => deleteTodo(todo.id)}>Delete</Button>
    </div>
  );
}

