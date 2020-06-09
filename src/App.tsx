import React, { useReducer, createContext, Dispatch } from "react";
import "./App.css";
import UserList from "./UserList";
import CreateUser from "./CreateUser";
import reducer, { Action, initialState } from "./reducer";

export const UserDispatch = createContext<undefined | Dispatch<Action>>(
  undefined,
);

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { users } = state;

  return (
    <UserDispatch.Provider value={dispatch}>
      <CreateUser />
      <UserList users={users} />
    </UserDispatch.Provider>
  );
}

export default App;
