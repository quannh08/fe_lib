import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';

import { getProductList } from '../../services/bookService';
import Book from './Book';

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
            <div className="flex w-full flex-wrap grid grid-cols-4 gap-8 px-6 py-10">
                {currentItems.map((item) => (
                    <Book item={item} key={item.id} />
                ))}
            </div>

            {/* Component phân trang */}
            <div className="flex items-center justify-center">
                <ReactPaginate
                    previousLabel={'previous'}
                    nextLabel={'next'}
                    breakLabel={'...'}
                    pageCount={Math.ceil(data.length / itemsPerPage)}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={2}
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
