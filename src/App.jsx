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
  };

  function handleDelete(index) {
    setTask(task.filter((_, i) => i !== index));
  };

  function handleEdit(index) {
    const taskToEdit = task[index];
    setTitle(taskToEdit.title)
    setDate(taskToEdit.date)
    setDesc(taskToEdit.desc)
    setStatus(taskToEdit.status)
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-900 via-purple-800 to-violet-900 p-10">
      <h1 className="text-center text-4xl font-bold text-white p-5 py-5">
        Task Manager App
      </h1>

      <div className="container mx-auto w-1/2">
        <form className="bg-white/10 backdrop-blur-md p-5 rounded-lg shadow-lg text-white text-2xl text-center">
          <h1 className="text-3xl font-bold text-center py-5">Add New Task</h1>
          <label>Title : </label>
          <input
            type="text"
            placeholder="Enter Task Title"
            onChange={handleTitle}
            value={title}
            className="border border-white/30 bg-transparent rouded p-2 text-white mb-3 w-1/2 ml-5"
          />{" "}
          <br></br>
          <label>Date :</label>
          <input
            type="Date"
            value={date}
            onChange={handleDate}
            className="border border-white/30 bg-transparent rouded p-2 text-white mb-3 w-1/2 ml-5"
          />
          <br></br>
          <label>Desc : </label>
          <input
            type="text"
            value={desc}
            onChange={handleDesc}
            placeholder="Short description"
            className="border border-white/30 bg-transparent rouded p-4 text-white mb-3 w-1/2 ml-3"
          />{" "}
          <br></br>
          <label>Status : </label>
          <select
            className="border border-white/30 bg-transparent rouded p-2 text-white mb-3 w-1/2"
            value={status}
            onChange={handleStatus}
          >
            <option className="bg-purple-300 text-black">Select</option>
            <option className="bg-purple-300 text-black">Todo</option>
            <option className="bg-purple-300 text-black">Inprogress</option>
            <option className="bg-purple-300 text-black">Onhold</option>
            <option className="bg-purple-300 text-black">Done</option>
          </select>
          <br></br>
          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-gradient-to-r from-green-500 to-green-700 text-white px-4 py-2 rounded-lg transition transform hover:translate-x-1 ease-in-out"
          >
            Add Task
          </button>
        </form>
      </div>

      <div className="mt-4 mb-5">
        <h1 className="text-white font-bold text-3xl p-2 text-center">Task Lists</h1>
        <table className="text-white border border-white/30 rounded-lg bg-white/5 backdrop-blur-sm mx-auto w-1/2">
          <thead>
            <tr className="bg-white/10">
              <th className="p-3 text-center">Title</th>
              <th className="p-3 text-center">Date</th>
              <th className="p-3 text-center">Description</th>
              <th className="p-3 text-center">Status</th>
              <th className="p-3 text-center">Action</th>
            </tr>
          </thead>
          <tbody className="mb-5">
            {task.map((tasks, index) => (
              <tr key = {index} className="border-t border-white/20 hover:bg-white/10 transition">
                <td className="p-3">{tasks.title}</td>
                <td className="p-3">{tasks.date}</td>
                <td className="p-3">{tasks.desc}</td>
                <td className="p-3">{tasks.status}</td>
                <td className="p-3 flex gap-4">
                  <button onClick={() => handleEdit(index)} className="px-3 py-1 bg-blue-500 text-black hover:bg-blue-200">Edit</button>
                  <button onClick={() => handleDelete(index)} className="px-3 py-1 bg-red-500 text-black hover:bg-red-200">Delete</button>
                </td>
              </tr>
            ))}

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default App;
