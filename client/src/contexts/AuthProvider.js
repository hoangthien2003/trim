import axios from "axios";
import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { auth } from "../firebase/config";
import { URL_BASE, LOCAL_STORAGE_TOKEN_NAME } from "./constants";
export const AuthContext = React.createContext()

export default function AuthProvider({ children }) {

  const [user, setUser] = useState({});
  const navigate = useNavigate();


  React.useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        await axios.get(`${URL_BASE}/api/auth/user`, {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem(LOCAL_STORAGE_TOKEN_NAME)}`
          }
        })
          .then(res => setUser(res.data.user))
        return;
      }

    })

    return (() => {
      unsubscribe();
    })

  }, [navigate])


  return (
    <AuthContext.Provider value={{ user }}>
      {children}
    </AuthContext.Provider>
  )
}

