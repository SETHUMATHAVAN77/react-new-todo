import React from "react";
import { useSelector } from "react-redux";
import { setDelete, setDeleteModal } from "../redux/features/taskSlice";
import { useDispatch } from "react-redux";

const DelModal = () => {
  const { isDeleteModal, deleteId } = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  return (
    <>
      {isDeleteModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none max-w-lg mx-auto ">
            <div className="relative w-full my-6 mx-auto max-w-7xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-slate-100 outline-none focus:outline-none px-6 py-4">
                <div className="flex items-center justify-between w-full mb-4">
                  <h2 className="font-bold text-slate-600 text-xl">
                    Are you sure?
                  </h2>
                  <button
                    onClick={() => dispatch(setDeleteModal(false))}
                    className=" text-slate-600 bg-gray-300 px-2 py-1 rounded-lg cursor-pointer"
                  >
                    X
                  </button>
                </div>
                <div className="py-2">
                  <p>This task will be deleted permanently.</p>
                </div>
                <div className="flex gap-4 justify-end items-center">
                  <p
                    onClick={() => dispatch(setDeleteModal(false))}
                    className="text-slate-400"
                  >
                    Cancel
                  </p>
                  <button
                    onClick={() => {
                      dispatch(setDelete(deleteId));
                      dispatch(setDeleteModal(false));
                    }}
                    className="w-[5rem] h-[2rem] bg-violet-500  rounded-md  text-white"
                    type="button"
                  >
                    Confirm
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default DelModal;
