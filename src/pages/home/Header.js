import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = ({ onSearch }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const handleSearchChange = (event) => {
        const query = event.target.value;
        setSearchQuery(query);
        onSearch(query);
    };
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        {window.location.pathname === '/' ?
                            <form>
                                <div className="search-container">
                                    <input
                                        type="text"
                                        placeholder="Search"
                                        value={searchQuery}
                                        onChange={handleSearchChange}
                                        className="search-input"

                                    />
                                    <div className="search-icon">
                                        <i className="fa fa-search" aria-hidden="true"></i>
                                    </div>
                                </div>
                            </form>
                            : <b>Movie Details</b>}
                    </li>
                    <li>
                        <Link to="/">
                            <i className="fa fa-home icon-home" aria-hidden="true"></i>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
