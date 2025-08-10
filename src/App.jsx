import React, { useState } from "react";

const App = () => {
  const [task, setTask] = useState([]);

  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [desc, setDesc] = useState("");
  const [status, setStatus] = useState("Todo");

  function handleTitle(event) {
    setTitle(event.target.value);
  }

  function handleDate(event) {
    setDate(event.target.value);
  }

  function handleDesc(event) {
    setDesc(event.target.value);
  }

  function handleStatus(event) {
    setStatus(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const newTask = {
      id: Date.now(),
      title,
      date,
      desc,
      status,
    };

    setTask([...task, newTask]);
    // Optionally clear form after submit
    setTitle("");
    setDate("");
    setDesc("");
    setStatus("Todo");
  };

  function handleDelete(index) {
    setTask(task.filter((_, i) => i !== index));
  }

  function handleEdit(index) {
    const taskToEdit = task[index];
    setTitle(taskToEdit.title);
    setDate(taskToEdit.date);
    setDesc(taskToEdit.desc);
    setStatus(taskToEdit.status);
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-900 via-purple-800 to-violet-900 p-5 sm:p-10">
      <h1 className="text-center text-3xl sm:text-4xl font-bold text-white p-4 sm:py-5">
        Task Manager App
      </h1>

      <div className="container mx-auto w-full sm:w-3/4 md:w-1/2">
        <form className="bg-white/10 backdrop-blur-md p-5 rounded-lg shadow-lg text-white text-xl sm:text-2xl text-center">
          <h1 className="text-2xl sm:text-3xl font-bold text-center py-3 sm:py-5">
            Add New Task
          </h1>
          <label className="block mb-1 text-left ml-1">Title :</label>
          <input
            type="text"
            placeholder="Enter Task Title"
            onChange={handleTitle}
            value={title}
            className="border border-white/30 bg-transparent rounded-md p-2 text-white mb-4 w-full sm:w-3/4"
          />
          <label className="block mb-1 text-left ml-1">Date :</label>
          <input
            type="date"
            value={date}
            onChange={handleDate}
            className="border border-white/30 bg-transparent rounded-md p-2 text-white mb-4 w-full sm:w-3/4"
          />
          <label className="block mb-1 text-left ml-1">Desc :</label>
          <input
            type="text"
            value={desc}
            onChange={handleDesc}
            placeholder="Short description"
            className="border border-white/30 bg-transparent rounded-md p-2 text-white mb-4 w-full sm:w-3/4"
          />
          <label className="block mb-1 text-left ml-1">Status :</label>
          <select
            className="border border-white/30 bg-transparent rounded-md p-2 text-white mb-4 w-full sm:w-3/4"
            value={status}
            onChange={handleStatus}
          >
            <option className="bg-purple-300 text-black">Select</option>
            <option className="bg-purple-300 text-black">Todo</option>
            <option className="bg-purple-300 text-black">Inprogress</option>
            <option className="bg-purple-300 text-black">Onhold</option>
            <option className="bg-purple-300 text-black">Done</option>
          </select>
          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-gradient-to-r from-green-500 to-green-700 text-white px-6 py-2 rounded-lg transition transform hover:translate-x-1 ease-in-out"
          >
            Add Task
          </button>
        </form>
      </div>

      <div className="mt-6 mb-8 px-2 sm:px-0">
        <h1 className="text-white font-bold text-2xl sm:text-3xl p-2 text-center">
          Task Lists
        </h1>
        <div className="overflow-x-auto mx-auto w-full sm:w-3/4 md:w-1/2 rounded-lg bg-white/5 backdrop-blur-sm border border-white/30">
          <table className="min-w-full text-white border-collapse">
            <thead>
              <tr className="bg-white/10">
                <th className="p-2 sm:p-3 text-center text-sm sm:text-base">Title</th>
                <th className="p-2 sm:p-3 text-center text-sm sm:text-base">Date</th>
                <th className="p-2 sm:p-3 text-center text-sm sm:text-base">Description</th>
                <th className="p-2 sm:p-3 text-center text-sm sm:text-base">Status</th>
                <th className="p-2 sm:p-3 text-center text-sm sm:text-base">Action</th>
              </tr>
            </thead>
            <tbody>
              {task.map((tasks, index) => (
                <tr
                  key={tasks.id}
                  className="border-t border-white/20 hover:bg-white/10 transition text-sm sm:text-base"
                >
                  <td className="p-2 sm:p-3 text-center">{tasks.title}</td>
                  <td className="p-2 sm:p-3 text-center">{tasks.date}</td>
                  <td className="p-2 sm:p-3 text-center">{tasks.desc}</td>
                  <td className="p-2 sm:p-3 text-center">{tasks.status}</td>
                  <td className="p-2 sm:p-3 text-center flex justify-center gap-3">
                    <button
                      onClick={() => handleEdit(index)}
                      className="px-2 sm:px-3 py-1 bg-blue-500 text-black hover:bg-blue-200 rounded"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(index)}
                      className="px-2 sm:px-3 py-1 bg-red-500 text-black hover:bg-red-200 rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
              {task.length === 0 && (
                <tr>
                  <td
                    colSpan="5"
                    className="p-3 text-center text-white/70 italic"
                  >
                    No tasks added yet.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default App;
