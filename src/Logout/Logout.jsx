import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { deleteAllCookies } from "../helper/cookie";
import { useDispatch } from "react-redux";
import { checkLogin } from "../actions/loginAction";

function Logout() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    deleteAllCookies();
    useEffect(()=>{
        dispatch(checkLogin(false))
        navigate('/login')
    },[])
    return ( 
        <>
        
        </>
     );
}

export default Logout;