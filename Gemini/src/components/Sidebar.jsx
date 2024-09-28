import React, { useContext } from 'react'
import './Sidebar.css'
import { assets } from '../assets/assets';
import { useState } from 'react';
import { Context } from '../context/context';

function Sidebar(){

  const [extended,setExtended] = useState(false);
  const {onSent,prevprompt,setRecentprompt,newChat} = useContext(Context)

  const loadPrompt = async (prompt) => {
    setRecentprompt(prompt)
    await onSent(prompt)
  }
  


    return(
    <div className={`sidebar ${extended ? 'expanded' : ''}`}>
    <div className="top">
     <img onClick={()=> setExtended(prev=>!prev)}className='menu' src={assets.menu_icon}/>
     <div onClick={()=> newChat()} className="new-chat">
        <img src={assets.plus_icon} alt="" className='nc'/>
        {extended?<p>New Chat</p>:null}
     </div>
{ extended?
    <div className='recent'>
        <p className='recent-title'>Recent</p>
        {prevprompt.map((item,index)=> {
        return(
      <div onClick={() => loadPrompt(item)} className="recent-entry" key={index}>
          <img src={assets.message_icon} alt=""/>
          <p>{item.slice(0,18)}...</p>
      </div>
          )
        })}
     </div>
     :null}
    </div>
    <div className="bottom">
      <div className="bottom-item recent-entry"style={{ width: extended ? 'auto' : '50px' }}>
        <img src={assets.question_icon} alt=""  />
        {extended?<p>Help</p>:null}
      </div>
      <div className="bottom-item recent-entry" style={{ width: extended ? 'auto' : '50px' }}>
        <img src={assets.history_icon} alt="" />
       {extended? <p>Activity</p>:null}
      </div>
      <div className="bottom-item recent-entry" style={{ width: extended ? 'auto' : '50px' }}>
        <img src={assets.setting_icon} alt=""  />
        {extended?<p>Settings</p>:null}
      </div>
    </div>
    </div>
    );
}

export default Sidebar