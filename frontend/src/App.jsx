import React from "react";
import "./App.css";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/Signup";

function App() {
  return (
    <div className="p-4 h-screen flex items-center justify-center">
      {/* <Login /> */}
      <SignUp />
    </div>
  );
}

export default App;
