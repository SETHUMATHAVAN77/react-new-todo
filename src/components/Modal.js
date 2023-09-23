import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  setAllTasks,
  setEditId,
  setEditTask,
  setIsEditing,
  setModelOpen,
} from "../redux/features/taskSlice";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  title: "",
  date: null,
  description: "",
  isCompleted: false,
  isImportant: false,
};

const Modal = () => {
  const { isModalOpen, allTasks, isEditing, editId } = useSelector(
    (state) => state.tasks
  );
  const [formValue, setFormValue] = useState(initialState);
  const { title, date, description, isCompleted, isImportant } = formValue;
  const dispatch = useDispatch();

  useEffect(() => {
    if (editId) {
      const singleTask = allTasks.find((task) => task.id === editId);
      setFormValue({ ...singleTask });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editId]);

  const clearForm = () => {
    setFormValue({
      title: "",
      date: null,
      description: "",
      isCompleted: false,
      isImportant: false,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && date && description) {
      if (isEditing && editId) {
        dispatch(
          setEditTask({ ...formValue, id: editId, title, date, description })
        );
        dispatch(setModelOpen(false));
        dispatch(setEditId(null));
        dispatch(setIsEditing(false));
      } else {
        dispatch(
          setAllTasks({ ...formValue, id: uuidv4(), title, date, description })
        );
        dispatch(setModelOpen(false));
      }
      clearForm();
    }
  };

  console.log(allTasks);

  return (
    <>
      {isModalOpen ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none max-w-lg mx-auto ">
            <div className="relative w-full my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-slate-100 outline-none focus:outline-none px-6 py-4">
                <div className="flex items-center justify-between w-full">
                  <p className="font-bold text-slate-600">
                    {isEditing ? "Edit task" : "Add task"}
                  </p>
                  <button
                    onClick={() => dispatch(setModelOpen(false))}
                    className=" text-slate-600 bg-gray-300 px-2 py-1 rounded-lg cursor-pointer"
                  >
                    X
                  </button>
                </div>
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="flex flex-col gap-2  text-slate-600 mt-2">
                    <label htmlFor="title">Title</label>
                    <input
                      className="border rounded-md  border-gray-400 p-3 outline-none"
                      type="text"
                      id="title"
                      value={title}
                      onChange={(e) =>
                        setFormValue({ ...formValue, title: e.target.value })
                      }
                      placeholder="e.g,study for the test"
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-2  text-slate-600 outline-none">
                    <label htmlFor="date">Date</label>
                    <input
                      className="border rounded-md  border-gray-400 p-3"
                      type="date"
                      id="date"
                      value={date}
                      onChange={(e) =>
                        setFormValue({ ...formValue, date: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-2  text-slate-600">
                    <label htmlFor="desk">Description(Optional)</label>
                    <textarea
                      className="border rounded-md  border-gray-400 p-3 outline-none"
                      id="desc"
                      cols="3"
                      rows="3"
                      value={description}
                      onChange={(e) =>
                        setFormValue({
                          ...formValue,
                          description: e.target.value,
                        })
                      }
                      placeholder="e.g,study for the test"
                      required
                    ></textarea>
                  </div>
                  <div>
                    <div className="py-2 flex items-center gap-1">
                      <input
                        type="checkbox"
                        name="important"
                        id="important"
                        checked={isImportant}
                        onChange={(e) =>
                          setFormValue({
                            ...formValue,
                            isImportant: !isImportant,
                          })
                        }
                        className="cursor-pointer"
                      />
                      <label htmlFor="important" className="cursor-pointer">
                        Mark as important
                      </label>
                    </div>
                    <div className="py-2 flex items-center gap-1">
                      <input
                        type="checkbox"
                        name="completed"
                        id="completed"
                        checked={isCompleted}
                        onChange={(e) =>
                          setFormValue({
                            ...formValue,
                            isCompleted: !isCompleted,
                          })
                        }
                        className="cursor-pointer"
                      />
                      <label htmlFor="completed" className="cursor-pointer">
                        Mark as Completed
                      </label>
                    </div>
                  </div>
                  <div>
                    <button
                      className="w-full py-2 font-semibold hover:bg-violet-600 transition-all duration-200 bg-violet-500  rounded-md  text-white"
                      type="submit"
                    >
                      {isEditing ? "Edit task" : "Add task"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default Modal;
