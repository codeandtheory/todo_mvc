"use client";

import Todos from "./components/Todos";
import TodoForm from "./components/TodoForm";
import { useTodoStore } from "./store/TodoStore";

export default function Home() {
  const { todos, addTodo } = useTodoStore();
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="w-96 flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1>Todo App</h1>
        <TodoForm addTodo={addTodo} />
        <Todos todos={todos} />
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      </footer>
    </div>
  );
}
