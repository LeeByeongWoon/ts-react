import React, { useRef } from "react";
import "./App.css";
import UserList from "./UserList";

function App() {
  const users = [
    {
      id: 1,
      username: "velopert",
      email: "lis@example.com",
    },
    {
      id: 2,
      username: "abc",
      email: "lis@example.com",
    },
    {
      id: 3,
      username: "tfh100",
      email: "tfh100@gmail.com",
    },
  ];
  const nextId = useRef(4);
  return (
    // <SampleProvider>
    //  <ReducerSample/>
    // </SampleProvider>
    // <Hello color={"red"} isSpecial/>
    // <NCount/>
    <UserList users={users} />
  );
}

export default App;
