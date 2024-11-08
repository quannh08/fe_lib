import { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import { useParams } from 'react-router-dom';
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";

import { getProductList } from '../../services/bookService';
// import BookItem from '../storeBooks/BookItemStore';
import GoBack from '../../component/GoBack';
import Book from '../../component/Book/Book';

function Category() {
    const [data, setData] = useState([]);
    const params = useParams();

    const itemsPerPage = 8;
    const [currentPage, setCurrentPage] = useState(0);

    useEffect(() => {
        const fetchApi = async () => {
            const result = await getProductList();
            setData(result);
        };
        fetchApi();
    }, []);

    const filterData = data.filter((item) => item.category === params.item);
    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = filterData.slice(startIndex, endIndex);

    const handlePageClick = (data) => {
        setCurrentPage(data.selected);
    };

    // const pageCount = filterData.length > itemsPerPage
    // ? Math.ceil(filterData.length / itemsPerPage)
    // : 1;

    return (
        <div>
            <div className="px-8 ">
                <GoBack />
            </div>
            <div className="m-8 min-h-full">
                <div className="flex w-full justify-between ">
                    <h2 className="w-full font-bold text-xl ml-auto">{params.item}</h2>
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
                            previousLabel={<span><FaAngleDoubleLeft /></span>}
                            nextLabel={<span><FaAngleDoubleRight /></span>}
                            breakLabel={'...'}
                            pageCount={Math.ceil(filterData.length / itemsPerPage)}
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

export default Category;
