import { useEffect, useState } from 'react';
import { getProductList } from '../../services/bookService';
import Book from './Book';

function ListBook() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            const result = await getProductList();
            setData(result);
        };
        fetchApi();
    }, []);
    
    return (
        <div className="flex w-full flex-wrap grid grid-cols-3 gap-7 px-6 py-10">
            {data.map((item) => (
                <Book item={item} key={item.id} />
            ))}
        </div>
    );
}

export default ListBook;
