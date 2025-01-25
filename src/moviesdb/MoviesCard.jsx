import React from 'react'

export const MoviesCard = ({movie}) => {
  return (
    <div className='movie'>
        <div>
            <p>{movie.Year}</p>
        </div>
        <div>
            <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://placehold.co/300x450'} alt={movie.Title} />
        </div>
        <div>
            <span>{movie.Type}</span>
            <h3>{movie.Title}</h3>
            <p className="year">{movie.Year}</p>
        </div>
    </div>    
  )
}

export default MoviesCard