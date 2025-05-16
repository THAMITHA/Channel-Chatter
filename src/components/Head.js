import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';
import { YOUTUBE_SEARCH_API } from '../utils/constants';

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggesion, setShowSuggesion] = useState(false);
  
  useEffect(()=>{
    //API call
    //make an api call after every key press 
    //but if the difference between 2 API calls is <200ms
    //decline the API call
    const timer = setTimeout(()=>getSearchSuggesions(), 2000)
    //once the component Re-renders
    return ()=>{
      clearTimeout(timer);
    }
  }, [searchQuery])

  /**
   * key - i
   * - render the component
   * - useEffect();
   * - start timer => make api call after 200 ms
   * 
   * key - ip
   * - destory the component
   * - useEffect();
   * - start timer => make api call after 200 ms
   * 
   * setTimeout(200)  after 200ms is passed then it automatically makes an api call.
   * 
   */

  const getSearchSuggesions = async () => {
    console.log('API Call - '+ searchQuery);
    const data = await fetch(YOUTUBE_SEARCH_API+ searchQuery);
    const json = await data.json();
    // console.log(json[1])
    setSuggestions(json[1]);
  }
  const dispatch = useDispatch();
  const toggleMenuHandler = ()=>{
    dispatch(toggleMenu())
  }
  return (
    <div className='grid grid-flow-col p-5 m-2 shadow-lg'>
      <div className='flex col-span-1'>
        <img onClick={()=>toggleMenuHandler()} className="h-8 cursor-pointer" alt="menu" src="https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/What%20is%20a%20Hamburger%20Button.png?width=450&name=What%20is%20a%20Hamburger%20Button.png"/>
        <a href="/">
          <img className="h-8" alt="youtube-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1200px-YouTube_Logo_2017.svg.png"/>
        </a>
      </div>
    <div className='col-span-10 px-10'>
      <div>
        <input 
          className="px-5 w-1/2 border border-gray-400 p-2 rounded-l-full" 
          type="text"
          value= {searchQuery}
          onChange= {(e)=>setSearchQuery(e.target.value)} 
        />
        <button className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100">
          🔍
        </button>
      </div>
      <div className="fixed bg-white py-2 px-5 w-[31rem] shadow-lg rounded-lg border border-gray-100">
        <ul>
          {suggestions.map(s => <li key={s} className='px-3 py-2 shadow-sm hover:bg-gray-100'>🔍 {s}</li>)}  
        </ul>  
      </div> 
    </div>
    <div className="col-span-1">
      <img className="h-12"
      alt="user" 
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoB4l1vBNqbEpwil6Jsrpr6gE8wLY5_23geyqPK0QyhVo9x24z31MDvpC1WvDF3Gp8h6o&usqp=CAU"/>
    </div>
    </div>
    
  )
}

export default Head