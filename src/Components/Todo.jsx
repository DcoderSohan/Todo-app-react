import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Todo = () => {
  const [todo, setTodo] = useState("");
  const [allplans, setAllplans] = useState([]);
  const handleEdit = () => {};
  const handleDelete = () => {};
  const handleAdd = () => {
    setAllplans([...allplans, { id: uuidv4(), todo, isCompleted: false }]);
    setTodo("");
    console.log(allplans);
  };
  const handleChange = (e) => {
    setTodo(e.target.value);
  };
  const handleCheckbox = (e) => {
    let id = e.target.name;
    console.log(id);
    let index = allplans.findIndex((item) => {
      return item.id === id;
    });
    console.log(index);
    let newAllplans = allplans;
    console.log(newAllplans)
    newAllplans[index].isCompleted = !newAllplans[index].isCompleted;
    setAllplans(newAllplans);
  };

  return (
    <div id="tasks" className="flex justify-center">
      <div className="container bg-blue-200 mx-3 p-5 w-full min-h-[80vh] rounded-md border-2 border-gray-400 font-Poppins">
        <div className="addPlan  flex flex-col items-center justify-center">
          <h3 className="text-xl font-Poppins text-center">Create a Plan</h3>
          <div className="serach  space-x-5 space-y-3">
            <input
              onChange={handleChange}
              value={todo}
              type="text"
              name=""
              id=""
              placeholder="Enter your plan"
              className="py-2 px-5 rounded-full w-[60vw]"
            />
            <button
              className="py-2 px-5 text-center font-Poppins bg-blue-400 rounded-full text-white shadow-[0_8px_30px_rgb(0,0,0,0.12)] font-[400] hover:bg-blue-600"
              onClick={handleAdd}
            >
              Add
            </button>
          </div>
        </div>
        <h1 className="text-xl font-Poppins text-center">Your Plans</h1>
        <div className="todos flex flex-col justify-center">
          {allplans.map((item) => {
            return (
              <div
                key={item.id}
                className="todo flex w-1/2 justify-between items-center px-4 py-1 border-2 border-gray-200 bg-blue-100 rounded-full my-3 mx-auto"
              >
                <input
                  type="checkbox"
                  name={item.id}
                  id=""
                  value={item.isCompleted}
                  onChange={handleCheckbox}
                />
                <div className={item.isCompleted ? "line-through" : ""}>
                  {item.todo}
                </div>
                <div className="buttons flex gap-4">
                  <button
                    className="py-2 px-5 text-center font-Poppins bg-blue-400 rounded-full hover:bg-blue-600 text-white shadow-[0_8px_30px_rgb(0,0,0,0.12)] font-[400]"
                    onClick={handleEdit}
                  >
                    <i className="ri-edit-box-line"></i>
                  </button>
                  <button
                    className="py-2 px-5 text-center font-Poppins hover:bg-blue-600 bg-blue-400 rounded-full text-white shadow-[0_8px_30px_rgb(0,0,0,0.12)] font-[400]"
                    onClick={handleDelete}
                  >
                    <i className="ri-close-line"></i>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Todo;
