import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from './pages/login';
import Layout from './Layout.jsx'
import CourseAdd from './components/CourseAdd.jsx'
import Users from './components/Users.jsx'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />} />
        <Route path="login" element={<LoginPage />} />
        <Route path='course/add' element={<CourseAdd />} />
        <Route path='users' element={<Users />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
