import axios from 'axios'
import React, { useState, useEffect } from 'react'

function ShowCourses() {
    const [courses, setCourses] = useState([])
    useEffect(() => {
      axios.get('/api/course/get')
      .then(response => {
        console.log(response.data);
        setCourses(response.data.data);
      })
      .catch(error => {console.log("ERROR ",error)})
    },[])

    return (
    <>
    <div className='flex m-4'>
      {
        courses.map((course) => {
          return (

              <div key={course._id} className="w-[300px] rounded-md border bg-yellow-400 ml-4 mr-4">
              <img
                src={`/${course.image}`}
                alt="Laptop"
                className="h-[200px] w-full rounded-md object-cover"
              />
              <div className="p-4">
                <h1 className="text-lg font-semibold">{course.name}</h1>
                <p className="mt-3 text-sm text-gray-600">
                  {course.description}
                </p>
                <button
                  type="button"
                  className="mt-4 rounded-sm bg-black px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  Read
                </button>
              </div>
            </div>
          )
        })
      }
      </div>
     </>
    )
}

export default ShowCourses
