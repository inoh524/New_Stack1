import { useEffect, useState } from "react";
import { getUsers } from "../api/user_api";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getUsers();

        console.log(data);

        setUsers(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h1>Users</h1>

      {users.map((user) => (
        <div key={user.id}>
          <p>{user.username}</p>
          <p>{user.email}</p>
          <p>{user.password}</p>
          <p>{user.contact_num}</p>
        </div>
      ))}
    </div>
  );
}

export default Users;