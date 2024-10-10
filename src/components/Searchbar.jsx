import React, { useState } from 'react';
import './css/Seachbar.css'; 


function Searchbar() {
    const [searchQuery, setSearchQuery] = useState('');

    const handleInputChange = (event) => {
        setSearchQuery(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        // Perform search functionality with searchQuery
        console.log('Search query:', searchQuery);
    }

  

    return (
        <div className='container px-5'>

                <form className="search-container form-inline" onSubmit={handleSubmit}>
                    <input 
                        
                        type="text" 
                        placeholder="Search..."
                        value={searchQuery}
                        onChange={handleInputChange}
                    />
                     <button className="" type="submit">
                     <i className="fa fa-search text-dark" aria-hidden="true"></i>
                     </button>
                </form>
        </div>
    );
}

export default Searchbar;
