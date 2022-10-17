import React , {useState} from "react";
import '../music.css';
import searchIcon from './search.svg';
import axios from 'axios';
import ArtistCard from './ArtistCard';


const Music = () => {

    // fetching data
    // seacrh state 
    const [searchKey, setSearchKey] = useState("");

    //artist state
    const [artists, setArtists] =useState([]);
    const token=window.localStorage.getItem("token");
    // console.log("tokens are" ,token);

    //api
    const searchArtists = async (e) => {
        e.preventDefault();
        const data = await axios.get("https://api.spotify.com/v1/search",{
        headers: {
            Authorization: `Bearer ${token}`
        },
        params: {
            q: searchKey,
            type:"artist"
        }
        }
        )
        // .then(res => {
        //     const data = res.data;
        //     console.log(data);
        //     debugger
            
        //   })
        .catch(err => {
            if(err.response){
                console.log(err.response.data);
                console.log(err.response.status);
                console.log(err.response.headers);
            }
        });
        console.log(data);
        debugger
        setArtists(data.data.artists.items);
        

}
    // useEffect(()=> {
    //     searchArtists("");
    // },[]);
   

    return(
        <div className="app">
            <h1>Spotify </h1>
            
            <div className="search">
                <input
                 placeholder="Search for music"
                 value={searchKey}
                 onChange={(e)=>{setSearchKey(e.target.value)}}
                />
                <img 
                 src={searchIcon}
                 alt="search"
                 onClick={searchArtists}
                 />
            </div>
            
                {
                artists.length > 0 
                ? (
                    <div className="container">
                        {
                        artists.map((artist) =>
                        <ArtistCard artist={artist} />)
                        }
                    </div>
                )
                :
                (
                    <div className='empty'> 
                        <h2>No artists found</h2>
                    </div>
                )
                }

            </div>
             )
            
            {/* {
                artists?.length>0
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
}

export default Music