import { Link, NavLink } from 'react-router-dom';
import { Button, Flex } from 'antd';
import { MdOutlineAccountCircle } from 'react-icons/md';
import { FiLogOut } from "react-icons/fi";
import { Dropdown, Space } from 'antd';

import SearchBook from './Search';
import SelectCategory from './SelectCategory';
import { getCookie } from '../helper/cookie';
import { useSelector } from 'react-redux';
import logo from '../assets/img/btl.png';
function Header() {
    const token = getCookie('token');
    const username = getCookie('username');
    const isLogin = useSelector((state) => state.loginReducer);
    console.log(isLogin);

    const navLinkActive = (e) => {
        return e.isActive
            ? 'bg-cyan-800 h-full flex justify-center items-center px-2'
            : 'h-full flex justify-center items-center px-2 hover:bg-cyan-800';
    };

    const items = [
        {
            label: <Link to="/logout"><span className='flex items-center justify-center '>Đăng xuất &nbsp;</span></Link>,
            key: 'logout',
            icon:<FiLogOut />
        },
    ];

    return (
        <div className="w-full h-20 top-0 shadow-lg bg-cyan-900">
            <div className="w-full h-full flex items-center justify-between px-5">
                {/* logo */}
                <Link className="p-2 text-white" to={'/'}>
                    <div className="h-11 w-13 flex justify-center items-center">
                        <img src={logo} alt="LOGO" className="w-full h-full" />
                    </div>
                </Link>
                {/* menu */}
                <div className="flex h-full items-center justify-between px-5 gap-5 text-white">
                    <ul className="flex h-full flex-row items-center justify-center grid grid-cols-3 gap-4 px-5">
                        <li className="flex justify-center items-center h-full">
                            <NavLink className={navLinkActive} to={'/'}>
                                {' '}
                                Trang chủ
                            </NavLink>
                        </li>
                        <li className="flex justify-center items-center h-full hover:bg-cyan-800">
                            <SelectCategory />
                        </li>
                        {token && (
                            <li className="flex justify-center items-center h-full">
                                <NavLink className={navLinkActive} to={'/bookstore'}>
                                    {' '}
                                    Đang đọc{' '}
                                </NavLink>
                            </li>
                        )}
                    </ul>
                    {/* search */}
                    <SearchBook />
                </div>

                {/* button */}
                <div className=" flex right-0 w-55 h-full items-center justify-center px-3">
                    <Flex gap="small" nowrap>
                        {token ? (
                            <div className="flex flex-row gap-3">
                                <Dropdown
                                    menu={{
                                        items,
                                    }}
                                >
                                    <div className="text-white flex items-center justify-center mr-10 ">
                                        <MdOutlineAccountCircle />
                                        &nbsp; {username}
                                    </div>

                                </Dropdown>
                            </div>
                        ) : (
                            <>
                                <Link to="/login">
                                    <Button type="primary" className="bg-cyan-700 hover:!bg-cyan-600">
                                        Đăng nhập
                                    </Button>
                                </Link>
                                <Link to="/register">
                                    <Button className="bg-gray-300 border-gray-300">Đăng kí</Button>
                                </Link>
                            </>
                        )}
                    </Flex>
                </div>
            </div>
        </div>
    );
}

export default Header;
