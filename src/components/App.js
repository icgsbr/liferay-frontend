import React, { useState } from "react";

import "../styles/index.css";
import Header from "../pages/Header";
import Login from "./Login";
import userfake from "../userfake";

export default function App() {
  const [user, serUser] = useState();
  // const users = userfake.map((user) =>
  // );

  return (
    <div className="App">
      <Header />
      <Login />
    </div>
  );
}
