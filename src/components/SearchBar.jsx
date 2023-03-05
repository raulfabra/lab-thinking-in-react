import { useState } from "react";

function SearchBar({searchProducts}) {
    const [search, setSearch] = useState("");


    const searchHandler = (e) => {
        setSearch(e.target.value)
        searchProducts(e.target.value)

    }


    return (
        <div className="w-50 mx-auto">
            <div className="mb-3">
                <label htmlFor="Input1" className="form-label">Search</label>
                <input type="text" className="form-control" id="Input1" placeholder="Search here..." value={search} onChange={searchHandler}/>
            </div>
            <div className="form-check mb-3">
                <input className="me-3" type="checkbox" value="" id="flexCheckDefault" />
                <label className="form-check-label" htmlFor="flexCheckDefault">Only show products in stock</label>
            </div>
        </div>
    )
}

export default SearchBar;


