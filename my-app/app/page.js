"use client"

// components/Calendar.js
import React from 'react';

const CurrentDate = () => {
  const currentDate = new Date().toDateString();

  return (<>
    <p style={{display:'flex',alignItems:'center',justifyContent:'center',margin:'100px',fontSize: '5em',fontFamily:'Arvo'}}>Date App</p>
    <div style={{width:'100%',height:'10vh', textAlign: 'center', display:'flex',justifyContent:'center',alignItems:'center',}}>
      
      <p style={{ fontSize: '5em', margin: 'auto',color:'green',boxShadow : '12px 12px 15px 12px rgba(0, 0, 0, 0.2)',borderRadius:"10px",fontFamily:'Arvo'}}>{currentDate}</p>
    </div>
    </>
  );
};

export default CurrentDate;
