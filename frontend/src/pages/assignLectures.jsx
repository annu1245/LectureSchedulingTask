import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const AssignLectures = () => {
    const navigate = useNavigate();
    const { user_id } = useParams();
    const [courses, setCourses] = useState([]);
    const [course, setCourse] = useState("");
    const [selectedDate, setSelectedDate] = useState("");

    useEffect(() => {
        axios
            .get("/api/course/get")
            .then((response) => {
                setCourses(response.data.data);
            })
            .catch((error) => {
                console.log("ERROR", error);
            });
    }, []);

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
              "/api/lecture/add",
              {
                user_id,
                course_id: course,
                date: selectedDate
              },
              { withCredentials: true }
          );
          console.log(data);
          const { success, message } = data;
          if (success) {
              handleSuccess(message);
              setTimeout(() => {
                  navigate("/");
              }, 1000);
          } else {
              handleError(message);
          }
      } catch (error) {
          console.log(error);
      }
    };

    return (
        <div className="max-w-md mx-auto mt-8 p-4 bg-white shadow-md rounded-md">
            <h2 className="text-2xl font-semibold mb-4">Assign Lectures</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="course" className="block text-sm font-medium text-gray-600">
                        Select Course
                    </label>
                    <select id="course" name="course" value={course} onChange={(e) => setCourse(e.target.value)} className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200">
                        <option value="" disabled>
                            {" "}
                            -- Select a course --{" "}
                        </option>
                        {courses.map((course) => (
                            <option key={course._id} value={course._id}>
                                {course.name}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="mb-4">
                    <label htmlFor="date" className="block text-sm font-medium text-gray-600">
                        Select Date
                    </label>
                    <input type="date" id="date" name="date" value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200" />
                </div>

                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">
                    Submit
                </button>
            </form>
            <ToastContainer />
        </div>
    );
};

export default AssignLectures;
