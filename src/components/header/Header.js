import { faCalendarDays } from '@fortawesome/free-regular-svg-icons'
import { faBed, faCar, faPerson, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import './header.css'
import {DateRange} from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import {format} from "date-fns";
import { type } from '@testing-library/user-event/dist/type'
import { Navigate, useNavigate } from 'react-router-dom'

function Header  ({type}){
    //  ************FOR CALENDAR******************
    const[openDate, setOpendate]= useState(false)
    const [date,setDate]= useState([
        {
            startDate:new Date(),
            endDate: new Date(),
            key:'selection'
        }
    ]);

    //  ************FOR CALENDAR******************




    //  ************FOR ADULT CHILDREN ROOM TAB******************
    const [destination, setDestination] = useState("")       
    const[openOptions,setOpenOptions]= useState(false);
    const[options, setOptions] = useState({
        adults:1,
        children:0,
        room:1
    });
    
    
    const handleOption =(nameACR,operation)=>{
          setOptions(prev=>{return {
            ...prev,[nameACR]:operation === "i"? options[nameACR]+1 : options[nameACR]-1
          }})
    }

    //  ************FOR ADULT CHILDREN ROOM TAB******************

    const navigate = useNavigate();
    const handleSearch = () =>{
      navigate("/hotels", {state:{destination,date,options}})
    }

  return (
<div className='header'>

     <div className={type==="list" ? "headerContainer listMode" : 'header__Container' }>
      <div className='headerList'>
        <div className='headerListItem active'>
        <FontAwesomeIcon icon={faBed} />
        <span>Stays</span>
        </div>

        <div className='headerListItem'>
        <FontAwesomeIcon icon={faPlane} />
        <span>Flights</span>
        </div>


        <div className='headerListItem'>
        <FontAwesomeIcon icon={faCar} />
        <span>Car Rentals</span>
        </div>

        
        <div className='headerListItem'>
        <FontAwesomeIcon icon={faBed} />
        <span>Attractions</span>
        </div>
        


        <div className='headerListItem'>
        <FontAwesomeIcon icon={faTaxi} />
        <span>Airport Taxis</span>
        </div>

      </div> 

      {
        type !== "list" &&
        <>
        <h1 className='headerTitle'>A lifetime of discounts? It's Genius.</h1>
      <p className='headerDesc'>Get rewarded for your travels - unlock instant savings of 10% or more with a free JTbooking account</p>
      <button className='headerBtn'>Sign in / Register</button>

      <div className='headerSearch'>
       <div className='headerSearchItem'>
       <FontAwesomeIcon icon={faBed}  className="headerIcon"/>
       <input onChange={(e)=> setDestination(e.target.value)} type="text" placeholder='Where are you going?' className='headerSearchInput'></input>
       </div> 

       <div className='headerSearchItem'>
       <FontAwesomeIcon icon={faCalendarDays}  className="headerIcon"/>
       <span onClick={()=> setOpendate(!openDate)} className='headerSearchText'>{`${format(date[0].startDate,"dd/MM/yyy")} to ${format(date[0].endDate,"dd/MM/yyy")} `}</span>
        {openDate && <DateRange 
        editableDateInputs="true"
        onChange={item => setDate([item.selection])}
        moveRangeOnFirstSelection={false}
        ranges={date}
        minDate={new Date()}
        className="date"
        />}
       </div>

       <div className='headerSearchItem'>
       <FontAwesomeIcon icon={faPerson}  className="headerIcon"/>
       <span onClick={()=> setOpenOptions(!openOptions)} className='headerSearchText'>{`${options.adults} adult . ${options.children} childrens . ${options.room} room`}</span>
       {openOptions && <div className='options'>

        <div className='optionItem'>
        <span className='optionText'>Adult</span>
          <div className='optionCounter'>
          <button disabled={options.adults <=1}  className='optionCounterButton' onClick={()=> handleOption("adults","d")}>-</button>
          <span className='optionCounterNumber'>{options.adults}</span>  
          <button className='optionCounterButton' onClick={()=> handleOption("adults","i")}>+</button> 
          </div> 
        </div>

        <div className='optionItem'>
          <span className='optionText'>Children</span>
          <div className='optionCounter'>
          <button disabled={options.children <=0} className='optionCounterButton' onClick={()=> handleOption("children","d")}>-</button>
          <span className='optionCounterNumber'>{options.children}</span>  
          <button className='optionCounterButton' onClick={()=> handleOption("children","i")}>+</button>
          </div>  
        </div>

        <div className='optionItem'>
          <span className='optionText'>Room</span>
          <div className='optionCounter'>
          <button disabled={options.room <=1}  className='optionCounterButton' onClick={()=> handleOption("room","d")}>-</button>
          <span className='optionCounterNumber'>{options.room}</span>  
          <button className='optionCounterButton' onClick={()=> handleOption("room","i")}>+</button>
          </div>  
        </div>


       </div>}
       </div>

       <div className='headerSearchItem'>
       <button className='headerBtn' onClick={handleSearch}>Search</button>
       </div>

      </div> </>}
    </div> 
</div>
  )
}

export default Header