import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { FaAngleDoubleLeft, FaAngleDoubleRight } from 'react-icons/fa';

import { getProductList } from '../../services/bookService';
import Book from '../../component/Book/Book';

function ListBook() {
    const itemsPerPage = 8;
    const [currentPage, setCurrentPage] = useState(0);
    const [data, setData] = useState([]);

    // Tính toán chỉ số bắt đầu và kết thúc
    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = data.slice(startIndex, endIndex);

    const handlePageClick = (data) => {
        setCurrentPage(data.selected);
    };

    useEffect(() => {
        const fetchApi = async () => {
            const result = await getProductList();
            setData(result);
        };
        fetchApi();
    }, []);

    return (
        <div className="w-full flex flex-col ">
            <h2 className="text-2xl font-bold pb-2 ml-6">Sách mới nhất</h2>
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
                    pageCount={Math.ceil(data.length / itemsPerPage)}
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
    );
}

export default ListBook;
