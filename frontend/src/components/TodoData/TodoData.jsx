import axios from "axios";
import React, { useState } from "react";

export const TodoData = ({ todos, fetchTodos }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [currentTodo, setCurrentTodo] = useState({
    id: "",
    firstName: "",
    lastName: "",
    gender: "",
    languages: "",
    email: "",
  });

  const handleDeleteTodo = async (id) => {
    try {
      console.log("Deleting todo with ID:", id);
      const response = await axios.delete(
        `http://localhost:5000/api/delete-todo/${id}`
      );
      console.log("Todo deleted:", response.data);
      fetchTodos();
    } catch (error) {
      console.error(
        "Error deleting todo:",
        error.response?.data || error.message
      );
    }
  };

  const handleEditClick = (todo) => {
    setIsEditing(true);
    setCurrentTodo(todo);
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("Updating todo:", currentTodo);
      const response = await axios.put(
        `http://localhost:5000/api/update-todo/${currentTodo.id}`,
        currentTodo
      );
      console.log("Todo updated:", response.data);
      setIsEditing(false);
      fetchTodos();
    } catch (error) {
      console.error(
        "Error updating todo:",
        error.response?.data || error.message
      );
    }
  };

  return (
    <>
      {isEditing ? (
        <EditTodoForm
          currentTodo={currentTodo}
          setCurrentTodo={setCurrentTodo}
          handleEditSubmit={handleEditSubmit}
          setIsEditing={setIsEditing}
        />
      ) : null}
      <div className="w-full h-full py-8 lg:px-48 md:px-36 px-5">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500">
            <thead className="text-xl text-gray-700 uppercase bg-gray-50 ">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Gender
                </th>
                <th scope="col" className="px-6 py-3">
                  Language
                </th>
                <th scope="col" className="px-6 py-3">
                  Email
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {todos.length > 0
                ? todos.map((todo) => {
                    return (
                      <tr
                        key={todo.id}
                        className="odd:bg-white even:bg-gray-50 text-xl"
                      >
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                        >
                          {todo.firstName} {todo.lastName}
                        </th>
                        <td className="px-6 py-4">{todo.gender}</td>
                        <td className="px-6 py-4">
                          {todo.languages.toString()}
                        </td>
                        <td className="px-6 py-4">{todo.email}</td>
                        <td className="px-6 py-4 flex items-center gap-4">
                          <button
                            className="py-1 px-4 text-xl bg-blue-500 text-white rounded-lg"
                            onClick={() => handleEditClick(todo)}
                          >
                            Edit
                          </button>
                          <button
                            className="py-1 px-2 text-xl text-white bg-red-600 rounded-lg"
                            onClick={() => handleDeleteTodo(todo.id)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    );
                  })
                : null}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

const EditTodoForm = ({
  currentTodo,
  setCurrentTodo,
  handleEditSubmit,
  setIsEditing,
}) => {
  return (
    <>
      <div className="w-full h-screen fixed top-0 left-0 z-10 bg-[#00000099] flex items-center justify-center">
        <div className="sm:w-[60rem] w-full p-8 bg-white rounded-2xl relative">
          <div
            className="absolute top-8 right-8"
            onClick={() => setIsEditing(false)}
          >
            <i className="uil uil-times text-5xl cursor-pointer"></i>
          </div>
          <div className="w-full h-full flex flex-col justify-between gap-4">
            <h1 className="text-4xl text-black font-semibold">Edit Todo</h1>

            <form className="w-full flex flex-col gap-6">
              <div className="w-full flex items-center justify-between gap-8">
                <div className="w-full flex flex-col gap-4">
                  <label
                    htmlFor="firstname"
                    className="text-2xl text-black font-medium"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstname"
                    id="firstname"
                    placeholder="Enter your first name"
                    className="w-full h-20 bg-[#ffeef0] px-8 text-2xl"
                    value={currentTodo.firstName}
                    onChange={(e) =>
                      setCurrentTodo({
                        ...currentTodo,
                        firstName: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="w-full flex flex-col gap-4">
                  <label
                    htmlFor="firstname"
                    className="text-2xl text-black font-medium"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastname"
                    id="lastname"
                    placeholder="Enter your last name"
                    className="w-full h-20 bg-[#ffeef0] px-8 text-2xl"
                    value={currentTodo.lastName}
                    onChange={(e) =>
                      setCurrentTodo({
                        ...currentTodo,
                        lastName: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
              <div className="w-full flex flex-col gap-4">
                <span className="text-2xl text-black font-medium">Gender</span>
                <div className="flex items-center gap-4">
                  <div className="w-48 py-4 px-4 flex items-center gap-4 bg-[#ffeef0]">
                    <input
                      type="radio"
                      className="w-8 h-8 accent-[#ff3e54]"
                      name="gender"
                      id="male"
                      value="male"
                      checked={currentTodo.gender === "male"}
                      onChange={(e) =>
                        setCurrentTodo({
                          ...currentTodo,
                          gender: e.target.value,
                        })
                      }
                    />
                    <label htmlFor="male" className="text-3xl text-[#686465]">
                      Male
                    </label>
                  </div>
                  <div className="w-48 py-4 px-4 flex items-center gap-4 bg-[#ffeef0]">
                    <input
                      type="radio"
                      className="w-8 h-8 accent-[#ff3e54]"
                      name="gender"
                      id="female"
                      value="female"
                      checked={currentTodo.gender === "female"}
                      onChange={(e) =>
                        setCurrentTodo({
                          ...currentTodo,
                          gender: e.target.value,
                        })
                      }
                    />
                    <label htmlFor="female" className="text-3xl text-[#686465]">
                      Female
                    </label>
                  </div>
                </div>
              </div>
              <div className="w-full flex flex-col gap-4">
                <span className="text-2xl text-black font-medium">
                  Language
                </span>
                <div className="flex flex-col gap-4">
                  {["English", "Hindi", "Marathi"].map((lang) => (
                    <div
                      key={lang}
                      className="w-72 py-4 px-4 flex items-center gap-4 bg-[#ffeef0]"
                    >
                      <input
                        type="checkbox"
                        className="w-8 h-8 accent-[#ff3e54]"
                        name={lang.toLowerCase()}
                        id={lang.toLowerCase()}
                        checked={currentTodo.languages.includes(lang)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setCurrentTodo({
                              ...currentTodo,
                              languages: [...currentTodo.languages, lang],
                            });
                          } else {
                            setCurrentTodo({
                              ...currentTodo,
                              languages: currentTodo.languages.filter(
                                (l) => l !== lang
                              ),
                            });
                          }
                        }}
                      />
                      <label
                        htmlFor={lang.toLowerCase()}
                        className="text-3xl text-[#686465]"
                      >
                        {lang}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="w-full flex flex-col gap-4">
                <label
                  htmlFor="firstname"
                  className="text-2xl text-black font-medium"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email address"
                  className="w-full h-20 bg-[#ffeef0] px-8 text-2xl"
                  value={currentTodo.email}
                  onChange={(e) =>
                    setCurrentTodo({ ...currentTodo, email: e.target.value })
                  }
                />
              </div>
              <div className="w-full">
                <input
                  type="submit"
                  value="Edit"
                  className="w-full h-20 bg-[#ff3e54] text-3xl text-white font-medium rounded-2xl cursor-pointer"
                  onClick={handleEditSubmit}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
