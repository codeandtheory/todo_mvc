import { ITodo } from "@/app/types";
import { Button } from "@/app/components/ui/button";
export default function Todo({ todo }: { todo: ITodo }) {
  return (
    <div className="flex justify-between items-center w-full">
      <span>{todo.todo}</span>
      <Button variant="link">Delete</Button>
    </div>
  );
}

