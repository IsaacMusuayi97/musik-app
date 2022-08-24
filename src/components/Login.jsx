import React from 'react'
import './Login.css';


function Login() {
    const handleClick = () => {
        const clientId = "f950d0fa8f89439eb70580ddfda6d4b5"
        // const redirectUrl = "http://https://musik-app.vercel.app/"
        const redirectUrl = "http://localhost:3000/"
        const apiUrl = "https://accounts.spotify.com/authorize"
        const scope = [
            "user-read-email",
            "user-read-private",
            "user-modify-playback-state",
            "user-read-playback-state",
            "user-read-currently-playing",
            "user-read-recently-played",
            "user-read-playback-position",
            "user-top-read",
        ];
        window.location.href = `${apiUrl}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scope.join(
            " "
        )}&response_type=token&show_daialog=true`;
    };


    return (
        <div className='login'>

            <div className="logo">
                <img className='music_img' src="Music_Tune.png" alt="" />
                <h1 className='text'>Musik</h1>
            </div>
            <div className="connexion_btn">
                <button onClick={handleClick}>Connexion</button>
            </div>
        </div>
    )
}

export default Login
