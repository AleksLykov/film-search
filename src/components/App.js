import React, { useState } from 'react'

import Header from "./Header"
import MoviesSearch from "./MoviesSearch"
import WatchLater from "./WatchLater"

import '../styles/normalize.css'
import '../styles/App.css'
import '../styles/all.min.css'


const App = () => {
  const [ searchDisplayed, setSearchDisplayed ] = useState(true);

  return (
    <div className="App">
      <Header text="FILM SEARCH" onToggle={() => setSearchDisplayed(!searchDisplayed)} searchDisplayed={searchDisplayed} />
      {!searchDisplayed ? <WatchLater /> : <MoviesSearch />}
    </div>
  )
}

export default App;
