import { delBookStore } from '../../services/bookService';
import { Link } from 'react-router-dom';
function BookItem(props) {
    const { item } = props;

    // const handleDelete = async() => {
    //     const result = await delBookStore(item.id);
    //     if(result){
    //         alert('del success!')
    //     }
    // };
    

    
    return (
        <div className="border-2 border-solid border-gray-400 mb-8 p-3 shadow-md shadow-slate-400 bg-white max-w-sm flex flex-col hover:scale-105"
            key={item.id}>
            
            <Link to={'/books/'+item.id}>
                    <img className="w-full aspect-[4/3] object-cover" src={item.thumbnail} alt={item.title} />
            </Link>
            <hr className=""></hr>
            <div className="my-3">
                <Link to={'/books/'+item.id}>
                    <h2 className="text-lg font-bold">{item.title}</h2>
                </Link>
                <h4 className="font-semibold text-base"><strong>Thể Loại:</strong> {item.category}</h4>
                <p><strong>Tác Giả: </strong> xxxx</p>
            </div>
            {/* <div className="w-full h-full flex self-end justify-center items-center bottom-0">
                <button onClick={handleDelete} className="w-full h-9 self-end bg-slate-600 text-white hover:bg-slate-500 active:bg-slate-400">
                    Delete
                </button>
            </div> */}
        </div>
    );
}

export default BookItem;
