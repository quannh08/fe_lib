import { Dropdown } from 'antd';
import { useEffect, useState } from 'react';
import { getProductList } from '../services/bookService';
import { Link } from 'react-router-dom';

function SelectCategory() {
    const [listBooks, setListBooks] = useState([]);
    const [dataCategory, setDataCategory] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            const result = await getProductList();
            setListBooks(result);
        };
        fetchApi();
    }, []);

    useEffect(() => {
        const categories = Array.from(new Set(listBooks.map((book) => book.category)));
        setDataCategory(categories);
    }, [listBooks]);
    
    const items = dataCategory.map((item, index) => ({
        key: `${index}`,
        label: <Link to={'/category/' + item}>{item}</Link>,
    }));

    return (
        <>
            <Dropdown menu={{ items }} className="h-full flex justify-center items-center px-2">
                <div className="px-2 cursor-pointer" onClick={(e) => e.preventDefault()}>
                    Thể loại
                </div>
            </Dropdown>
        </>
    );
}

export default SelectCategory;
