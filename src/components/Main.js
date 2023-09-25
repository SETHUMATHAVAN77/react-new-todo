import React, { useState } from "react";
import Modal from "./Modal";
import { BsSearch, BsGrid } from "react-icons/bs";
import Cart from "./Cart";
import {
  setModelOpen,
  setSearchByTitle,
  setSort,
} from "../redux/features/taskSlice";
import { useDispatch, useSelector } from "react-redux";
import DelModal from "./DelModal";

const types = ["A to Z", "Z to A"];

const Main = () => {
  const dispatch = useDispatch();
  const { allTasks } = useSelector((state) => state.tasks);

  return (
    <>
      <div className="min-h-screen w-[54rem] bg-slate-300">
        <div className="flex justify-between m-6 px-4">
          <div className="flex ">
            <div className="relative text-gray-600">
              <input
                type="text"
                name="serch"
                placeholder="Search task"
                onChange={(e) => dispatch(setSearchByTitle(e.target.value))}
                className="bg-white h-10 px-5 pr-10 rounded-md text-sm focus:outline-none"
              />

              <button
                type="submit"
                class="absolute right-0 top-0 mt-3 mr-4 text-slate-300"
              >
                <BsSearch />
              </button>
            </div>
          </div>
          <div className="mr-5 mt-3">{`${new Date().toLocaleDateString()}`}</div>
          <div>
            <button
              onClick={() => dispatch(setModelOpen(true))}
              className=" w-[8rem] h-[2.5rem] bg-violet-500  rounded-md  text-white"
            >
              Add new task
            </button>
          </div>
        </div>
        <div className=" ml-9">
          <h1>All tasks ({allTasks?.length})</h1>
        </div>
        <div className="flex justify-between m-8">
          <div className="mt-2 text-violet-700 ">
            <BsGrid />
          </div>
          <div>
            <select
              className="px-6 py-1 outline-none rounded-lg"
              onChange={(e) => dispatch(setSort(e.target.value))}
            >
              <option value="">Sort By</option>
              {types.map((type, index) => {
                return (
                  <option key={index} value={type}>
                    {type}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        <Modal />
        <DelModal />
        <Cart />
      </div>
    </>
  );
};

export default Main;
