import { useState } from "react";
import { createUser } from "../api/user_api";

function UserForm() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    first_name: "",
    last_name: "",
    middle_name: "",
    contact_num: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCreateUser = async () => {
    // Validation
    if (
      !formData.username ||
      !formData.email ||
      !formData.password ||
      !formData.first_name ||
      !formData.last_name ||
      !formData.contact_num
    ) {
      alert("Please fill in all required fields.");
      return;
    }

    try {
      // Call the API function instead of fetch()
      const data = await createUser(formData);

      alert("User created successfully!");

      console.log(data);

      // Clear the form
      setFormData({
        username: "",
        email: "",
        password: "",
        first_name: "",
        last_name: "",
        middle_name: "",
        contact_num: "",
      });
    } catch (err) {
      console.error(err);

      alert(err.response?.data?.error || "Unable to connect to the server.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-lg bg-white shadow-lg rounded-xl p-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Create User
        </h2>

        <div className="space-y-4">
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2"
          />

          <input
            type="text"
            name="first_name"
            placeholder="First Name"
            value={formData.first_name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2"
          />

          <input
            type="text"
            name="last_name"
            placeholder="Last Name"
            value={formData.last_name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2"
          />

          <input
            type="text"
            name="middle_name"
            placeholder="Middle Name (Optional)"
            value={formData.middle_name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2"
          />

          <input
            type="text"
            name="contact_num"
            placeholder="Contact Number"
            value={formData.contact_num}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2"
          />

          <button
            onClick={handleCreateUser}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg cursor-pointer"
          >
            Create User
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserForm;