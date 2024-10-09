import { Button } from 'antd';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getBookDetail } from '../../services/bookService';
import { createBookStore,getBookStore } from '../../services/bookService';
import GoBack from '../../component/GoBack';
import { getCookie } from '../../helper/cookie';


function DetailBook() {
    const token = getCookie("token")
    const navigate = useNavigate();
    const params = useParams();
    const [content, setContent] = useState({});
    const[data,setData] = useState([])
    useEffect(() => {
        const fetchApi = async (id) => {
            const result = await getBookDetail(id);
            setContent(result);
        };
        fetchApi(params.id);
    }, []);

    useEffect(() => {
        const fetchApi = async () => {
            const result = await getBookStore();
            setData(result);
        };
        fetchApi();
    }, []);

    const handleClick=()=>{
        if(token){
            handleAddToStore();
        }
        else{
            navigate('/login')
        }
    }

    const handleAddToStore = async()=>{
        if( data.some(itemCart => itemCart.id === content.id)){
            alert("It in store")
        }
        else{
           
            const result = await createBookStore(content)
            if(result){
                alert("success!")
            }
        }
        
      }

    return (
        <div>
            <div className='px-8 '>
                <GoBack/>
            </div>
            <div className='w-full h-[600px] p-8 flex  justify-start mb-12'>
                
                <div className='w-[400px] h-[500px] flex border-2 border-gray-400 shadow-md shadow-slate-400'>
                    <img className='w-full aspect-[4/3] object-cover'
                        src={content.thumbnail}
                        alt={content.title} />
                </div>
                <div className='ml-5 w-[700px] h-full flex flex-col'>
                    <div className='flex flex-col gap-3'>
                        <h1 className='font-bold text-3xl'>{content.title}</h1>
                        <h3 className='text-base font-medium'><span className='font-bold text-xl'>Tac gia:</span> XXXXXX</h3>
                        <h3 className='text-base font-medium'><span className='font-bold text-xl'>The loai:</span> {content.category}</h3>
                        <p className='font-normal text-base'><span className='font-bold'>Tom tat noi dung:</span> {content.description}</p>
                    </div>
            
                    <div className='mt-16 w-full h-full flex bottom-0 mb-9'>
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
    );
}

export default DetailBook;
