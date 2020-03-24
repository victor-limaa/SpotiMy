import React, {useState} from 'react';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import Home from './Screens/Home'
import Navigate from './Screens/Navigate'
import Login from './Screens/Login'
import Perfil from './Screens/Perfil'
import SpotifyWebApi from 'spotify-web-api-js'

function App() {

  //initialize Spotify API and get Hash Params and Access Token
  const spotifyApi = new SpotifyWebApi()
  const params = getHashParams()

  
  if(params.access_token){
      spotifyApi.setAccessToken(params.access_token)
  }
  
  function getHashParams() {
      var hashParams = {};
      var e, r = /([^&;=]+)=?([^&;]*)/g,
      q = window.location.hash.substring(1);
      while ( e = r.exec(q)) {
          hashParams[e[1]] = decodeURIComponent(e[2]);
      }
      return hashParams;
  }

  //Get user Loggedin and yours attributes to print in Screen "Perfil"
  const [loggedin, setLoggedin] = useState(params.access_token ? true : false)

  const userAtr = {
    image: '',
    name: '',
    email: ''
  }

  spotifyApi.getMe().then((data) => {
    userAtr.image = data.images[0].url
    userAtr.name = data.display_name
    userAtr.email = data.email
  })


//Get Spotify Categories
  const categories = []

  spotifyApi.getCategories().then((data) => {
    data.categories.items.map((item) => {
      categories.push(item)
    })
  })

//Get Spotify Playlists
const playlistUser = []

spotifyApi.getUserPlaylists().then((data) => {
  data.items.map((item) => {
    playlistUser.push(item)
  })
})

//Get Spotify Recently Played Track
const recentlyPlayed = []

spotifyApi.getMyRecentlyPlayedTracks().then((data) => {
  data.items.map(item => recentlyPlayed.push(item))
})

//Get Last Music Played
var musicPlayed = {
  image: '',
  name: '',
  artists: ''
}

spotifyApi.getMyCurrentPlaybackState().then((data) => {
  musicPlayed.image = data.item.album.images[0].url
  musicPlayed.name = data.item.name
  musicPlayed.artists = data.item.artists[0].name
})



  return (
    <Router>
      <div>
        <Switch>

          <Route path="/navegar">
            <Navigate 
            categories={categories}
            loggedin={loggedin}
            lastMusic={musicPlayed}
            logged={loggedin ? <Link className='Link' to='/perfil'>Perfil</Link> : 
            <Link className='Link' to='/login'>Entrar</Link>} />
          </Route>

          <Route path="/login">
            <Login 
            loggedin={loggedin}
            logged={loggedin ? <Link className='Link' to='/perfil'>Perfil</Link> : 
            <Link className='Link' to='/login'>Entrar</Link>}/>
          </Route>

          <Route path="/perfil">
            <Perfil 
            loggedin={loggedin}
            userAtributes={userAtr}
            lastMusic={musicPlayed}
            logged={loggedin ? <Link className='Link' to='/perfil'>Perfil</Link> : 
            <Link className='Link' to='/login'>Entrar</Link>}/>
          </Route>

          <Route path="/">
            <Home 
            playlistUser={playlistUser}
            recentlyPlayed={recentlyPlayed}
            loggedin = {loggedin}
            lastMusic={musicPlayed}
            logged={loggedin ? <Link className='Link' to='/perfil'>Perfil</Link> : 
            <Link className='Link' to='/login'>Entrar</Link>}/>
          </Route>

        </Switch>
      </div>
    </Router>
  );

}
export default App;
