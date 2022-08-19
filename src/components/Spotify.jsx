import React from 'react'
// import styled from "styled-components";
import styled from "styled-components";
import { IoLibrary } from "react-icons/io5";
import { MdHomeFilled, MdSearch } from "react-icons/md";
import Body from './ Body';
import Footer from './Footer';
import Navbar from './Navbar';
import Playlists from './Playlists';
import Sidebar from './Sidebar';

function Spotify() {
    return (
        <Container>
            <div className="spotify__body">
                
                <Sidebar />
                {/* <Playlists /> */}
                <div className="body">
                    <Navbar />
                    <div className="body__contents">
                        <Body />
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
     .body{
         height: 100%;
         width: 100%;
         overflow: auto;
     }
 }
 }
`;

export default Spotify
