"use client";
import TodoForm from "@/app/components/xstate/TodoForm";
import Todos from "@/app/components/xstate/Todos";
import TodoMachineContext from '@/app/store/xstate/TodoMachine';

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="w-96 flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1>Todo App XState</h1>
        <TodoMachineContext.Provider>
          <TodoForm />
          <Todos />
        </TodoMachineContext.Provider>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      </footer>
    </div>
  );
}
