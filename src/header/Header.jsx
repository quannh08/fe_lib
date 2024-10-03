import {Link, NavLink} from 'react-router-dom'
import { Button, Flex } from 'antd';
import { useEffect, useState } from 'react';
import { getCategory } from '../services/bookService';
import { Dropdown } from 'antd';
import SearchBook from './Search';

function Header() {

    const [dataCategory,setDataCategory] = useState([])
    useEffect(()=>{
        const fetchApi = async()=>{
            const result = await getCategory();
            setDataCategory(result)
        }
        fetchApi()
    },[])
    const items = dataCategory.map((item, index) => ({
        key:`${index}`,
        label:(<a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com">
                {item}
            </a>)
    }));


    const navLinkActive = (e) => {
        return e.isActive ? "bg-cyan-700 h-full flex justify-center items-center px-2" : "h-full flex justify-center items-center px-2 hover:bg-cyan-800";
      }

    return ( 
        <div className='w-full h-20 top-0 shadow-lg bg-cyan-900'>
            <div className='w-full h-full flex items-center justify-between px-5'>
                {/* logo */}
                <Link className='px-3' to={'/'}>LOGO</Link>
                {/* menu */}
                <div className='flex h-full items-center justify-between px-5 gap-5 text-white'>
                    <ul className='flex h-full flex-row items-center justify-center gap-4 px-5'>
                        <li className='flex justify-center items-center h-full'>
                            <NavLink className={navLinkActive} to={"/"}> Trang chủ</NavLink>
                        </li>
                        <li className='flex justify-center items-center h-full'>
                        <Dropdown menu={{ items }} className=' cursor-pointer'>
                            <NavLink className='px-2' onClick={(e) => e.preventDefault()}>
                                Thể loại
                            </NavLink>
                        </Dropdown>
                        </li>
                        <li className='flex justify-center items-center h-full'>
                            <NavLink className={navLinkActive} to={"/bookstore"}> Đang đọc </NavLink>
                        </li>
                    </ul>
                {/* search */}
                    <SearchBook/>
                </div>
            
                {/* button */}
                <div className=' flex right-0 w-55 h-full items-center justify-center px-3'>
                    <Flex gap="small" nowrap>
                        <Button type="primary" className='bg-cyan-700 hover:!bg-cyan-600'>Đăng nhập</Button>
                        <Button className='bg-gray-300 border-gray-300'>Đăng kí</Button>
                    </Flex>
                </div>
            </div>
        </div>
     );
}

export default Header;