import { createActor } from "xstate";
import { todoMachine } from "@/app/store/xstate/TodoMachine";

export const todoMachineActor = createActor(todoMachine);