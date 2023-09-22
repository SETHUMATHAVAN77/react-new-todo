import React from "react";
import { MdOutlineDateRange } from "react-icons/md";
import { FaRegStar } from "react-icons/fa";
import { BiSolidStar } from "react-icons/bi";
import { RiDeleteBinFill } from "react-icons/ri";
import { SlOptionsVertical } from "react-icons/sl";
import {
  setDeleteId,
  setDeleteModal,
  setEditId,
  setIsEditing,
  setModelOpen,
} from "../redux/features/taskSlice";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
  const dispatch = useDispatch();
  const { allTasks } = useSelector((state) => state.tasks);

  const handleClick = (id) => {
    dispatch(setModelOpen(true));
    dispatch(setIsEditing(true));
    dispatch(setEditId(id));
  };

  return (
    <>
      {allTasks?.length > 0 ? (
        <div className="flex items-center gap-2 justify-center flex-wrap">
          {allTasks.map((task) => {
            const { id, title, description, date, isCompleted, isImportant } =
              task;
            return (
              <div
                key={id}
                className="w-[17rem] h-[12rem] bg-slate-100 p-2 border rounded-md group transition-all duration-200 hover:bg-violet-400"
              >
                <div className="ml-3 space-y-2">
                  <h3 className="text-slate-600 font-medium ">{title}</h3>
                  <p className="text-slate-400 group-hover:text-white">
                    {description}
                  </p>
                </div>
                <div className="flex gap-2 mt-4 ml-4 ">
                  <div>
                    <MdOutlineDateRange />
                  </div>
                  <p>{date}</p>
                </div>
                <br />
                <hr />
                <div className="flex justify-between ml-4 mt-10 text-black">
                  <button
                    className={`${
                      isCompleted
                        ? "bg-green-300 text-green-600"
                        : "bg-orange-200 text-orange-600"
                    } px-3 py-2  rounded-lg font-medium`}
                  >
                    {isCompleted ? "Completed" : "Uncompleted"}
                  </button>
                  <div className="flex gap-2 ">
                    <button
                      className={`${isImportant ? "text-red-500" : null}`}
                    >
                      {isImportant ? <BiSolidStar /> : <FaRegStar />}
                    </button>
                    <button
                      onClick={() => {
                        dispatch(setDeleteModal(true));
                        dispatch(setDeleteId(id));
                      }}
                    >
                      <RiDeleteBinFill />
                    </button>

                    <button onClick={() => handleClick(id)}>
                      <SlOptionsVertical />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="text-center mt-8 text-gray-700">
          <h1>There is No Tasks !!</h1>
        </div>
      )}
    </>
  );
};

export default Cart;
