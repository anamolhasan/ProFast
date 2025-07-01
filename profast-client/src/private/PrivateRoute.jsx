import React from 'react'
import useAuth from '../hooks/useAuth'
import LoadingSpinner from '../pages/shared/Loading/LoadingSpinner'
import { Navigate, useLocation } from 'react-router'

const PrivateRoute = ({children}) => {
    const {user, loading} = useAuth()
    const location = useLocation()

    if(loading){
        return <LoadingSpinner />
    }

    if(!user){
       return <Navigate state={{from: location.pathname}} to={'/login'}/>
    }

  return children
}

export default PrivateRoute