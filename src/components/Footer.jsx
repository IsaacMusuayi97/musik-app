import React, { useContext, useEffect, useState } from 'react'
import styled from "styled-components";
import SpotifyPlayer from 'react-spotify-web-playback';
import { dataContext } from '../utils/context';

function Footer() {
  const globalData = useContext( dataContext),
        [play, setPlay] = useState(false)

  useEffect(()=> {
    setPlay(true)
  }, [globalData.uriPlayer])
  return (
      <SpotifyPlayer
        token= {globalData.token}
        uris={[globalData.uriPlayer]}
        play={play}
        autoPlay={true}
        showSaveIcon={true}
        name="Musik Application"
        initialVolume={0.5}
        callback = {(state) => !state.isPlaying ? setPlay(false) : null}
      />
  )
}

const Container = styled.div`
background-color: #181818;
height: 100%;
width: 100%;
border-top: 1px solid #282828;
display: grid;
grid-template-columns: 1fr 2fr 1fr;
align-items: center;
justify-content: center;
padding: 0 1rem;
`
export default Footer
