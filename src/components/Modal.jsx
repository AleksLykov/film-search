import React from 'react'
import poster from '../img/socks.jpg'

const socks = 'https://alekslykov.ru/media/socks.mov'

const Modal = props => {
  return (
    <div className="modal-main">
      <button className="button modalbtn" onClick={props.onToggle} placeholder='close modal'>x</button>
      <video width="95%" controls preload="none" title="Socks" poster={poster}>
        <source src={ socks } type="video/mp4"/></video>
    </div>
  )
}
export default Modal