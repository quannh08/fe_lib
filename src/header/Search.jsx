import { Input } from 'antd';
import { useEffect, useState } from 'react';
import { getProductList } from '../services/bookService';
import { Link } from 'react-router-dom';
const { Search } = Input;

function SearchBook() {
    const [data, setData] = useState([]);
    const [searchResults, setSearchResults] = useState([]);
    const [visible, setVisible] = useState(true);
    
    //get list product
    useEffect(() => {
        const fetchApi = async () => {
            const result = await getProductList();
            setData(result);
        };
        fetchApi();
    }, []);

    const handleSearch = (value) => {
        const filteredData = data.filter((item) => item.title.toLowerCase().includes(value.toLowerCase()));
        setSearchResults(filteredData);
    };

    

    const handleBlur = () => {
        setTimeout(() => {
          setVisible(false);
        }, 300); // delay để đảm bảo onClick của kết quả tìm kiếm được kích hoạt trước
      };

    const handleFocus = () => {
        setVisible(true);
      };

    // const onSearch = (value, _e, info) => console.log(info?.source, value);
    return (
        <div className="relative">
            <Search
                className="p-2"
                placeholder="search "
                allowClear
                onSearch={handleSearch}
                onFocus={handleFocus}
                onBlur={handleBlur}
                style={{
                    width: 300,
                }}
                
            />
            {visible && (
                <ul className="absolute w-full max-h-32 bg-slate-100 overflow-auto text-gray-800 rounded shadow-md"
                    style={{}}
                    >
                    {searchResults.map((item, index) => (
                        <li className='p-2 w-full' key={index}>
                            <Link 
                            className=' flex w-full p-2 hover:bg-slate-200'  
                            to={'/books/'+item.id}
                            >{item.title}</Link>
                        </li>
                    ))}
                </ul>   
            )}
            
        </div>
    );
}

export default SearchBook;
