import { useState } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

function Header({ onSearch }) {
    const [textSearch, setSearch] = useState('');
    return (
        <div className="p-4 bg-black flex items-center justify-between">
            <div className="flex items-center space-x-4">
                <h1 className="text-[30px] uppercase font-bold text-red-700">Movie</h1>
                <nav className="flex items-center space-x-4">
                    <a href="#" className="text-white pl-3 uppercase hover:text-red-800">Trang chủ</a>
                    <a href="#" className="text-white pl-3 uppercase hover:text-red-800">Phim mới</a>
                    <a href="#" className="text-white pl-3 uppercase hover:text-red-800">Phim lẻ</a>
                    <a href="#" className="text-white pl-3 uppercase hover:text-red-800">Phim chiếu rạp</a>
                    <a href="#" className="text-white pl-3 uppercase hover:text-red-800">Trailer</a>
                    <a href="#" className="text-white pl-3 uppercase hover:text-red-800">Thể loại</a>
                    <a href="#" className="text-white pl-3 uppercase hover:text-red-800">Quốc gia</a>
                    <a href="#" className="text-white pl-3 uppercase hover:text-red-800">Năm phát hành</a>
                </nav>
            </div>
            <div className="flex items-center relative">
                <input type="text"  placeholder="Search" className="p-2 rounded-lg text-black outline-none" onChange={(e) => setSearch(e.target.value)} value={textSearch}/>
                {/* <button className="p-2 text-white bg-red-600" onClick={() => onSearch(textSearch)}>Search</button> */}
                <FontAwesomeIcon icon={faMagnifyingGlass} className="cursor-pointer absolute right-4" onClick={() => onSearch(textSearch)}/>
            </div>
        </div>
    )
}

Header.propTypes = {
    onSearch: PropTypes.func,
};

export default Header;