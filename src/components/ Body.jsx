import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import '../Body.css';
import { dataContext } from '../utils/context';


function Body({ headerBackground, songs }) {
    const globalData = useContext(dataContext)

    function handleClick (uri) {
        globalData.setUriPlayer(uri)
    } 
   
    return (
        <div >
            
            <h1 className='title'> Ecoutés récemment</h1>
            <div className='container--parent'>  
            {

                songs.map((element) => [

                    // console.log(element)
                    <div className='container'>

                        <div className='container-image'>
                            <img src={element.album.images[1].url} className='image' />

                        </div>

                        <p className='name'>{element.name}</p>

                       <button className='play--btn' onClick={() => {
                           handleClick(element.uri)
                       }}>Play</button>
                    // </div>


                ])
            }
            </div>

        </div>

    );
}

const Container = styled.div`


.container{
    height: 200px;
    width: 200px;
    background: #D9D9D9;
    margin: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-item: center;
}
.image {
    margin-top: 10px;
    height: 90px;
    width: 9Opx;
    background: red;
    background-color: green;
    border-radius: 50%;
}
.name{
    color: red;
}


}
`;
export default Body
