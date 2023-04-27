import Todo from "./todo";

let todos = []

const getTodos = async () => {
  todos = await fetch("http://localhost:3001/api/todo/list");
  return todos.json();
};

const clearTodos = () => {
    todos = []
}

export default async function TodoList() {
  const { todos } = await getTodos();

  return (
    <div>
      <ul className="list-none p-0 min-h-60 relative overflow-y-visible">
        {todos.map((t) => {
          return (
            <li key={t.id} className="group w-full mx-1 relative mb-1 px-3 py-4 rounded-sm cursor-default break-all overflow-hidden">
              <Todo todo={t} />
            </li>
          );
        })}
      </ul>
      <span className=" mx-1 my-1 px-3 py-3 font-semibold">{`You have ${todos.length} task{s} in your todo list`}</span>
    </div>
  );
}
