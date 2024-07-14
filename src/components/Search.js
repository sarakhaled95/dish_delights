import React, { useState } from 'react';

const Search = ({ onSearch }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(searchQuery.trim()); // Call onSearch function from props with trimmed search query
    };

    return (
        <>
            <div className="headrecipe">
            </div>
            <div className="container2 mt-5">
        <div className="row5">
            <form onSubmit={handleSubmit}>
                <div className="input-group mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search recipes..."
                        value={searchQuery}
                        onChange={handleChange}
                    />
                    <div className="input-group-append">
                        <button className="btn" type="submit">Search</button>
                    </div>
                </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Search;
