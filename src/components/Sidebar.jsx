import React from 'react'
import styled from "styled-components";
import { IoLibrary } from "react-icons/io5";
import { MdHomeFilled, MdSearch } from "react-icons/md";
import Playlists from './Playlists';

function Sidebar() {
    return (
        <Container>

            <div className='logo'>
                <img src="Component.png" alt="" />

            </div>
            <div className="top__links">
                <ul>
                    <li>
                        <MdHomeFilled />
                        <span>Accueil</span>
                    </li>
                    <li>
                        <MdSearch />
                        <span>Recherche</span>
                    </li>
                    <li>
                        <IoLibrary />
                        <span>Bibliothèque</span>
                    </li>
                </ul>
            </div>
            <Playlists />
        </Container>
    )
}


const Container = styled.div`
 background-color: #2550E9;
 color: white;
 display: flex;
 flex-direction: column;
 justify-content: space-around;
 alignt-items: center;
 height: 100%;
 width: 100%;
 .logo {
     margin-left: 20px;
     margin-top: 20px;
     margin-bottom: 8px;
     width: 100px;
 }
 .top__links {
     display: flex;
     flex-direction: column;
     margin-top: 10px;
     margin-bottom: 18px;
     ul {
         list-style-type: none;
         display: flex;
         flex-direction: column;
         gap: 1rem;
         padding: 1rem;
         li {
             display: flex;
             gap: 1rem;
             cursor: pointer;
             transition: 0.3s ease-in-out;
             &:hover {
                 color: white;
             }
         }
     }
 }
`

export default Sidebar
