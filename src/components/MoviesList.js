import React, {useEffect, useState, useContext} from 'react'
// import axios from 'axios';

import { searchContext } from '../App';
import x from '../SampleData';
import './styles/list-styles.css';


import { useNavigate } from 'react-router-dom';

function MoviesList() {
  const { search } = useContext(searchContext)
  const [fetchedData, setFetchedData] = useState(x);
  const [genres, setGenres] = useState(() => {
    //from fetchedData variable
    const noOfGenres = x.genres.length;
    const finalList = []
    for (let i = 0; i < noOfGenres; i++){
      const singleGenre = {title:x.genres[i]};
      const data = x.movies.filter((val) => {
        return  val.genres.includes(singleGenre.title)
      })
      singleGenre.movies = data;
      finalList.push(singleGenre); 
    }
    return finalList;
  });
  const navigate = useNavigate();

  useEffect( () => {
    setFetchedData(((prev) => {
      if (search) {
        
        const filters = x.movies.filter((val) => {
          return val.title.includes(search)
        });
       
        return {...prev,movies:filters};
      }
      else return x;
   }))
  }, [search])
  
  useEffect(() => {
    setGenres(() => {
      const noOfGenres = fetchedData.genres.length;
    const finalList = []
    for (let i = 0; i < noOfGenres; i++){
      const singleGenre = {title:fetchedData.genres[i]};
      const data = fetchedData.movies.filter((val) => {
        return  val.genres.includes(singleGenre.title)
      })
      singleGenre.movies = data;
     
      finalList.push(singleGenre); 
    }
    return finalList;
    })
  },[fetchedData])

  return (
    <div className='genres'>
   
      {
        genres.length !== 0 ?
          genres.map((genre,index)=>{
            return (
              <div className='genre' key={index}>
                <h2>{genre.title}</h2>
                <ul className="movies">
                    {genre.length!==0 ?genre.movies.map(movie => (
                      <li key={ movie.id } style={{cursor:'pointer'}} onClick={()=> navigate('/demo/movie-details', { state: { movie } })}>
                        <div className="movie">
                          <figure>
                            <img alt='movie pic' src={`${movie?.posterUrl}`} />
                            <figcaption>
                              <h2 className="movie__title">{movie?.title}</h2>
                            </figcaption>
                          </figure>
                        </div>
                      </li>
                    )):<div> no movies available with the search of <strong> {search}</strong></div>}
                  </ul>
              </div>
            )
          }):`no movies available`

}
      
    
      </div>
  )
}

export default MoviesList