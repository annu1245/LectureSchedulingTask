import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react'

function ShowScheduledLectures() {
    const [allCourses, setAllCourses] = useState([])
    const [lectures, setLectures] = useState([])
    const [courseID, setCourseID] = useState([]);
    const [commonData, setCommonData] = useState([]);


    useEffect(() => {
        fetch('/api/lecture/get')
        .then(response => response.json())
        .then(data => setLectures(data.data))
        .catch(error => console.log("error : ", error))
    },[])

 
    useEffect(() => {
        axios.get('/api/course/get')
        .then(response => setAllCourses(response.data.data))
    },[])

    useEffect(() => {
        // Compare arrays and combine objects with matching IDs
        const combinedData = lectures.map((item1) => ({
          ...item1,
          ...allCourses.find((item2) => item1.course_id === item2._id),
        }));
      
        setCommonData(combinedData);
      }, [lectures, allCourses]);

    return (
        <>
        <div className="mx-auto p-8 max-w-screen-lg">
            {(commonData.length > 0) ? 
            <table className="table-auto w-full border-collapse">
                <thead>
                <tr className="bg-gray-200">
                    <th className="px-4 py-2 border">Sr. no</th>
                    <th className="px-4 py-2 border">Date</th>
                    <th className="px-4 py-2 border">Course</th>
                </tr>
                </thead>
                <tbody>
                {commonData.map((cd, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
                    <td className="px-4 py-2 border text-center align-middle">{index + 1}</td>
                    <td className="px-4 py-2 border text-center align-middle">{new Date(cd.assigned_on).toLocaleDateString()}</td>
                    <td className="px-4 py-2 border text-center align-middle">{cd.name}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            : <h2>No Any Lectures</h2>}
        </div>
    </>
    )
}
export default ShowScheduledLectures