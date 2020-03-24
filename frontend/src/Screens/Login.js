import React, {useState} from 'react'
import Header from '../components/Header/Header'
import Player from '../components/Player/Player'
import Body from '../components/Body/Body'
import SpotifyWebApi from 'spotify-web-api-js'



function Login(props){


   return(
    <>
    <Header title='SpotiMy' userState={props.logged}/>
        <div className='containerBody'>

            <div className='page'>
                Entrar
            </div>
            <div className='contBtn'>
                <a href='http://localhost:8888/login'>
                    <button className='loginButton'>Entrar com Spotify</button>
                </a>
            </div>

        </div>
    </>
   )
}

export default Login