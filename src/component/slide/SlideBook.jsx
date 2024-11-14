// import { addToStore } from '../../actions/addBook';
// import { useDispatch } from 'react-redux';
import { getAuthor } from '../../services/bookService';

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Badge } from 'antd';

function SlideBook(props) {
    const { item } = props;
    // const dispatch = useDispatch();

    return (
        <Badge.Ribbon
            text={item.read_count}
            color="purple"
            className="text-white font-semibold top-0 !right-5 absolute"
        >
            <div className="border border-solid w-[330px] max-w-[330px] min-h-[330px] h-[330px] relative rounded-md border-gray-400 mb-8 p-3 bg-white ">
                <Link to={'/books/' + item.id}>
                    <img className="w-full aspect-[4/3] object-cover" src={item.image} alt={item.title} />
                </Link>

                <div className="my-3">
                    <Link to={'/books/' + item.id}>
                        <h2 className=" text-gray-700 text-lg font-bold hover:!text-gray-600">{item.title}</h2>
                    </Link>
                </div>
            </div>
        </Badge.Ribbon>
    );
}

export default SlideBook;
