import React, { useEffect } from 'react'
import { useAuth } from '../AuthContext'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

function Logout() {
    const {setIsAuthenticated} = useAuth();
    const navigate = useNavigate();
    useEffect(() => {
        axios.get('/api/logout')
        .then(response => {
            setIsAuthenticated(false);
            navigate('/login');
        })
    })
}

export default Logout
