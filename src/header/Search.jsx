import { ConfigProvider, Input, Space } from 'antd';
import { useEffect, useState } from 'react';
import { getProductList } from '../services/bookService';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { searchAction } from '../actions/searchAction';
const { Search } = Input;

function SearchBook() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSearch = (value) => {
        if (value) {
            dispatch(searchAction(value));
            navigate(`/search/${value}`);
        } else {
            navigate('/');
        }
    };

    return (
        <div className="relative">
            <ConfigProvider
                theme={{
                    components: {
                        Input: {
                            borderColor: '!transparent',
                        },
                    },
                    token: {
                        activeBorderColor: 'rgb(22 78 99)', // Màu viền active
                        hoverBg: 'rgb(22 78 99)', // Màu nền khi hover
                        hoverBorderColor: 'transparent', // Màu viền khi hover
                        BorderColor: 'rgb(22 78 99)',
                        activeShadow: '#fff',
                        colorPrimary: 'rgb(22 78 99)',
                        addonBg: 'none',
                    },
                }}
            >
                <Space>
                    <Search
                        styles={{ opacity: '1', willChange: 'auto', transform: 'none' }}
                        className="h-10 w-80 rounded-lg shadow-lg  focus:!outline-1 active:bg-slate-400"
                        placeholder="Tra cứu sách "
                        allowClear
                        onSearch={handleSearch}
                        // onFocus={handleFocus}
                        // onBlur={handleBlur}
                        size="large"
                    />
                </Space>
            </ConfigProvider>
        </div>
    );
}

export default SearchBook;
