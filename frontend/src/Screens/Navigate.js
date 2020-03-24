import React from 'react'
import Header from '../components/Header/Header'
import Player from '../components/Player/Player'



function Navigate(props){

    const categories = props.categories
    const lastMusic = props.lastMusic

    const music = props.loggedin ? <div className='music'> <img src={lastMusic.image} />
                                    <div><p>{lastMusic.name}</p>
                                    <p>{lastMusic.artists}</p></div></div>
                                    : <div>Logue para visualizar ultima musica tocada!</div>


    const loggedin = props.loggedin
    
   return(
    <>
    <Header title='SpotiMy' userState={props.logged}/>
    <div className='containerBody'>

                <div className='page'>
                    Navegar
                </div>
                <div className='containerCat'>
                    {
                        loggedin ? 
                            categories.map((item)=>{
                                return(
                                    <div className='category'>
                                        <a href={item.href}>
                                        <img src={item.icons[0].url} />
                                        <p>{item.name}</p>
                                        Clique para acessar!</a>
                                    </div>
                                )
                            }) : <div>  Logue para acessar categorias! </div>
                    }
                    
                </div>

            </div>
        <Player music={music} />
    </>
   )
}

export default Navigate