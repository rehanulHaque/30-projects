import { useEffect, useState } from "react";
import { BiPlus } from "react-icons/bi";
import TodoComponent from "./components/TodoComponent";

interface TodoTypes {
  title: string;
  completed: boolean;
  id: string;
}
const fakeData = [
  {
    id: "test",
    title: "Test Todo",
    completed: false,
  },
];

export default function App() {
  const [todos, setTodos] = useState<TodoTypes[]>(fakeData);
  const [displayTodos, setDisplayTodos] = useState<TodoTypes[]>(todos);
  const [title, setTitle] = useState("");
  const [filter, setFilter] = useState<"all" | "completed">("all");

  useEffect(() => {
    if (filter === "completed") {
      setDisplayTodos(todos.filter((todo) => todo.completed));
    } else {
      setDisplayTodos(todos);
    }
  }, [filter, todos]);

  // Add Todo
  const handelSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newTodo = {
      id: Date.now().toString(),
      title,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    setTitle("");
  };

  // handel Update
  const handelUpdate = (id: string) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(newTodos);
  }

  // Handel Delete
  const handelDelete = (id: string) =>{
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  }

  
  return (
    <main className="h-screen max-w-3xl mx-auto p-4">
      {/* Header */}
      <div className="my-8">
        <h1 className="font-semibold text-2xl text-center">Todo List</h1>
      </div>
      {/* Search Bar */}
      <div className="flex justify-between items-center">
        <form onSubmit={handelSubmit} className="flex gap-4">
          <div>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded outline-none"
              placeholder="Add Todo"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
          </div>
          <div>
            <button className="bg-purple-600 p-3 text-white rounded-md">
              <BiPlus />
            </button>
          </div>
        </form>
        <div>
          <select className="border-none bg-purple-600 py-2 font-semibold rounded-md text-white text-center outline-none" onChange={(e) => setFilter(e.target.value as "all" | "completed")}>
            <option value="all">All</option>
            <option value="completed">Completed</option>
          </select>
        </div>
      </div>
      {/* Todo List */}
      <div className="mt-8 flex gap-4 flex-col">
        {displayTodos.map((todo) => (
          <TodoComponent
            key={todo.id}
            id={todo.id}
            title={todo.title}
            completed={todo.completed}
            handelUpdate={handelUpdate}
            handelDelete={handelDelete}
          />
        ))}
      </div>
    </main>
  );
}
