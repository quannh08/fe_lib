// import { useRef } from "react";
import { login } from '../services/userServicce';
import { ImSpinner } from 'react-icons/im';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { setCookie } from '../helper/cookie';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { checkLogin } from '../actions/loginAction';
function Login() {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    // const userNameRef = useRef('')
    // const passwordRef = useRef('')
    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log(userNameRef)
        const email = e.target[0].value;
        const pass = e.target[1].value;
        setLoading(true);
        const response = await login(email, pass);
        setLoading(false);
        if (response && response.token) {
            setCookie('token', response.token, 1);
            setCookie('username', response.username, 1);
            dispatch(checkLogin(true));
            navigate('/');
        } else {
            console.log(response);
            toast.error('Sai email hoặc mật khẩu!');
        }
    };

    return (
        <div className="w-full h-full flex justify-center items-center mt-12">
            <div>
                <ToastContainer />
                <form
                    onSubmit={handleSubmit}
                    className="w-[450px] h-[400px] shadow-md flex flex-col bg-slate-50 rounded overflow-hidden gap-3"
                >
                    <div className="w-full flex justify-center items-center text-2xl font-bold bg-cyan-900 text-slate-200 h-16">
                        Login
                    </div>
                    <div className="flex flex-col p-4 gap-3">
                        <div className="text-base text-slate-700 font-semibold"> Email</div>
                        <div className="w-full">
                            <input
                                className="w-full p-2 rounded focus:outline-slate-200 bg-slate-200"
                                required
                                placeholder="Username"
                            />
                        </div>
                        <div>Password</div>
                        <div className="w-full">
                            <input
                                className="w-full p-2 rounded  focus:outline-slate-200 bg-slate-200"
                                required
                                placeholder="password"
                                type="password"
                            />
                        </div>
                        <div className="w-full h-12">
                            <button
                                type="submit"
                                disabled={loading}
                                className={`w-full h-full flex justify-center items-center mt-4 p-3 bg-cyan-900
                             text-slate-200 hover:bg-cyan-700 active:scale-[.98] ${
                                 loading && 'disabled:bg-slate-500 cursor-not-allowed'
                             }`}
                            >
                                {loading && <ImSpinner className="animate-spin" />} &nbsp; Đăng nhập
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
