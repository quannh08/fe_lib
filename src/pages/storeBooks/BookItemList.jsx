import { getBookDetail } from '../../services/bookService';
import { getProductList } from '../../services/bookService';

import { useEffect, useState } from 'react';
// import { getBookStore } from '../../services/bookService';
import useSelection from 'antd/es/table/hooks/useSelection';
import Book from '../../component/Book/Book';

function BookItemList(props) {
    const { data } = props;
    const reload = useSelection((state) => state.delStore);
    const [dataAllBook, setDataAllBook] = useState([]);
    useEffect(() => {
        const fetchApi = async () => {
            const result = await getProductList();
            setDataAllBook(result);
        };
        fetchApi();
    }, []);

    const detailedHistoryBook = data
        .map((historyItem) => {
            const bookDetails = dataAllBook.find((book) => book.id === historyItem.id_book);
            return bookDetails ? { ...bookDetails } : null;
        })
        .filter((item) => item !== null);
    console.log(detailedHistoryBook);

    return (
        <div className=" w-full mt-10 flex flex-wrap grid grid-cols-4 gap-7 px-6">
            {detailedHistoryBook.map((item) => (
                <Book item={item} key={item.id} />
            ))}
        </div>
    );
}

export default BookItemList;
