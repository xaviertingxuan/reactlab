import React, { useEffect, useState } from 'react'
import './Movies.css'
import SearchIcon from './search.svg'
import { MoviesCard } from './MoviesCard'

// "15186958" api key
// http://www.omdbapi.com/?i=tt3896198&apikey=15186958

const API_URL = 'https://www.omdbapi.com/?apikey=15186958'



export const Movies = () => {

    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [isDarkMode, setIsDarkMode] = useState(true);
    const [typeFilter, setTypeFilter] = useState('');
    const [ratingFilter, setRatingFilter] = useState('');
    const [currentPage, setCurrentPage] = useState(1);

    const searchMovies = async (title) => {
        let url = `${API_URL}&s=${title || 'new'}&page=${currentPage}`;
        if (typeFilter) url += `&type=${typeFilter}`;
        const response = await fetch(url);
        const data = await response.json();
        
        if (data.Search) {
            if (ratingFilter) {
                const detailedMovies = await Promise.all(
                    data.Search.map(async (movie) => {
                        const detailResponse = await fetch(`${API_URL}&i=${movie.imdbID}`);
                        return detailResponse.json();
                    })
                );
                const filteredMovies = detailedMovies.filter(movie => 
                    parseFloat(movie.imdbRating) >= parseFloat(ratingFilter)
                );
                setMovies(filteredMovies.sort((a, b) => parseInt(b.Year) - parseInt(a.Year)));
            } else {
                setMovies(data.Search.sort((a, b) => parseInt(b.Year) - parseInt(a.Year)));
            }
        } else {
            setMovies([]);
        }
    }

    useEffect(() => {
        searchMovies('2024');
    }, []);


  return (
    <>
        <div className={`app ${isDarkMode ? 'dark' : 'light'}`}>
                <div className="theme-toggle">
                    <button onClick={() => setIsDarkMode(!isDarkMode)}>
                        {isDarkMode ? '☀️' : '🌙'}
                    </button>
                </div>
        
            <h1>Movieland</h1>

            <div className='search'>
                <input 
                className='search' 
                placeholder='Search for shows' 
                value={searchTerm} 
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        searchMovies(searchTerm);
                    }}}
                />
                <select 
                    className='type-filter'
                    value={typeFilter}
                    onChange={(e) => {
                        setTypeFilter(e.target.value);
                        if (searchTerm) searchMovies(searchTerm);
                    }}
                >
                    <option value="">All Types</option>
                    <option value="movie">Movies</option>
                    <option value="series">Series</option>
                    <option value="episode">Episodes</option>
                </select>
                <select 
                    className='rating-filter'
                    value={ratingFilter}
                    onChange={(e) => {
                        setRatingFilter(e.target.value);
                        if (searchTerm) searchMovies(searchTerm);
                    }}
                >
                    <option value="">All Ratings</option>
                    <option value="9">9+</option>
                    <option value="8">8+</option>
                    <option value="7">7+</option>
                    <option value="6">6+</option>
                    <option value="5">5+</option>
                </select>
                <img src={SearchIcon} alt="search" 
                    onClick={() => {searchMovies(searchTerm)}} />
            </div>

            {
                movies?.length > 0 ? (
                    <>
                        <div className='container'>
                            {movies.map((movie) => (
                                <MoviesCard key={movie.imdbID} movie={movie} />
                            ))}
                        </div>
                        <div className="pagination">
                            {[1, 2, 3].map((page) => (
                                <button
                                    key={page}
                                    className={`page-btn ${currentPage === page ? 'active' : ''}`}
                                    onClick={() => {
                                        setCurrentPage(page);
                                        searchMovies(searchTerm);
                                    }}
                                >
                                    {page}
                                </button>
                            ))}
                        </div>
                    </>
                ) : (
                    <div className='empty'>
                        <h2>No movies found</h2>
                    </div>
                )          
            }

        </div>

    </>    
  )
}
