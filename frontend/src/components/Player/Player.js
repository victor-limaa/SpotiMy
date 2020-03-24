import React from 'react'
import './player.css'

function Player(props){


    return(
        <div className='container'>
        <div className='divPlayer'>
            {props.music}
        </div>
        </div>
    )

}

export default Player