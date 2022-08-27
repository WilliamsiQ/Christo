import React from 'react';

const Searchbox = ({searchField, searchChange})=> {
    return (
        <div className='pa2'>
            <input 
                className='pa3 ba b--violet bg-lightest-purple'
                type='search' 
                placeholder='search frischs'
                onChange = {searchChange} 
            />
        </div>
    )
}

export default Searchbox;