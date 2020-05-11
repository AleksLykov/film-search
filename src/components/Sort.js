import React from 'react'

const Sort = props => {
  const callSortFunction = e => {
    props.sort(e.target.value)
  }

  return (
    <div data-testid="sortBar" className="sortbar unsel">
      <span>sort by:</span>
      <button data-testid="popbtn" className="button sortbtn" onClick={ callSortFunction } value='popularity'>popularity</button>
      <button data-testid="votebtn" className="button sortbtn" onClick={ callSortFunction } value='vote_count'>votes</button>
      <button data-testid="relbtn" className="button sortbtn" onClick={ callSortFunction } value='release_date'>release</button>
    </div>
  )
}

export default Sort