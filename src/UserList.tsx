import React, { useContext } from "react";
import { UserDispatch } from "./App";

// props 와 파라미터 정의
export type Elements = {
  id: number;
  username: string;
  email: string;
  active: boolean;
};
interface functionList {
  onRemove: (id: number) => void;
  onToggle: (id: number) => void;
}
export interface UserListProps {
  users: Elements[];
}

interface UserProps {
  user: Elements;
}

const User = React.memo(function User({ user }: UserProps) {
  const { username, email, id, active } = user;
  const dispatch = useContext(UserDispatch);
  if (!dispatch) return null;

  return (
    <div>
      <b
        style={{
          color: active ? "green" : "black",
          cursor: "pointer",
        }}
        onClick={() =>
          dispatch({
            type: "TOGGLE_USER",
            id,
          })
        }
      >
        {username}
      </b>{" "}
      <span>{email}</span>
      <button
        onClick={() =>
          dispatch({
            type: "REMOVE_USER",
            id,
          })
        }
      >
        삭제
      </button>
    </div>
  );
});

function UserList({ users }: UserListProps) {
  const countUser = (users: Elements[]) => {
    return users.filter((user) => user.active).length;
  };

  return (
    <div>
      {users.map((user) => (
        <User user={user} key={user.id} />
      ))}
      <div>활성 사용자수 {countUser(users)}</div>
    </div>
  );
}
export default React.memo(
  UserList,
  (prevProps, nextProps) => nextProps.users === prevProps.users,
);
//props 들이 함수형 업데이트를 해야하며, props안에 users 가 이전과 현재가 다르지 않을경우 리렌더링 되지 않음
