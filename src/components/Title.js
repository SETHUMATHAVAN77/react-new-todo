import React, { useState } from "react";
import {
  setCategory,
  setIsEditing,
  setModelOpen,
} from "../redux/features/taskSlice";
import { useDispatch } from "react-redux";

const category = [
  "All Tasks",
  "Important Tasks",
  "Completed Tasks",
  "Uncompleted Tasks",
];

const Title = () => {
  const [selected, setSelected] = useState("All Tasks");
  const dispatch = useDispatch();

  const handleClick = (list) => {
    setSelected(list);
    dispatch(setCategory(list));
  };

  return (
    <>
      <div className="min-h-screen shadow-lg  bg-white w-[13rem]">
        <div className=" font-bold ml-[4rem] mt-5 text-slate-600">
          TO-DO-LIST
        </div>
        <button
          onClick={() => {
            dispatch(setModelOpen(true));
            dispatch(setIsEditing(false));
          }}
          className="mt-8 mb-8 ml-3.5 w-[11rem] h-[3rem] bg-violet-500  rounded-md  text-white"
        >
          Add new task
        </button>
        <h3 className="ml-1 font-medium text-red-500">Today's tasks</h3>
        <div className="ml-1 mt-3 flex flex-col gap-3 font-medium cursor-pointer">
          <ul className="flex flex-col gap-4">
            {category.map((list, index) => {
              return (
                <li
                  onClick={() => handleClick(list)}
                  className={`${
                    selected === list
                      ? "bg-pink-50 border-r-[4px] border-red-500 text-red-500"
                      : "bg-white border-r-[4px] border-transparent"
                  } p-2`}
                  key={index}
                >
                  {list}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Title;
