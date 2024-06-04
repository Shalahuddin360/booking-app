
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../components/providers/AuthProvider';
import Loader from '../components/shared/Loader';


const PrivateRoutes = ({children}) => {
    const {user,loading}= useContext(AuthContext)
    const location = useLocation()
    console.log(user,loading)
    if(loading){
     return <Loader/>
    }
    else if(user){
     return children;
     }
   return <Navigate to="/login" state={{from : location}} replace></Navigate>
};

export default PrivateRoutes;