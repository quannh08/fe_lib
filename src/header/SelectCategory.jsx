import { Dropdown,Menu } from 'antd';
import { useEffect, useState } from 'react';
import { getCategory} from '../services/bookService';
import { Link } from 'react-router-dom';


function SelectCategory() {
    const [dataCategory,setDataCategory] = useState([])
    useEffect(()=>{
        const fetchApi = async()=>{
            const result = await getCategory();
            setDataCategory(result)
        }
        fetchApi()
    },[])

    const items = dataCategory.map((item,index) => ({
        key:`${index}`,
        label:(
            <Link to={'/category/'+item}>
                {item}
            </Link>)
    }));
    return ( 
        <>
            <Dropdown menu={{ items }} className='h-full flex justify-center items-center px-2'>
                <div className='px-2 overflow-auto' onClick={(e) => e.preventDefault()}>
                    Thể loại
                </div>
            </Dropdown>
        </>
     );
}

export default SelectCategory;