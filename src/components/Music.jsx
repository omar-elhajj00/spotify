import React , {useEffect , useState} from "react";
import '../music.css';
import searchIcon from './search.svg';

const Music = () => {
    return(
        <div className="app">
            <h1>Spotify </h1>
            
            <div className="search">
                <input
                 placeholder="Search for music"
                 value=""
                 onChange={(e)=>{}}
                />
                <img 
                 src={searchIcon}
                 alt="search"
                 onClick={() =>{}}
                 />
            </div>

            {/* {
                movies?.length>0
                ? (
                    <div className="container">
                        {movies.map((movie)=> 
                        <MovieCard movie={movie}/>
                        )}
                    </div>
                ) : 
                (
                    <div className='empty'> 
                        <h2>No movies found</h2>
                    </div>
                )
            } */}
            

        </div>
    );
}

export default Music