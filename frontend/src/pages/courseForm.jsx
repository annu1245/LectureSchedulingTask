import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

function Form() {
    const navigate = useNavigate();
    const [inputValue, setInputValue] = useState({
       courseName: "",
       level: "",
       description: "",
    });
    const { courseName, level, description} = inputValue;
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageChange = (event) => {
      const file = event.target.files[0];
  
      if (file) {
        // You can perform additional checks or validation here if needed
        setSelectedImage(URL.createObjectURL(file));
      }
    };

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
                "/api/course/add",
                {
                    ...inputValue,
                },
                { withCredentials: true }
            );
            console.log(data);
            const { success, message } = data;
            if (success) {
                handleSuccess(message);
                setTimeout(() => {
                    navigate("#");
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
                <form onSubmit={handleSubmit}>
                    <div className="my-5 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                        <p className="mx-4 mb-0 text-center font-semibold text-slate-500">Create Course</p>
                    </div>

                    <input
                        className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4 mb-4"
                        type="text"
                        value={courseName}
                        onChange={handleOnChange}
                        placeholder="course name"/>

                    <input
                        className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4 mb-4"
                        type="text"
                        value={level}
                        onChange={handleOnChange}
                        placeholder="Level"/>

                    <input
                        className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4 mb-4"
                        type="text"
                        value={description}
                        onChange={handleOnChange}
                        placeholder="description"/>

                    <div className="max-w-md mx-auto p-4">
                        <label htmlFor="imageUpload" className="block text-sm font-medium text-gray-700">
                            Choose Image
                        </label>
                        <div className="mt-1 flex items-center">
                            <span className="inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                            {selectedImage ? (
                                <img src={selectedImage} alt="Selected" className="h-full w-full object-cover" />
                            ) : (
                                <svg className="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                                <path
                                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-14h2v6h-2zm0 8h2v2h-2z"
                                />
                                </svg>
                            )}
                            </span>
                            <input
                            type="file"
                            id="imageUpload"
                            accept="image/*"
                            className="sr-only"
                            onChange={handleImageChange}
                            />
                            <label
                            htmlFor="imageUpload"
                            className="ml-3 inline-block rounded-md border border-gray-300 px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 cursor-pointer"
                            >
                            Upload
                            </label>
                        </div>
                    </div>


                    <div className="text-center md:text-left">
                        <button className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider" type="submit">Create</button>
                    </div>

                </form>
                <ToastContainer />
            </div>
        </section>
    );
}

export default Form;