import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import { FaSearch } from "react-icons/fa"
import { CgProfile } from "react-icons/cg"
import { dataContext } from '../utils/context'
import '../Body.css';

function Navbar({ navBackground }) {
    const globalData = useContext(dataContext)
    const [search, setSearch] = useState('')
    const [artists, setArtists] = useState([])
    function handleClick() {
        window.localStorage.clear()
        globalData.setToken("")
        globalData.setUser({})
    }

    useEffect(() => {
        // console.log(globalData)
        globalData.spotify.search(search, ['track']).then(data => {
            const {items, limit} = data;
            console.log(items);
            setArtists(data);
        })
            .catch(err => {
                console.log(err);
            })
    }, [search])
    return (
        
        <>
            <Container navBackground={navBackground}>
                <div className="search__bar">
                    <FaSearch />
                    <input value={search} onChange={e => setSearch(e.target.value)} type="text" placeholder="Artists, song, or podcasts" />
                </div>
                <div className="avatar">
                    <button onClick={handleClick}>
                        <CgProfile />
                        <span>{globalData.user.name}</span>
                    </button>
                </div>
            </Container>
            <div className='containerDisplay'>

                {/* {tracks.length > 0 && artists.map((track) => <>

                <p>{track.name}</p>
               
                
                    
                <img className='imageDisplay' src={track.images && track.images.length !== 0 ? track.images[0].url : ''} alt="" />
                    
                </>)} */}
            </div>
        </>
    )
}


const Container = styled.div`
.containerDisplay {
    height: 100px;
    width: 100px;
}
.imageDisplay {
    width: 100px;
}
display: flex;
justify-content: space-between;
align-items: center;
padding: 2rem;
height: 15vh;
position: sticky;
top: 0;
transition: 0.3s ease-in-out;
background-color: ${({ navBackground }) => navBackground ? "rgba(0,0,0,0.7)" : "none"};
.search__bar {
    background-color: white;
    width: 30%;
    padding: 0.4rem 1rem;
    border-radius: 2rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    input {
        border: none;
        height: 2rem;
        width: 100%;
        &:focus {
        outline: none;
        }
    }
}
.avatar {
    background-color: black;
    padding: 0.3rem 0.4rem;
    padding-right: 1rem;
    border-radius: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    a {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.5rem;
        text-decoration: none;
        color: white;
        font-weight: bold;
        svg {
            font-size: 1.3rem;
            background-color: #282828;
            padding: 0.2rem;
            border-radius: 1rem;
            color: #c7c5c5;
        }
    }
}

`;

export default Navbar
