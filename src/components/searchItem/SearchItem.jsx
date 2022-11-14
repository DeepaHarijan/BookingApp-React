import React from 'react'
import './searchItem.css'

function SearchItem() {
  return (
    <div className='searchItem'>
        <img src='https://assets-news.housing.com/news/wp-content/uploads/2022/02/10174015/False-ceiling-for-hall-Latest-designs-to-pick-from-10.jpg' className='siImg'></img>
        <div className='siDesc'>
        <h1 className="siTitle">Tower Street Apartments</h1>
        <span className="siDistance">500m from center</span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubtitle">
          Studio Apartment with Air conditioning
        </span>
        <span className="siFeatures">
          Entire studio • 1 bathroom • 21m² 1 full bed
        </span>
        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>  
        </div>
        <div className='siDetails'>
        <div className="siRating">
          <span>Excellent</span>
          <button>8.9</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">₹2500</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <button className="siCheckButton">See availability</button>
        </div>
        </div>
    </div>
  )
}

export default SearchItem