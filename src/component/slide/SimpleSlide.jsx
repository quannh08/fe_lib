import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

import { getProductList } from '../../services/bookService';
import { useState, useEffect } from 'react';
import SlideBook from './SlideBook';

function SimpleSlide() {
    const [data, setData] = useState([]);

    const settings = {
        dots: true,
        className: 'center',
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        centerPadding: '60px',
        //autoplay: true,
        speed: 500,
        //autoplaySpeed: 3000,
        cssEase: 'linear',
    };

    useEffect(() => {
        const fetchApi = async () => {
            const result = await getProductList();
            setData(result);
        };
        fetchApi();
    }, []);

    const mostReaded = data.sort((a, b) => b.read_count - a.read_count).slice(0, 6);

    return (
        <div className="px-6 my-7">
            <h2 className="text-2xl font-bold pb-4"> Sách được truy cập nhiều nhất</h2>
            <div>
                <Slider {...settings} className="w-full">
                    {mostReaded.map((item) => {
                        return <SlideBook item={item} key={item.id} />;
                    })}
                </Slider>
            </div>
        </div>
    );
}

export default SimpleSlide;
