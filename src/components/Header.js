import React from 'react'

const Header = props => {
  return (
    <div className="header-container clearfix">
      <header className="App-header">
        <h2 className="header-text unsel">{ props.text }</h2>
        <button data-testid="watchLaterButton" onClick={props.onToggle} className="button wl">
          {props.searchDisplayed ? "Watch Later" : "Back to Search"}
          {props.searchDisplayed && <i className="fas fa-star"></i>}
        </button>
      </header>
    </div>
  )
}

export default Header

/*
import React, { useState } from 'react'
import Modal from './Modal'

  const [ hiddenString, setHiddenString ] = useState(true)
  const [ showModal, setShowModal ] = useState(false)

{ !showModal&!hiddenString ? <Modal onToggle={()=> setShowModal(!showModal)} showModal={showModal}/>:null}
<p onClick={()=> setHiddenString(!hiddenString)} className="socks">
{hiddenString && '---> click here FIRST and enjoy <---'}</p>

*/