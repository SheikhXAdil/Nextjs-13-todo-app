"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { UilPlus } from '@iconscout/react-unicons'

async function addTodo(name, refresh) {
  await fetch(`/api/todo/add`, {
    method: "POST",
    body: JSON.stringify({ name }),
  });

  refresh();
}


export default function AddNewTodo() {
  const router = useRouter();
  let [name, setName] = useState("");
  return (
    <div className="w-full h-11 mx-4 my-4 flex">
      <input className="w-10/12 h-full outline-none rounded border-gray-300 border-2 text-base pl-4 focus:border-purple-500"
        type="text"
        onChange={(e) => setName(e.target.value)}
        placeholder="Please enter some text"
        value={name}
      />
      <button className="p-2 h-full w-11 border-none ml-1 outline-none cursor-pointer rounded text-lg bg-purple-500 text-white opacity-60  hover:bg-purple-500 hover:opacity-100"
        onClick={async () => {
          if (name.trim() != 0) {
            await addTodo(name, router.refresh);
            setName("");
          }
        }}
      >
        <UilPlus />
      </button>
    </div>
  );
}
