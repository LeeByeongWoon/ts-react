import React from "react";
type Eliments = {
  id: number;
  username: string;
  email: string;
};
type UserListProps = {
  users: Eliments[];
};
type UserProps = {
  user: Eliments;
};
function User({ user }: UserProps) {
  return (
    <div>
      <b>{user.username}</b> <span>{user.email}</span>
    </div>
  );
}
function UserList({ users }: UserListProps) {
  return (
    <div>
      {users.map((user: any) => (
        <User user={user} key={user.id} />
      ))}
    </div>
  );
}
export default UserList;
