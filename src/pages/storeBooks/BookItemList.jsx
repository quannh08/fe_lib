
import BookItem from './BookItem';
import { useEffect, useState } from 'react';
import { getBookStore } from '../../services/bookService';

function BookItemList() {
    const [data, setData] = useState([]);
    
    useEffect(() => {
        const fetchApi = async () => {
            const result = await getBookStore();
            setData(result.reverse());
        };
        fetchApi();
    }, []);
    return (
        <div className=" w-full mt-10 flex flex-wrap grid grid-cols-4 gap-7 px-6">
            {data.map((item) => (
                <BookItem item={item} key={item.id} />
            ))}
        </div>
    );
}

export default BookItemList;
