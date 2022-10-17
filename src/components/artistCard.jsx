import React from "react";
import '../music.css';

const ArtistCard = ({artist}) => {
    return(
        <div className="music">
            <div>
                <p>{artist.followers}</p>
            </div>
            <div  key={artist.id}>
                {/* <img src={artist.images[0].url} alt="" /> */}
            </div>
            <div>
                <span>{artist.name}</span>
                <h3>{artist.popularity}</h3>
            </div>


        </div>
    )
}

export default ArtistCard;