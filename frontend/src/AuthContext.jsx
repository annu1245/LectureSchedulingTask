// AuthContext.js
import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   return (
//     <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

export const AuthProvider = AuthContext.Provider;

export const useAuth = () => {
  return useContext(AuthContext);
};
