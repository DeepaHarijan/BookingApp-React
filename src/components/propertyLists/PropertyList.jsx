import React from 'react'
import './propertyList.css';

function PropertyList() {
  return (
    <div className='propertyList'>
        <div className='pList'>
            <div className='pListItem'>
                <img src='https://media.istockphoto.com/photos/luxury-resort-picture-id104731717?k=20&m=104731717&s=612x612&w=0&h=40INtJRzhmU1O4Rj24zdY8vj4aGsWpPaEfojaVQ8xBo=' className='pListImg'></img>
                <div className='pListTitle'>
                    <h1>Hotels</h1>
                    <h2>2331 hotels</h2>
                </div>
            </div>

            <div className='pListItem'>
                <img src='https://media.istockphoto.com/photos/luxurious-villa-with-pool-picture-id506903162?b=1&k=20&m=506903162&s=612x612&w=0&h=Ur4Yb2eFL-LxW9b4pAzhCL9o_iZLZ2naMyGRZexwUsQ=' className='pListImg'></img>
                <div className='pListTitle'>
                    <h1>Villas</h1>
                    <h2>2331 hotels</h2>
                </div>
            </div>

            <div className='pListItem'>
                <img src='https://img.freepik.com/free-photo/lake-o-hara-yoho-national-park-with-waterfront-carbin_649448-2559.jpg' className='pListImg'></img>
                <div className='pListTitle'>
                    <h1>Cabins</h1>
                    <h2>2331 hotels</h2>
                </div>
            </div>


            <div className='pListItem'>
                <img src='https://media.istockphoto.com/photos/tropical-resort-picture-id536048545?k=20&m=536048545&s=612x612&w=0&h=tb_YEVpSL5DZCnrX7kPGswl8vHJNsx5bhykCBicBvh8=' className='pListImg'></img>
                <div className='pListTitle'>
                    <h1>Resorts</h1>
                    <h2>2331 hotels</h2>
                </div>
            </div>


            <div className='pListItem'>
                <img src='https://img.freepik.com/free-photo/lake-o-hara-yoho-national-park-with-waterfront-carbin_649448-2559.jpg' className='pListImg'></img>
                <div className='pListTitle'>
                    <h1>Apartments</h1>
                    <h2>2331 hotels</h2>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PropertyList