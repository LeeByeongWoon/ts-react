import { Elements } from "./UserList";
// import produce from 'immer';

export const initialState = {
  users: [
    {
      id: 1001,
      username: "velopert",
      email: "lis@example.com",
      active: true,
    },
    {
      id: 1002,
      username: "abc",
      email: "lis@example.com",
      active: false,
    },
    {
      id: 1003,
      username: "tfh100",
      email: "tfh100@gmail.com",
      active: false,
    },
  ],
};

type State = {
  users: Elements[];
};
export type Action =
  | { type: "CHANGE_INPUT"; name: string; value: string }
  | { type: "CREATE_USER"; user: Elements }
  | { type: "REMOVE_USER"; id: number }
  | { type: "TOGGLE_USER"; id: number };

export default function reducer(state: State, action: Action) {
  switch (action.type) {
    case "CREATE_USER":
      return {
        users: state.users.concat(action.user),
      };
    //immer
    // return produce(state, draft=> {
    //   draft.users.push(action.user);
    // });
    case "REMOVE_USER":
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.id),
      };
    // immer
    // return produce (state, draft=>{
    //   const index= draft.users.findIndex(user=> user.id === action.id);
    //   draft.users.splice(index,1);
    // });
    case "TOGGLE_USER":
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.id ? { ...user, active: !user.active } : user,
        ),
      };
    // immer
    // return produce (state, draft=>{
    //   const user = draft.users.find(user => user.id === action.id);
    //   if(user === undefined) return;
    //   user.active = !user.active;
    // });
    default:
      throw new Error("Unhandled Action");
  }
}
