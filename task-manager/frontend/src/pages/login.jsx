import {useState} from "react";
import {loginUser} from "../api/user_api";

function LoginForm() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

    const handleChange = (e) => {
        setFormData({
        ...formData,
        [e.target.name]: e.target.value,
        });  
    }
    const handleLogin = async (e) => {
        // Validation
        e.preventDefault();
        if (!formData.username || !formData.password) {
            alert("Please fill in all required fields.");
            return;
        }

        try {
            // Call the API function instead of fetch()
            const data = await loginUser(formData);

            alert("Login successful!");

            console.log(data);

            setFormData({
                username: "",
                password: "",
            });
        } catch (error) {
            alert("Login failed. Please check your credentials.");
        }
    }

    return (
        <div className="flex flex-col items-center justify-center ">
            <h2 className="py-4 font-bold">LOG IN</h2>
            <form className="flex flex-col gap-4 w-64">
                <div>
                    <label className="block text-gray-700 font-bold mb-2">Username:</label>
                    <input className="border border-gray-300 rounded-md px-3 py-2 text-black"
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label className="block text-gray-700 font-bold mb-2">Password:</label>
                    <input className="border border-gray-300 rounded-md px-3 py-2 text-black"
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                </div>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">
                    Login
                </button>
            </form>
        </div>
    );
}

export default LoginForm;