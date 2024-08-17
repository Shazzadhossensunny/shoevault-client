import { useContext } from "react"
import { AuthContext } from "../context/AuthContextComponents"
import { Navigate, useLocation } from "react-router-dom"


export default function PrivateRoute({children}) {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()
    if(loading){
        return (
            <div className=" h-screen flex justify-center items-center">
                <span className="loading loading-spinner loading-lg"></span>
            </div>
        )
    }
    if(user){
        return children
    }
  return <Navigate to='/login' state={location.pathname || '/'}></Navigate>
}
