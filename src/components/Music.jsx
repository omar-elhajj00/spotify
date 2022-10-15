import React , {useEffect , useState} from "react";
import '../music.css';
import searchIcon from './search.svg';
import axios from 'axios';


const Music = () => {

    // fetching data
    // seacrh state 
    const [searchKey, setSearchKey] = useState("");

    //artist state
    const [artists, setArtists] =useState([]);
    const token=window.localStorage.getItem("token");
    console.log("tokens are" ,token);

    //api
    const searchArtists = async (e) => {
        e.preventDefault();
        const {data} = await axios.get("https://api.spotify.com/v1/search",{
        headers: {
            Authorization: `Bearer ${token}`
        },
        params: {
            q: searchKey,
            type:"artist"
        }}
        
        )
        console.log(data);
    
}
   

    return(
        <div className="app">
            <h1>Spotify </h1>
            
            <div className="search">
                <input
                 placeholder="Search for music"
                 value=""
                 onChange={(e)=>{setSearchKey(e.target.value)}}
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