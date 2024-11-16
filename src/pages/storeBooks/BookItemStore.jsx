// import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { delBook } from '../../actions/delBookStore';
// import { toast, ToastContainer } from 'react-toastify';
function BookItem(props) {
    const { item } = props;

    return (
        <div
            className="border-2 border-solid border-gray-400 mb-8 p-3 shadow-md shadow-slate-400 bg-white max-w-sm flex flex-col hover:scale-105"
            key={item.id}
        >
            <Link to={'/books/' + item.id}>
                <img className="w-full aspect-[4/3] object-cover" src={item.image} alt={item.title} />
            </Link>
            <hr className=""></hr>
            <div className="my-3">
                <Link to={'/books/' + item.id}>
                    <h2 className="text-lg font-bold">{item.title}</h2>
                </Link>
                <h4 className="font-semibold text-base">
                    <strong>Thể Loại:</strong> {item.category}
                </h4>
                <p>
                    <strong>Tác Giả: </strong> xxxx
                </p>
            </div>
        </div>
    );
}

export default BookItem;
