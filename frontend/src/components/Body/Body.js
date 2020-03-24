import React, { useState } from 'react'
import SpotifyWebApi from 'spotify-web-api-js'




function Body(props){

    return(
            <div className='containerBody'>

                <div className='page'>
                    {props.page}
                </div>
                <div>
                    teste
                </div>

            </div>
    )

}

export default Body