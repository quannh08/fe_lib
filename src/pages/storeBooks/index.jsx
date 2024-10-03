import { useDispatch, useSelector } from "react-redux";
import BookItemList from "./BookItemList";
import { deleteAll } from "../../actions/addBook";
import { useState,useEffect } from "react";
import { getBookStore } from "../../services/bookService";
function BookStore() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            const result = await getBookStore();
            setData(result);
        };
        fetchApi();
    }, []);

    const handleDeleteAll=()=>{
        // dispatch(deleteAll())
    }
    return ( 
        <div className="m-8 min-h-full">
            <div className="flex w-full justify-between ">
                <h2 className="font-bold text-xl">Sách đang đọc</h2>
                <button onClick={handleDeleteAll} className="bg-cyan-800 w-20 h-9 text-white rounded active:bg-cyan-600"> delete All</button>
            </div>

            <div>
                {data.length > 0 ? (
                    <>
                        <BookItemList/>
                    </>):(
                    <>Empty Store</>)}
            </div>
        </div>
     );
}

export default BookStore;