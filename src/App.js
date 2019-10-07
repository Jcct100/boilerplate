import React from "react";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Changepassword from "./components/Changepassword";

function App() {
  return (
    <div className="App">
      <Login />
      <Signup />
      <Changepassword />
      <Home />
    </div>
  );
}

export default App;
