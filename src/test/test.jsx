import { useState,useEffect } from 'react';
import { Dropdown, Space } from 'antd';
import { getCategory } from '../services/productService';


function Apps() {
    const [data,setData] = useState([])
    useEffect(()=>{
        const fetchApi = async()=>{
            const result = await getCategory();
            setData(result)
        }
        fetchApi()
    },[])
    const itemsArray = ["áo", "quần", "tất"];

// Chuyển mảng thành items để dùng cho Dropdown
const items = data.map((item, index) => ({
    key:`${index}`,
    label:(<a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com">
            {item}
        </a>)
}));

    return ( 
        <>
             <Dropdown
                menu={{
                items
                }}
            >
                <a onClick={(e) => e.preventDefault()}>
                <Space>
                    Hover me
                </Space>
                </a>
            </Dropdown>
        </>
     );
}

export default Apps;
