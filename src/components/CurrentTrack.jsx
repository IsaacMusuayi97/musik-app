import styled from "styled-components";
import React, {useEffect} from 'react'
import { useStateProvider } from "../utils/StateProvider";
import axios from "axios";
import { reducerCases } from "../utils/Constants";

function CurrentTrack() {
    const [{ token, currentlyPlaying }, dispatch] = useStateProvider();
    useEffect(() => {
        const getCurrentTrack = async () => {
            const response =  await axios.get(
                "https://api.spotify.com/v1/me/player/currently-playing", {
                    headers: {
                        Authorization: "Bearer " + token,
                        "Content-Type": "application/json",
                    },
                }
            );
   if (response.data !== "") {
       const { item } = response.data;
       const currentlyPlaying = {
           id: item.id,
           name: item.name,
           artists: item.artists.map((artists) => artists.name),
           image: item.album.images[2].url,
       };
       dispatch({ type: reducerCases.SET_PLAYING, currentlyPlaying });
   }
        };
        getCurrentTrack();
    }, [token, dispatch]);
  return (
    <Container>
       {
           currentlyPlaying && (
               <div className="track">
                   <div className="track__image">
                       <img src={currentlyPlaying.image} alt="" />
                   </div>
                   <div className="track__info">
                     <h4>{currentlyPlaying.name}</h4>
                     <h5>{currentlyPlaying.artists.join(",")}</h5>  
                   </div>
               </div>
           )
       }
    </Container>
  )
}


const Container = styled.div``;

export default CurrentTrack
