import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
  name: "tasks",
  initialState: {
    allTasks: [],
    isModalOpen: false,
    isDeleteModal: false,
    isEditing: false,
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
    setCategory: (state, action) => {
      const category = action.payload;
      const copy = [...state.allTasks];
      if (category === "Important Tasks") {
        const importantTasks = copy.filter((task) => task.isImportant === true);
        state.allTasks = importantTasks;
      } else if (category === "Completed Tasks") {
        const completedTasks = copy.filter((task) => task.isCompleted === true);
        state.allTasks = completedTasks;
      } else if (category === "Completed Tasks") {
        const completedTasks = copy.filter(
          (task) => task.isCompleted === false
        );
        state.allTasks = completedTasks;
      } else {
        state.allTasks = copy;
      }
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
} = taskSlice.actions;