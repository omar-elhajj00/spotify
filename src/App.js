import React , {useState ,useEffect} from "react";
import './App.css'


const App = () => {

    //To be able to use the API, the user needs to be authenticated with his Spotify Account.For that case we need to create a link which leads us to the Spotify Authentication/Login page.
    //client id 
    const CLIENT_ID="5110eccd3dfa4e0c90db3e4eb7002a96";
    //redirect url
    const REDIRECT_URI="http://localhost:3000";
    // auth
    const AUTH_ENDPOINT="https://accounts.spotify.com/authorize";
    //response type
    const RESPONSE_TYPE="token";

    //after the authentication 
    // A hash is passed to the URL which contains the access token which we need to authorize the API calls.
    // store the token in a state variable
    const [token , setToken]=useState("");





    // useEffect for token 
    useEffect(()=>{
        const hash =window.location.hash;
        let token = window.localStorage.getItem("token");

        // check if we have a hash or we already have a token saved in our localStorage
        if (!token && hash){
            token=hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1];

            window.location.hash = "";
            window.localStorage.setItem("token" , token);
        }
        // set token state variable.
        setToken(token);
    },[])


    //logout 
    // remove the token from the local storage and seet the state empty
    const logout = () => {
        setToken("");
            window.localStorage.removeItem(token);
    }


    //fetching data using axios

    return(
        <div className="App">
            <header className="App-header">
                {
                    !token ?
                    <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}> Login To SPOTIFY</a>
                    :
                    <button onClick={logout}>Logout</button> 
                }
                {/* A hash is passed to the URL which contains the access token which we need to authorize the API calls. */}
            </header>

            
           
        </div>
    );
}

export default App;

