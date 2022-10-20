import React from "react";
import '../music.css';

const ArtistCard = ({artist}) => {
    return(
        <div className="music">                        
            <div>
                <span>{artist.name}</span>
            </div>
            <div  key={artist.id}>
                {artist.images.length ? <img src={artist.images[0].url} alt=""/> : <div>No Image</div>}
            </div>
            <div>
                <span>Popularity: {artist.popularity}</span>
                <h3>Followers :{artist.followers.total}</h3>
            </div>
        </div>
    )
}

export default ArtistCard;