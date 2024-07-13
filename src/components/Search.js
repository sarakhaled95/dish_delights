import React, { useState } from 'react';

const Search = ({ onSearch }) => {
    const [search, setSearch] = useState('');

    const handleChange = (e) => {
        setSearch(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(search); // Call onSearch function from props with current search query
    };

    return (
        <>
            <div className="headrecipe"></div>
            <div className="container2">
                <div className="row5">
                    <div className="col max-auto text-center">
                        <form className="mt-4" onSubmit={handleSubmit}>
                            <label htmlFor="search" className="secondary-title">search for recipes</label>
                            <div className="input-group">
                                <input
                                    type="text"
                                    name="search"
                                    className="form-control"
                                    placeholder="chicken,onion,carrots"
                                    value={search}
                                    onChange={handleChange}
                                />
                                <div className="input-group-append">
                                    <button className="secondary-title btn rounded-right" type="submit">
                                        SEARCH
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Search;
