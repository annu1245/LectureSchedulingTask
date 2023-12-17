import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/login";
import AddCourse from "./pages/AddCourse.jsx";
import Users from "./pages/users.jsx";
import "react-toastify/dist/ReactToastify.css";
import AssignLectures from "./pages/assignLectures.jsx";
import Header from "./components/Header/Header.jsx";
import ShowCourses from "./components/ShowCourses.jsx";
import { AuthProvider } from "./AuthContext.jsx";
import { useState, useEffect } from "react";
import Logout from "./pages/logout.jsx";
import ShowScheduledLectures from "./pages/ShowScheduledLectures.jsx";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userType, setUserType] = useState('2');
  useEffect(() => {
    console.log('userType:', userType);
  }, [userType]);
    return (
      <AuthProvider value={{isAuthenticated, setIsAuthenticated, setUserType, userType}}>
        <BrowserRouter>
            <Header />
          <Routes>
            {isAuthenticated ? 
            userType === '1' ? 
              <>
                <Route path="/logout" element={<Logout />}  />
                <Route path="/" element={<ShowCourses />} />
                <Route path="lectures/add/:user_id" element={<AssignLectures />} />
                <Route path="users" element={<Users />} />
                <Route path="course/add" element={<AddCourse />} />
              </>
                : userType === '2' ?  
                <>
                <Route path="/logout" element={<Logout />}  />
                <Route path="/" element={<ShowCourses />} />
                <Route path='/show' element={<ShowScheduledLectures />} />
                </>
                : null
           : 
            <Route path="/login" element={<LoginPage />} />
          }  
          </Routes>  
        </BrowserRouter>
      </AuthProvider>
    );
}

export default App;
