import React, { useContext, useEffect, useState } from 'react'
import SpotifyWebApi from 'spotify-web-api-js';
import styled from "styled-components";
import Body from './ Body';
import Footer from './Footer';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import {dataContext} from '../utils/context'

function Spotify() {
 const [navBackground, setNavBackground] = useState(false);
 const [headerBackground, setHeaderBackground] = useState(false);
 const [songs, setSongs] = useState([]);
 const globalData = useContext(dataContext);
 const spotify = new SpotifyWebApi();
//  const bodyScrolled = () => {
//      bodyRef.current.scrollTop >= 30 
//      ? setNavBackground(true)
//       : setNavBackground(false);
//       bodyRef.current.scrollTop >= 268
//       ? setHeaderBackground(true)
//       : setHeaderBackground(false)
//  };

 useEffect(() => {
    spotify.setAccessToken(globalData.token)
    spotify.getMyTopTracks({})
    .then((data)=> {
       setSongs(data.items)
    })
    .catch((error)=>{console.error(error)})
 }, []);
    return (
        <Container>
            <div className="spotify__body">
                
                <Sidebar />
                {/* <Playlists /> */}
                <div className="body" >
                    <Navbar navBackground={navBackground}/>
                    <div className="body__contents">
                        <Body headerBackground={headerBackground} songs={songs}/>
                    </div>
                </div>
            </div>
            <div className="spotify__footer">
                <Footer />
            </div>
        </Container>
    )
}

const Container = styled.div`
 max-width: 100vw;
 max-height: 100vh;
 overflow: hidden;
 display: grid;
 grid-template-rows: 85vh 15vw ;
 .spotify__body {
     display: grid;
     grid-template-columns: 15vw 85vw;
     height: 100%;
     width: 100%;
     background-color: black;
     color: white;
     .body{
         height: 100%;
         width: 100%;
         overflow: auto;
     }
 }
 }
`;

export default Spotify
