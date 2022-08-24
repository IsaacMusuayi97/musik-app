import React, { useEffect, useState } from 'react'
import Login from './components/Login'
import Spotify from './components/Spotify';
import { dataContext } from './utils/context';
import SpotifyWebApi from 'spotify-web-api-js';
import { Routes, Route, Navigate } from 'react-router-dom';

function App() {
  const [token, setToken] = useState(""),
    [user, setUser] = useState({}),
    [uriPlayer, setUriPlayer] = useState(""),
    spotify = new SpotifyWebApi()

  useEffect(() => {
    const hash = window.location.hash;

    if (hash) {
      const token = hash.substring(1).split("&")[0].split("=")[1];
      console.log("setToken", token)
      // let token = "BQCEHSf9E5c6YTmFxS22xNIJwEN5X1XGuuwbA5O5AOl7Mx6dUI0iL593QwY6IUpW1R2IWglNT-dpJkZr8wnY6xA4I63ThXBQFvlnWjaWV1A7myVDytbRHR9jM3iEV5CyU0_4_OOH7Lo3zvMPPh7n9qIIjPj1girPHUnSmfTTQRAZJfp2GTpwwPJ-IHeXtHl39bB2JO3Rm1iJAMCb0njDvCswM5LmxsDFfDQPuQ80aweM1CDgzcvzUt0C01KKMCKO95km_V9c1BI0kxmUw2DA6w7Ed-Vf1lQMbAWrfdl_s-dwfZ-IeBoEStVJTK4GHyrIH0tCHXPTPW1sYKmbKsQ"
      setToken(token)

      spotify.setAccessToken(token)
      spotify.getMe()
        .then((data) => {
          let userData = {
            name: data.display_name,
            email: data.email,
            image: data.images.length !== 0 ? data.images[0].url : null,
            follower: data.followers.total
          }

          setUser(userData)
          window.localStorage.setItem('user', userData);
        })
        .catch((error) => { console.error(error) })
      window.localStorage.setItem("token", token)

      window.location.hash = ""
    }
  }, []);
  console.log("token", token);
  return (
    <dataContext.Provider value={{ token, setToken, user, setUser,spotify,  uriPlayer, setUriPlayer }}>
      <div>
        <Routes>
          <Route path='/' element={token ? <Spotify /> : <Login />} />
        </Routes>
      </div>
    </dataContext.Provider>
  )
}

export default App
