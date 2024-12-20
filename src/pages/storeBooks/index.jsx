// import { useDispatch, useSelector } from "react-redux";
import BookItemList from './BookItemList';
// import { deleteAll } from "../../actions/addBook";
import { useState, useEffect } from 'react';
import { getBookStore } from '../../services/bookService';
import GoBack from '../../component/GoBack';
// import { useSelector } from 'react-redux';
function BookStore() {
    const [data, setData] = useState([]);
    // const reload = useSelector((state) => state.delStore);
    useEffect(() => {
        const fetchApi = async () => {
            const result = await getBookStore();
            setData(result.read_books);
        };
        fetchApi();
    }, []);
    console.log(data);

    return (
        <div>
            <div className="px-8 ">
                <GoBack />
            </div>
            <div className="m-8 min-h-full">
                <div className="flex w-full justify-between ">
                    <h2 className="w-full font-bold text-xl ml-auto">Sách đã đọc</h2>
                    {/* <button onClick={handleDeleteAll} className="bg-cyan-800 w-20 h-9 text-white rounded active:bg-cyan-600"> delete All</button> */}
                </div>
                <div>
                    {data.length > 0 ? (
                        <>
                            <BookItemList data={data} />
                        </>
                    ) : (
                        <>Empty Store</>
                    )}
                </div>
            </div>
        </div>
    );
}

export default BookStore;
