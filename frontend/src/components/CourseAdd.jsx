// MyForm.js
import React, { useState } from 'react';

const CourseAdd = () => {
  const [formData, setFormData] = useState({
    name: '',
    level: '',
    description: '',
    image: '',
  });

  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Create Course</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-600">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 p-2 border rounded-md w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="level" className="block text-sm font-medium text-gray-600">
            Level
          </label>
          <input
            type="text"
            id="level"
            name="level"
            value={formData.level}
            onChange={handleChange}
            className="mt-1 p-2 border rounded-md w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-medium text-gray-600">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="mt-1 p-2 border rounded-md w-full"
          ></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="image" className="block text-sm font-medium text-gray-600">
            Select Image
          </label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            onChange={handleImageChange}
            className="mt-1 p-2 border rounded-md w-full"
          />
        </div>
        {image && (
          <div className="mb-4">
            <img src={image} alt="Selected" className="max-w-full h-auto" />
          </div>
        )}
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CourseAdd;
