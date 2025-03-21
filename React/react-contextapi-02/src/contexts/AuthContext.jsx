import { useState } from "react"
import { createContext } from "react"

const AuthContext=createContext()

const initialAuth=null

const AuthProvider=({children})=>{
    const [auth,setAuth]=useState(initialAuth)

    const handleAuth=()=>{
        setAuth(!auth)
    }

    const data = {
        auth, handleAuth
    }

    return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>
}

export {AuthProvider}
export default AuthContext