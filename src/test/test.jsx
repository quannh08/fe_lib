
// import { Menu, Dropdown, Button } from 'antd';
// import { DownOutlined } from '@ant-design/icons';

// const CustomDropdown = () => {
//   const data = [
//     { id: 1, name: 'Option 1' },
//     { id: 2, name: 'Option 2' },
//     { id: 3, name: 'Option 3' },
//   ];

//   const handleMenuClick = (e) => {
//     console.log('Clicked option: ', e.key);
//   };

//   const menu = (
//     <Menu onClick={handleMenuClick}>
//       {data.map((item) => (
//         <Menu.Item key={item.id}>
//           {item.name}
//         </Menu.Item>
//       ))}
//     </Menu>
//   );

//   return (
//     <div className='pt-20'>
//         <Dropdown overlay={menu}>
//           <div className='w-52'>
//             Select an option <DownOutlined />
//           </div>
//         </Dropdown>
//     </div>
//   );
// };

// export default CustomDropdown;

import ReactPaginate from 'react-paginate';
import { useEffect, useState } from 'react';
import { getProductList } from '../services/bookService';
import Book from '../pages/Home/Book';


const PaginationWithLibrary = () => {
  const itemsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(0);
  const [data, setData] = useState([])

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
    <div className='w-full flex flex-col '>
      <div className="flex w-full flex-wrap grid grid-cols-4 gap-8 px-6 py-10">
            {currentItems.map((item) => (
                <Book item={item} key={item.id} />
            ))}
        </div>

      {/* Component phân trang */}
          <div className='flex w-full flex-wrap grid grid-cols-4 gap-8 px-6 py-10'>
        <ReactPaginate
          previousLabel={'previous'}
          nextLabel={'next'}
          breakLabel={'...'}
          pageCount={Math.ceil(data.length / itemsPerPage)}
          marginPagesDisplayed={2}
          pageRangeDisplayed={2}
          onPageChange={handlePageClick}
          containerClassName={'flex space-x-2'}
        previousClassName={'px-3 py-2 bg-gray-200 rounded-lg'}
        nextClassName={'px-3 py-2 bg-gray-200 rounded-lg'}
        pageClassName={'px-3 py-2 bg-gray-100 rounded-lg'}
        activeClassName={'!bg-blue-500'}
        />
      </div>
    </div>
  );
};

export default PaginationWithLibrary;
