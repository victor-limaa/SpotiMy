import React from 'react'
import Header from '../components/Header/Header'
import Player from '../components/Player/Player'
import SpotifyWebApi from 'spotify-web-api-js'


function Perfil(props){

    const user = props.userAtributes
    const loggedin = props.loggedin
    const lastMusic = props.lastMusic

    const music = loggedin ? <div className='music'> <img src={lastMusic.image} />
                                    <div><p>{lastMusic.name}</p>
                                    <p>{lastMusic.artists}</p></div></div>
                                    : <div>Logue para visualizar ultima musica tocada!</div>

    return(
        <>
        <Header title='SpotiMy' userState={props.logged}/>
            <div className='containerBody'>
                <div className='page'>
                    Perfil
                </div>

                <div className='containerProfile'>
                    <img src={user.image} className='userImg'/>                    
                    <p className='userName'>{user.name}</p>
                    <p className='userEmail'>{user.email}</p>
                </div>
            </div>
        <Player music={music} />
        </>
    )
}

export default Perfil