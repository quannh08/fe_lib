import { useState, useEffect } from 'react';
import { getProductList } from '../../services/bookService';
import { useParams } from 'react-router-dom';
import Book from '../Home/Book';
import { useSelector } from 'react-redux';

function PageSearch() {
    const params = useParams();
    const [searchResults, setSearchResults] = useState([]);
    const search = useSelector((state) => state.searchReducer);
    // console.log(search);
    useEffect(() => {
        const fetchApi = async () => {
            const result = await getProductList();
            const filteredData = result.filter((item) => item.title.toLowerCase().includes(params.query.toLowerCase()));
            setSearchResults(filteredData);
        };
        fetchApi();
    }, [search]);

    console.log();
    console.log(searchResults);
    return (
        <div className="w-full h-full flex flex-col">
            {searchResults.length ? (
                <>
                    <h2 className="m-5 text-lg font-base">
                        Kết quả tìm kiếm của : <span className="font-bold">{params.query}</span>
                    </h2>
                    <div className=" w-full mt-10 flex flex-wrap grid grid-cols-4 gap-7 px-6">
                        {searchResults.map((item) => (
                            <Book item={item} key={item.id} />
                        ))}
                    </div>
                </>
            ) : (
                <h2 className="m-5 text-lg font-base">
                    Không có kết quả trùng với : <span className="font-bold">{params.query}</span>
                </h2>
            )}
        </div>
    );
}

export default PageSearch;
