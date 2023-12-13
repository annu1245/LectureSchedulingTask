// AssignLectures.js
import React, { useState } from 'react';

const AssignLectures = () => {
  const [course, setCourse] = useState('');
  const [selectedDate, setSelectedDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Course:', course);
    console.log('Selected Date:', selectedDate);
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-4 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-semibold mb-4">Set Lectures Date</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="course" className="block text-sm font-medium text-gray-600">
            Select Course
          </label>
          <select
            id="course"
            name="course"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200"
          >
            <option value="" disabled>
              Select a course
            </option>
            <option value="react">React</option>
            <option value="node">Node.js</option>
            <option value="python">Python</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="date" className="block text-sm font-medium text-gray-600">
            Select Date
          </label>
          <input
            type="date"
            id="date"
            name="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default AssignLectures;
