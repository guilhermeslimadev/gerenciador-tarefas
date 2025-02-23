import { Check, Trash } from "lucide-react";
import { useState } from "react";
import { Button } from "./components/button";

type Task = {
  id: number;
  text: string;
  completed: boolean;
};

export function App() {
  const [task, setTask] = useState<string>("");
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = () => {
    if (task.trim() !== "") {
      setTasks([...tasks, { id: Date.now(), text: task, completed: false }]);
      setTask("");
    }
  };

  const removeTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleTaskCompleted = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className=" flex flex-col items-center rounded gap-4 p-4 bg-gray-200">
      <h1 className="text-2xl text-black font-medium">Lista de Tarefas</h1>
      <div className="flex items-center gap-3">
        <input
          className="p-2 outline-none text-black rounded border border-gray-300 focus:border-gray-400"
          type="text"
          placeholder="Digite uma tarefa..."
          onChange={(e) => setTask(e.target.value)}
        />
        <Button onClick={addTask}>Adicionar tarefa</Button>
      </div>

      <ul className="flex flex-col w-full gap-4 mt-4">
        {tasks.map((t) => (
          <li
            key={t.id}
            className=" flex gap-4 justify-between rounded-md items-center"
            style={{ textDecoration: t.completed ? "line-through" : "none" }}
          >
            <div className="w-full bg-gray-500 p-2 rounded">
              <span>{t.text}</span>
            </div>
            <div className="flex gap-2">
              {t.completed ? (
                <button
                  onClick={() => toggleTaskCompleted(t.id)}
                  className="bg-gray-500 p-2 rounded text-emerald-400"
                >
                  <Check />
                </button>
              ) : (
                <Button onClick={() => toggleTaskCompleted(t.id)}>
                  <Check />
                </Button>
              )}
              <Button onClick={() => removeTask(t.id)}>
                <Trash />
              </Button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
