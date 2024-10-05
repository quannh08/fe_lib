import { Button } from 'antd';
import { addToStore } from '../../actions/addBook';
import { useDispatch } from 'react-redux';
import { createBookStore,getBookStore } from '../../services/bookService';
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';

function Book(props) {
    const { item } = props;
    const dispatch = useDispatch();
    const[data,setData] = useState([])
    
    useEffect(() => {
        const fetchApi = async () => {
            const result = await getBookStore();
            setData(result);
        };
        fetchApi();
    }, []);
    
    const handleAddToStore = async()=>{
        if( data.some(itemCart => itemCart.id === item.id)){
            alert("It in store")
        }
        else{
            dispatch(addToStore(item.id, item));
            const result = await createBookStore(item)
            if(result){
                alert("success!")
            }
        }
        
      }

    return (
        <div className="border-2 border-solid border-gray-400 mb-8 p-3 shadow-md shadow-slate-400 bg-white flex flex-col hover:scale-105" 
            key={item.id}>
            <Link to={'/books/'+item.id}>
                <img className="w-full aspect-[4/3] object-cover" src={item.thumbnail} alt={item.title} />
                </Link>
            <hr className=""></hr>
            <div className="my-3">
                <Link to={'/books/'+item.id}>
                    <h2 className="text-lg font-bold">{item.title}</h2>
                </Link>
                <h4 className='font-semibold text-base'>Thể Loại: <strong>{item.category}</strong></h4>
                <p>Tác Giả:<strong>xxxxxx</strong></p>
            </div>
            <div className="w-full h-full flex justify-center items-center bottom-0">
                <Button
                    type="primary"
                    size="large"
                    className="w-40 bg-cyan-900  ml-auto self-end hover:!bg-cyan-700"
                    onClick={handleAddToStore}
                >
                    Thêm vào đọc sau
                </Button>
            </div>
        </div>
    );
}

export default Book;
