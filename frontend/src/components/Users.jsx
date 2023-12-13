

import axios from 'axios';
  import { useEffect, useState } from 'react';
  import DatePicker from 'react-datepicker'
  import 'react-datepicker/dist/react-datepicker.css'
  import { Link } from 'react-router-dom';
  
  export default function Users() {
    const [date, setDate] = useState(null);
    const [status, setStatus] = useState('Active');
    const [users, setUsers] = useState([]);

    useEffect(() => {
      axios.get('/api/users')
      .then(response => {
        setUsers(response.data.data);
      })
      .catch(error => {console.log("EROOOOOOOORRRRR ",error)})
    },[])

    return (
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Email
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {users.map(user => (
                    <tr key={user.email}>
                       <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">{user.first_name} {user.last_name}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">{user.name}</div>
                            <div className="text-sm text-gray-500">{user.email}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{user.title}</div>
                        <div className="text-sm text-gray-500">{user.department}</div>
                      </td>
                     
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {user.role}
                      </td>
                    
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <Link to="#" className="text-indigo-600 hover:text-indigo-900">
                          Action
                        </Link>
                      </td>
                    </tr>
                    
                  ))}
                </tbody>
              </table>
            
            </div>
          </div>
        </div>
      </div>
    );
  }