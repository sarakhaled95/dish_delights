import React, { Component } from 'react';

export default class Search extends Component {
    render() {
        const { handleChange, handleSubmit, search } = this.props
        return (
            <>
                <div className="headrecipe"></div>
            <div className="container2">
                <div className="row5">
                        <div className="col max-auto text-center">
                            <form className="mt-4">
                                <label htmlFor="search" className="secondary-title">search for recipes</label>
                                <div className="input-group">
                                    <input type="text" name="search" className="form-control" placeholder="chicken,onion,carrots"
                                        value={search} onChange={handleChange} />
                                    <div className="input-group-append">
                                        <button className="secondary-title btn rounded-right" type="submit" onClick={handleSubmit}>
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
    }
}