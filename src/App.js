import React from "react";
import Title from "./components/Title";
import Main from "./components/Main";
import Profile from "./components/Profile";

const App = () => {
  return (
    <div className="flex">
      <Title />
      <Main />
      <Profile />
    </div>
  );
};

export default App;
