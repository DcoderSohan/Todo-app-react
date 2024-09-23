import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const Todo = () => {
  const [todo, setTodo] = useState("");
  const [allplans, setAllplans] = useState([]);
  const [showFinished, setShowFinished] = useState(true);

  useEffect(() => {
    let todoString = localStorage.getItem("allplans");
    if (todoString) {
      let allplans = JSON.parse(localStorage.getItem("allplans"));
      setAllplans(allplans);
    }
  }, []);

  const toggleFinished = () => {
    setShowFinished(!showFinished);
  };

  const saveToLS = () => {
    localStorage.setItem("allplans", JSON.stringify(allplans));
  };

  const handleEdit = (e, id) => {
    let t = allplans.filter((i) => i.id === id);
    setTodo(t[0].todo);
    let newAllplans = allplans.filter((item) => {
      return item.id !== id;
    });

    setAllplans(newAllplans);
    saveToLS();
  };

  const handleDelete = (e, id) => {
    let newAllplans = allplans.filter((item) => {
      return item.id !== id;
    });

    setAllplans(newAllplans);
    saveToLS();
  };

  const handleAdd = () => {
    setAllplans([...allplans, { id: uuidv4(), todo, isCompleted: false }]);
    setTodo("");
    saveToLS();
  };

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleCheckbox = (e) => {
    let id = e.target.name;
    let index = allplans.findIndex((item) => item.id === id);
    let newAllplans = [...allplans];
    newAllplans[index].isCompleted = !newAllplans[index].isCompleted;
    setAllplans(newAllplans);
    saveToLS();
  };

  return (
    <div id="tasks" className="flex justify-center flex-col space-y-4 items-center">
      <h1 className="text-center text-2xl font-Poppins font-semibold">iPlanner - Manage your tasks</h1>
      <div className="container bg-blue-200 mx-3 p-5 w-full min-h-[80vh] rounded-md border-2 border-gray-400 font-Poppins">
        <div className="addPlan flex flex-col items-center justify-center">
          <h3 className="text-xl font-Poppins text-center">Create a Plan</h3>
          <div className="search space-y-3 flex flex-col items-center w-full">
            <input
              onChange={handleChange}
              value={todo}
              type="text"
              placeholder="Enter your plan"
              className="py-2 px-5 rounded-full w-full md:w-[60vw] max-w-[400px]"
            />
            <button
              className="py-2 px-5 font-Poppins bg-blue-400 rounded-full text-white shadow-md hover:bg-blue-600 font-[400]"
              onClick={handleAdd}
              disabled={todo.length <= 3}
            >
              Add
            </button>
          </div>
        </div>
        <div className="fin text-center my-4">
          <input
            type="checkbox"
            checked={showFinished}
            onChange={toggleFinished}
          />{" "}
          Show Finished
        </div>
        <h1 className="text-xl font-Poppins text-center">Your Plans</h1>
        <div className="todos flex flex-col items-center">
          {allplans.length === 0 && (
            <div className="message text-3xl font-Poppins text-gray-400 text-center">
              <h1 className="my-3">No plans to display</h1>
            </div>
          )}

          {allplans.map((item) => {
            return (
              (showFinished || !item.isCompleted) && (
                <div
                  key={item.id}
                  className="todo flex w-full max-w-[600px] justify-between items-center py-3 px-5 md:px-4 md:py-1 border-2 border-gray-200 bg-blue-100 rounded-full my-3"
                >
                  <input
                    type="checkbox"
                    name={item.id}
                    checked={item.isCompleted}
                    onChange={handleCheckbox}
                  />
                  <div className="flex-1 overflow-auto text-center mx-4">
                    <div className={item.isCompleted ? "line-through" : ""}>
                      {item.todo}
                    </div>
                  </div>
                  <div className="buttons flex gap-2">
                    <button
                      className="py-1 px-4 bg-blue-400 rounded-full hover:bg-blue-600 text-white shadow-md font-[400]"
                      onClick={(e) => handleEdit(e, item.id)}
                    >
                      <FaRegEdit />
                    </button>
                    <button
                      className="py-1 px-4 bg-blue-400 rounded-full hover:bg-blue-600 text-white shadow-md font-[400]"
                      onClick={(e) => handleDelete(e, item.id)}
                    >
                      <MdDelete />
                    </button>
                  </div>
                </div>
              )
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Todo;
