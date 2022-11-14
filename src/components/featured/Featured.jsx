import React from 'react'
import './featured.css'

const Featured = () => {
  return (
    <div className='featured'>
       
       
        <div className='featuredItem'>

            <div className='featuredImgContainer'><img className='featuredImg' src='https://media.istockphoto.com/photos/dublins-grafton-street-picture-id527902804?k=20&m=527902804&s=612x612&w=0&h=ilIwyBy_EultTea8vHIjqoVlRENZIg8ncNAVfwyPr_8='></img></div>
            <div className='featuredTitles'>
                <h1>Dublin</h1>
                <h2>123 properties</h2>
            </div>
        </div>


        <div className='featuredItem'>
        <div className='featuredImgContainer'> <img className='featuredImg' src='https://media.istockphoto.com/photos/reno-skyline-at-night-picture-id1190512821?k=20&m=1190512821&s=612x612&w=0&h=O-LjSOybINkim09EJGVBN4qfItaIW7iuCMzXUYnmWHg='></img></div>
            <div className='featuredTitles'>
                <h1>Reno</h1>
                <h2>423 properties</h2>
            </div>
        </div>


        <div className='featuredItem'>
        <div className='featuredImgContainer'> <img className='featuredImg' src='https://media.istockphoto.com/photos/austin-texas-downtown-aerial-picture-id1332014496?b=1&k=20&m=1332014496&s=170667a&w=0&h=XHAYjpwEMERpzen5KUeZ_D0lMiRnfD7v7d_gmbG_XM4='></img></div>
            <div className='featuredTitles'>
                <h1>Austin</h1>
                <h2>879 properties</h2>
            </div>
        </div>

        
    </div>
  )
}

export default Featured