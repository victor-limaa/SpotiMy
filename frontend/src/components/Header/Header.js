import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import SpotifyWebApi from 'spotify-web-api-js'
import './style.css'

function Header(props){
    
    return(
    <>
    <header>
        <div>
            {props.title}
        </div>
        <div>
            <ul>
                <li><Link className='Link' to='/'>Início</Link></li>
                <li><Link className='Link' to='/navegar'>Navegar</Link></li>
                <li>{props.userState}</li>
            </ul>

        </div>
    </header>
    </>
    )
}

export default Header