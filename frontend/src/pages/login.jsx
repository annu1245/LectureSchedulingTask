import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useAuth } from '../AuthContext';

function Login() {
    let {isAuthenticated, setIsAuthenticated, setUserType} = useAuth();
    const navigate = useNavigate();
    const [inputValue, setInputValue] = useState({
        email: "",
        type: "",
        password: "",
    });
    const { email, type, password } = inputValue;

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setInputValue({
            ...inputValue,
            [name]: value,
        });
    };

    const handleError = (err) =>
        toast.error(err, {
            position: "bottom-left",
        });

    const handleSuccess = (msg) =>
        toast.success(msg, {
            position: "bottom-left",
        });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post(
                "/api/login",
                {
                    ...inputValue,
                },
                { withCredentials: true },
            );
            console.log(data);
            const { success, message } = data;
            if (success) {
                handleSuccess(message);
                setIsAuthenticated(true);
                setUserType(inputValue.type)
                setTimeout(() => {
                    navigate("/");
                }, 1000);
            } else {
                handleError(message);
            }
        } catch (error) {
            console.log(error);
        }
        /* setInputValue({
            ...inputValue,
            email: "",
            type: "",
            password: "",
        }); */
    };

    return (
        <section className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
            <div className="md:w-1/3 max-w-sm">
                <img
                    src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                    alt="Sample image" />
            </div>
            <div className="md:w-1/3 max-w-sm">
                <form onSubmit={handleSubmit}>
                    <div className="my-5 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                        <p className="mx-4 mb-0 text-center font-semibold text-slate-500">Sign in</p>
                    </div>

                    <input
                        className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
                        type="email"
                        name="email"
                        value={email}
                        placeholder="Email Address"
                        onChange={handleOnChange} />

                    <select
                        name="type"
                        defaultValue={type}
                        className="mt-4 py-3 px-4 pe-9 w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500"
                        onChange={handleOnChange} >
                        <option> -- Select user type -- </option>
                        <option value="1">Admin</option>
                        <option value="2">Instructor</option>
                    </select>

                    <input
                        className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
                        type="password"
                        name="password"
                        value={password}
                        placeholder="Password"
                        onChange={handleOnChange} />

                    <div className="mt-4 flex justify-between font-semibold text-sm">
                        <label className="flex text-slate-500 hover:text-slate-600 cursor-pointer">
                            <input className="mr-1" type="checkbox" />
                            <span>Remember Me</span>
                        </label>
                        <Link className="text-blue-600 hover:text-blue-700 hover:underline hover:underline-offset-4" to={"#"}>Forgot Password?</Link>
                    </div>

                    <div className="text-center md:text-left">
                        <button className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider" type="submit">Login</button>
                    </div>

                    <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
                        Don't have an account? <Link className="text-red-600 hover:underline hover:underline-offset-4" to={"#"}>Register</Link>
                    </div>
                </form>
                <ToastContainer />
            </div>
        </section>
    );
}

export default Login;