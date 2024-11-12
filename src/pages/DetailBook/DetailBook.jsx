import { Button } from 'antd';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getBookDetail, patchReadCount } from '../../services/bookService';
import { createBookStore, getAuthor, getBookStore } from '../../services/bookService';
import GoBack from '../../component/GoBack';
import { getCookie } from '../../helper/cookie';

function DetailBook() {
    const token = getCookie('token');
    const navigate = useNavigate();
    const params = useParams();
    const [content, setContent] = useState({});
    const [data, setData] = useState([]);
    const [listAuthor, setListAuthor] = useState([]);
    useEffect(() => {
        const fetchApi = async (id) => {
            const result = await getBookDetail(id);
            setContent(result);
        };
        fetchApi(params.id);
    }, []);
    useEffect(() => {
        const fetchApi = async () => {
            const result = await getAuthor();
            setListAuthor(result);
        };
        fetchApi();
    }, []);

    var name_author = null;
    listAuthor.forEach(function (itemAuthor) {
        if (content.authors == itemAuthor.id) {
            name_author = itemAuthor.name;
        }
    });

    // useEffect(() => {
    //     const fetchApi = async () => {
    //         const result = await getBookStore();
    //         setData(result);
    //     };
    //     fetchApi();
    // }, []);

    const incCount = async (id) => {
        const result = await patchReadCount(id);
    };

    const handleClick = () => {
        if (token) {
            incCount(content.id);
            console.log(content.read_count);
            navigate(`/viewbook/${content.id}`);
        } else {
            navigate('/login');
        }
    };

    const handleClickAuthor = () => {
        navigate(`/author/${content.authors}`);
    };

    const handleClickCategory=()=>{
        navigate(`/category/${content.category}`)
    }

    const handleAddToStore = async () => {
        if (data.some((itemCart) => itemCart.id === content.id)) {
            alert('It in store');
        } else {
            const result = await createBookStore(content);
            if (result) {
                alert('success!');
            }
        }
    };

    return (
        <div>
            <div className="px-8 ">
                <GoBack />
            </div>
            <div className="w-full h-full p-8 flex mb-12">
                <div className="w-full h-[600px] p-8 flex  justify-start mb-12">
                    <div className="w-[400px] h-[500px] flex border-2 border-gray-400 shadow-md shadow-slate-400">
                        <img className="w-full aspect-[4/3] object-cover" src={content.image} alt={content.title} />
                    </div>
                    <div className="ml-20 w-[700px] h-full flex flex-col ">
                        <div className="flex flex-col gap-3">
                            <h1 className="font-bold text-3xl">{content.title}</h1>
                            <h3 className="text-base font-medium">
                                <span className="font-bold text-xl ">
                                    Tác Giả:
                                    <span className="cursor-pointer hover:text-zinc-600" onClick={handleClickAuthor}>
                                        &nbsp; {name_author}
                                    </span>
                                </span>
                            </h3>
                            <h3 className="text-base font-medium">
                                <span className="font-bold text-xl">Thể Loại:
                                    <span className="cursor-pointer hover:text-zinc-600" onClick={handleClickCategory}>
                                            &nbsp; {content.category}
                                    </span>
                                </span>
                            </h3>
                            <p className="font-normal text-base">
                                <span className="font-bold">Tóm tắt nội dung:</span>&nbsp; {content.description}
                            </p>
                        </div>
                        <div className="mt-16 w-full h-full flex bottom-0 mb-9">
                            <Button
                                type="primary"
                                size="large"
                                className="w-40 bg-cyan-900 self-end hover:!bg-cyan-700"
                                onClick={handleClick}
                            >
                                Đọc sách
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DetailBook;
