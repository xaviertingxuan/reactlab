import React, {useState} from 'react'

export const SearchBar = ({onSearch}) => {
    
    const [searchTerm, setSearchTerm] = useState('')

    const handleInputChange = (e) => {
        const newValue = e.target.value
        setSearchTerm(newValue)
        onSearch(newValue) // Trigger search on every input change
    }
    const handleSearch = () => {
        onSearch(searchTerm)
    };
    const handleKeyPress = (e) =>{
        if (e.key === 'Enter') {
            handleSearch()
        }
    }


  return (
    <div className='search-bar'>
        <input 
                type='text' 
                value={searchTerm} 
                placeholder="Search tasks..." 
                onKeyDown={handleKeyPress} 
                onChange={handleInputChange} 
            />
        <button className='search-button' onClick={handleSearch} >Search</button>
    </div>
  )
}
