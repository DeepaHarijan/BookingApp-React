import { format } from 'date-fns'
import React, { useState } from 'react'
import { DateRange } from 'react-date-range'
import { useLocation } from 'react-router-dom'
import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
import SearchItem from '../../components/searchItem/SearchItem'
import './list.css'

function List() {

  const location = useLocation();
  const [destination, setDestination]=useState(location.state.destination);
  const [date, setDate]=useState(location.state.date);
  const [opendate, setOpenDate]=useState(false);
  const [options, setOptions]=useState(location.state.options);
  return (
    <div><Navbar/>
     <Header type="list"/>

     <div className='listContainer'>
      <div className='listWrapper'>
        <div className='listSearch'>
          <h1 className='lsTitle'>Search</h1>
          <div className='lsItem'>
            <label>Destination</label>
            <input type="text" placeholder={`${destination}`}></input>
          </div>

          <div className='lsItem'>
            <label>Check-in Date</label>
            <span onClick={()=> setOpenDate(!opendate)}>{`${format(date[0].startDate,"dd/MM/yyy")} to ${format(date[0].endDate,"dd/MM/yyy")} `}</span>
            {opendate && <DateRange onChange={(item) => setDate([item.selection])}
            minDate={new Date()} 
            ranges={date}
            />}
          </div>

          <div className='lsItem'>
            <label>Options</label>
            <div className='lsOptions'>
            <div className='lsOptionItem'>
              <span className='lsOptionText'>Min price <small>per night</small></span>
              <input type="number" className='lsOptionInput'></input>
            </div>

            <div className='lsOptionItem'>
              <span className='lsOptionText'>Max price <small>per night</small></span>
              <input type="number" className='lsOptionInput'></input>
            </div>

            <div className='lsOptionItem'>
              <span className='lsOptionText'>Adult </span>
              <input type="number" min={1} className='lsOptionInput' placeholder={options.adults}></input>
            </div>

            <div className='lsOptionItem'>
              <span className='lsOptionText'>Children </span>
              <input type="number" min={0}  className='lsOptionInput' placeholder={options.children}></input>
            </div>

            <div className='lsOptionItem'>
              <span className='lsOptionText'>Room </span>
              <input type="number" min={1}  className='lsOptionInput' placeholder={options.room}></input>
            </div>
            </div> 
          </div>
          <button className='btnsearch'>Search</button>
        </div>

        <div className='listResult'>
          <SearchItem/>
          <SearchItem/>
          <SearchItem/>
          <SearchItem/>
          <SearchItem/>
          <SearchItem/>
        </div>
      </div>
     </div>
     </div>
  )
}

export default List