import { ConfigProvider, Input, Space } from 'antd';
import { useEffect, useState } from 'react';
import { getProductList } from '../services/bookService';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { searchAction } from '../actions/searchAction';
const { Search } = Input;

function SearchBook() {
    // const [data, setData] = useState([]);
    // const [searchResults, setSearchResults] = useState([]);
    // const [visible, setVisible] = useState(true);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    //get list product
    // useEffect(() => {
    //     const fetchApi = async () => {
    //         const result = await getProductList();
    //         setData(result);
    //     };
    //     fetchApi();
    // }, []);

    const handleSearch = (value) => {
        // const filteredData = data.filter((item) => item.title.toLowerCase().includes(value.toLowerCase()));
        // setSearchResults(filteredData);
        if (value) {
            dispatch(searchAction(value));
            navigate(`/search/${value}`);
        } else {
            navigate('/');
        }
    };

    // const handleBlur = () => {
    //     setTimeout(() => {
    //       setVisible(false);
    //     }, 300); // delay để đảm bảo onClick của kết quả tìm kiếm được kích hoạt trước
    //   };

    // const handleFocus = () => {
    //     setVisible(true);
    //   };

    return (
        <div className="relative">
            <ConfigProvider
                theme={{
                    components: {
                        Search: {
                            // algorithm:true,
                        },
                    },
                    token: {
                        activeBg: '#e5e7eb', // Màu nền active
                        activeBorderColor: 'rgb(22 78 99)', // Màu viền active
                        hoverBg: '#e5e7eb', // Màu nền khi hover
                        hoverBorderColor: '', // Màu viền khi hover
                        BorderColor: 'rgb(22 78 99)',
                        activeShadow: '',
                        colorPrimary: 'rgb(22 78 99)',
                    },
                }}
            >
                <Space>
                    <Search
                        className="h-10 w-80 rounded-lg shadow-lg"
                        placeholder="Tra cứu sách "
                        allowClear
                        onSearch={handleSearch}
                        // onFocus={handleFocus}
                        // onBlur={handleBlur}
                        size="large"
                    />
                </Space>
            </ConfigProvider>
            {/* {visible && (
                <ul className="absolute w-full max-h-40 bg-slate-100 overflow-auto text-gray-800 rounded shadow-md"
                    style={{}}
                    >
                    {searchResults.map((item, index) => (
                        <li className='p-2 w-full' key={index}>
                            <Link 
                            className=' flex w-full p-2 hover:bg-slate-200'  
                            to={'/books/'+item.id}
                            >{item.title}
                            </Link>
                            
                        </li>
                    ))}
                </ul>   
            )} */}
        </div>
    );
}

export default SearchBook;
