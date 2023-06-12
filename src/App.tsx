import { useEffect, useState } from "react";
import "./App.css";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

function App() {
  useEffect(() => {
    fetch("http://3.34.149.107:8081/user/register", {
      method: "get",
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  });

  return (
    <SignUp />
    // <test>테스트중입니다.</test>
  );
}

export default App;
