import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
  name: "tasks",
  initialState: {
    allTasks: [],
    isModalOpen: false,
    isDeleteModal: false,
    isEditing: false,
    editId: "",
    deleteId: "",
  },
  reducers: {
    setModelOpen: (state, action) => {
      state.isModalOpen = action.payload;
    },
    setDeleteModal: (state, action) => {
      state.isDeleteModal = action.payload;
    },
    setIsEditing: (state, action) => {
      state.isEditing = action.payload;
    },
    setAllTasks: (state, action) => {
      const newAllTasks = [...state.allTasks, action.payload];
      state.allTasks = newAllTasks;
    },
    setEditTask: (state, action) => {
      state.allTasks = state.allTasks.map((task) =>
        task.id === action.payload.id ? action.payload : task
      );
    },
    setCategory: (state, action) => {
      const category = action.payload;

      if (!state.originalTasks) {
        state.originalTasks = [...state.allTasks];
      }

      let filteredTasks = [...state.originalTasks]; // Start with the original tasks

      if (category === "Important Tasks") {
        filteredTasks = filteredTasks.filter(
          (task) => task.isImportant === true
        );
      } else if (category === "Completed Tasks") {
        filteredTasks = filteredTasks.filter(
          (task) => task.isCompleted === true
        );
      } else if (category === "UnCompleted Tasks") {
        filteredTasks = filteredTasks.filter(
          (task) => task.isCompleted === false
        );
      }

      state.allTasks = filteredTasks;
    },

    setSearchByTitle: (state, action) => {
      const searchQuery = action.payload.toLowerCase();
      const filteredTasks = state.allTasks.filter((task) =>
        task.title.toLowerCase().includes(searchQuery)
      );
      state.allTasks = filteredTasks;
    },
    setSort: (state, action) => {
      const sort = action.payload;
      if (sort === "A-Z") {
        state.allTasks.sort();
      } else {
        state.allTasks.sort().reverse();
      }
    },
    setEditId: (state, action) => {
      state.editId = action.payload;
    },
    setDeleteId: (state, action) => {
      state.deleteId = action.payload;
    },
    setDelete: (state, action) => {
      state.allTasks = state.allTasks.filter(
        (task) => task.id !== action.payload
      );
    },
  },
});

export default taskSlice.reducer;
export const {
  setModelOpen,
  setDeleteModal,
  setAllTasks,
  setCategory,
  setSearchByTitle,
  setSort,
  setIsEditing,
  setEditId,
  setDeleteId,
  setDelete,
  setEditTask,
} = taskSlice.actions;
