import { ITodo } from "@/app/types";
import { Button } from "@/app/components/ui/button";
import TodoMachineContext from '@/app/store/xstate/TodoMachine';

export default function Todo({ todo }: { todo: ITodo }) {
  const { send } = TodoMachineContext.useActorRef();
  return (
    <div className="flex justify-between items-center w-full">
      <span>{todo.todo}</span>
      <Button variant="link" onClick={() => send({type: "delete", id: todo.id})}>Delete</Button>
    </div>
  );
}

