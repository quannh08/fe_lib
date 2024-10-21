import BookItemStore from './BookItemStore';
import { useEffect, useState } from 'react';
import { getBookStore } from '../../services/bookService';
import useSelection from 'antd/es/table/hooks/useSelection';

function BookItemList() {
    const [data, setData] = useState([]);
    const reload = useSelection((state) => state.delStore);
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
                <BookItemStore item={item} key={item.id} />
            ))}
        </div>
    );
}

export default BookItemList;
