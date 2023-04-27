"use client";

import { useRouter } from "next/navigation";
import { UilTrash } from '@iconscout/react-unicons'

async function update(id, isDone, refresh) {
  await fetch(`/api/todo/update`, {
    method: "POST",
    body: JSON.stringify({ id, isDone }),
  });

  refresh();
}

async function deleteTodo(id, refresh) {
  await fetch(`/api/todo/delete?id=${id}`, {
    method: "DELETE",
  });

  refresh();
}



export default function Todo({ todo }) {
  const router = useRouter();

  return (
    <div className="flex p-2 border-2 rounded-md bg-slate-200">
      <input className="w-4 text-purple-600"
        type="checkbox"
        onChange={(e) => update(todo.id, e.target.checked, router.refresh)}
        checked={todo.isDone}
      />
      <span className="mx-4 px-2 py-1 overflow-hidden">{todo.name}
      <button className="absolute -right-11 top-1/2 w-11 text-center text-white px-2 py-3 cursor-pointer bg-red-500 rounded-e-lg -translate-y-1/2 group-hover:right-2" onClick={() => deleteTodo(todo.id, router.refresh)}>
       <UilTrash />
      </button>
      </span>
    </div>
  );
}
