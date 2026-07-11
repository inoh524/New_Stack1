import { useEffect, useState } from "react";
import { getMe } from "../api/user_api";

function Users() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getMe();

        console.log(data);

        setUser(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h1>My Profile</h1>

      {user && (
        <div>
          <p>{user.username}</p>
          <p>{user.email}</p>
          <p>{user.password}</p>
          <p>{user.contact_num}</p>
        </div>
      )}
    </div>
  );
}

export default Users;