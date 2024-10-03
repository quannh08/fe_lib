import { Input } from 'antd';
import { useEffect, useState } from 'react';
import { getProductList } from '../services/bookService';
import { Link } from 'react-router-dom';
const { Search } = Input;

function SearchBook() {
    const [data, setData] = useState([]);
    const [searchResults, setSearchResults] = useState([]);
    const [visible, setVisible] = useState(true);
    useEffect(() => {
        const fetchApi = async () => {
            const result = await getProductList();
            setData(result);
        };
        fetchApi();
    }, []);
    const titles = data.map((item) => item.title);
    const handleSearch = (value) => {
        const filteredData = titles.filter((item) => item.toLowerCase().includes(value.toLowerCase()));
        setSearchResults(filteredData);
    };
    
    const handleBlur = () => {
       setVisible(false)
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
                <ul className="absolute w-full max-h-32 bg-slate-100 overflow-auto text-gray-800 rounded"
                    style={{}}
                    >
                    {searchResults.map((result, index) => (
                        <li className='p-2 w-full' key={index}>
                            <Link className=' flex w-full p-2 hover:bg-slate-200' to={'/detail'}>{result}</Link>
                        </li>
                    ))}
                </ul>   
            )}
            
        </div>
    );
}

export default SearchBook;
