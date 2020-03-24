import React, {useState} from 'react'
import Header from '../components/Header/Header'
import Player from '../components/Player/Player'
import './commomStyle.css'


function Home(props){

    var playlistUser = props.playlistUser
    var recentlyPlayed = props.recentlyPlayed
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
            Início
        </div>
        <div className='block1'>
            {
                loggedin ?
                    playlistUser.map((item) => {
                        return (
                        <div className='playlist' id={item.id}>
                            <a href={item.external_urls}>
                            <img src={item.images[0].url} />
                            <p>{item.name}</p></a>
                        </div>)
                    })
                :<div>Logue para acessar</div>
            }
        </div>
        <div className='block2'>
        {
            loggedin ? 
                recentlyPlayed.map((item) => {
                    return(
                            <div className='recently'>
                                <a href={item.track.external_urls}>
                                    <img src={item.track.album.images[0].url} />
                                    <p>{item.track.name}</p>
                                </a>
                            </div>
                    )
                })
                
                : false
            }
        </div>

    </div>
    <Player music={music} />
    </>
   )
}

export default Home