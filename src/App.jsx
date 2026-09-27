import { useState } from "react"

function App() {
  const [task, setTask] = useState("")
  const [tasks, setTasks] = useState([])

  const addTask = () => {
    if (task === "") return

    setTasks([
      ...tasks,
      {
        name: task,
        done: false,
      },
    ])

    setTask("")
  }

  const changeStatus = (index) => {
    const newTasks = [...tasks]

    newTasks[index].done = !newTasks[index].done

    setTasks(newTasks)
  }

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index)

    setTasks(newTasks)
  }

  return (
    <div className="min-h-screen bg-purple-50 p-5">

      <div className="mx-auto max-w-xl">

        {/* Title */}
        <h1 className="mb-2 text-center text-4xl font-bold text-purple-700">
          My To-Do List
        </h1>

        <p className="mb-6 text-center text-gray-500">
          Keep track of your tasks
        </p>

        {/* Add Task */}
        <div className="mb-5 flex gap-2">
          <input
            type="text"
            placeholder="Enter a task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            className="flex-1 rounded-lg border border-purple-200 bg-white px-4 py-3"
          />

          <button
            onClick={addTask}
            className="rounded-lg bg-purple-600 px-5 py-3 text-white hover:bg-purple-700"
          >
            Add
          </button>
        </div>

        {/* Task List */}
        <div className="space-y-3">

          {tasks.length === 0 && (
            <p className="rounded-lg bg-white p-5 text-center text-gray-500">
              No tasks yet.
            </p>
          )}

          {tasks.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between rounded-lg bg-white p-4 shadow-sm"
            >

              <div>
                <p
                  className={
                    item.done
                      ? "text-gray-400 line-through"
                      : "text-gray-800"
                  }
                >
                  {item.name}
                </p>

                <p
                  className={
                    item.done
                      ? "text-green-600"
                      : "text-orange-500"
                  }
                >
                  {item.done ? "Done" : "Not Done"}
                </p>
              </div>

              <div className="flex gap-2">

                <button
                  onClick={() => changeStatus(index)}
                  className="rounded bg-purple-500 px-3 py-2 text-sm text-white hover:bg-purple-600"
                >
                  {item.done ? "Not Done" : "Done"}
                </button>

                <button
                  onClick={() => deleteTask(index)}
                  className="rounded bg-red-400 px-3 py-2 text-sm text-white hover:bg-red-500"
                >
                  Delete
                </button>

              </div>

            </div>
          ))}

        </div>

        {/* User Guide */}
        <div className="mt-8 rounded-lg bg-white p-5 shadow-sm">

          <h2 className="mb-3 text-xl font-bold text-purple-700">
            How to Use
          </h2>

          <p className="mb-2 text-gray-600">
            1. Type a task and click <b>Add</b>.
          </p>

          <p className="mb-2 text-gray-600">
            2. Click <b>Done</b> to complete a task.
          </p>

          <p className="mb-2 text-gray-600">
            3. Click <b>Not Done</b> to change it back.
          </p>

          <p className="text-gray-600">
            4. Click <b>Delete</b> to remove a task.
          </p>

        </div>

      </div>

    </div>
  )
}

export default App