import React from 'react'

const Everything = () => {
  return (
    <div>
       <div className="search-bar-container">
        <input type="search" placeholder="Search Products" className="search-input" />
        <button className="search-btn">
          <span>&gt;</span>
        </button>
      </div>
      <div>
      <h1>Filter By Price</h1>
      <input class="range-slider" type="range" min="0" max="100" value="50"/>
      <p id="range-value">Value: 50</p>
      </div>
    </div>
  )
}

export default Everything