import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";

import { getAuthorById, getProductList } from '../../services/bookService';
import GoBack from '../../component/GoBack';
import Book from '../../component/Book/Book';

function Author() {
    const params = useParams();
    const [listBook,setListBook] = useState([]);
    // const [listBookOfAuthor, setListBookOfAuthor] = useState([]);
    const [author,setAuthor] = useState({})

    //get AUthor
    useEffect(() => {
        const fetchApi = async () => {
            const result = await getAuthorById(params.id);
            setAuthor(result);
        };
        fetchApi();
    }, []);
    
    
    useEffect(() => {
        const fetchApi = async () => {
            const result = await getProductList();
            setListBook(result);
        };
        fetchApi();
    }, []);

    const listBookOfAuthor = listBook.filter(item => item.authors==params.id)

    //list book of author
    const itemsPerPage = 8;
    const [currentPage, setCurrentPage] = useState(0);
    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = listBookOfAuthor.slice(startIndex, endIndex);

    const handlePageClick = (data) => {
        setCurrentPage(data.selected);
    };


    return (
        <div>
            <div className="px-8 ">
                <GoBack />
            </div>
            <div className="w-full h-full p-8 flex ">
                <div className="w-full h-[500px] p-8 flex  justify-start mb-12">
                    <div className="w-[400px] h-[500px] flex border-2 border-gray-400 shadow-md shadow-slate-400">
                        <img className="w-full aspect-[4/3] object-cover" src={author.profile_picture} alt={author.name} />
                    </div>
                    <div className="ml-20 w-[700px] h-full flex flex-col">
                        <div className="flex flex-col gap-3">
                            <h1 className="font-bold text-3xl">{author.name}</h1>
                            <h3 className="text-base font-medium">
                                <span className="font-bold text-xl">Ngày sinh:</span>
                                <span className="text-xl">&nbsp; {author.birth_date}</span>
                            </h3>
                            <h3 className="text-base font-medium">
                                <span className="font-bold text-xl">Quốc tịch:</span>
                                <span className="text-xl">&nbsp; {author.nationality}</span>
                            </h3>
                            <h3 className="text-base font-medium">
                                <span className="font-bold text-xl">Thành tựu:</span>
                                <span className="text-xl">&nbsp; {author.awards}</span>
                            </h3>
                            <p className="font-normal text-base">
                                <span className="font-bold">Giới thiệu chung:</span>&nbsp; {author.biography}
                            </p>
                        </div>
                       
                    </div>
                </div>
                
            </div>
            <div className='p-8 flex-col'>
                <div className='flex justify-start items-center'>
                    <h2 className='font-bold text-3xl px-8'>Những tác phẩm của {author.name}</h2>
                </div>
                <div className="w-full flex flex-col ">
                    <div className="flex w-full flex-wrap grid grid-cols-4 gap-8 px-6 py-10">
                        {currentItems.map((item) => (
                            <Book item={item} key={item.id} />
                        ))}
                    </div>

                    {/* Component phân trang */}
                    <div className="flex items-center justify-center">
                <ReactPaginate
                    className="flex items-center justify-center gap-2"
                    previousLabel={
                        <span className="flex justify-center items-center">
                            <FaAngleDoubleLeft />
                        </span>
                    }
                    nextLabel={
                        <span className="flex justify-center items-center">
                            <FaAngleDoubleRight />
                        </span>
                    }
                    breakLabel={'...'}
                    pageCount={Math.ceil(listBookOfAuthor.length / itemsPerPage)}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={0}
                    onPageChange={handlePageClick}
                    containerClassName={'flex gap-3'}
                    previousClassName={'px-3 py-2 bg-gray-300 rounded-lg'}
                    nextClassName={'px-3 py-2 bg-gray-300 rounded-lg'}
                    pageClassName={'px-3 py-2 bg-gray-200 rounded-lg'}
                    activeClassName={'!bg-cyan-800 text-gray-200'}
                />
            </div>
                </div>
            </div>
        </div>
    );
}

export default Author;