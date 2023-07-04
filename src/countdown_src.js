import React, { useEffect } from 'react';
import Display from './Display';
import { useState } from 'react';
const App=()=>
{
const endTime =new Date('January 23, 2024 00:00:00').getTime();
const [currentTime,setCurrentTime]=useState(new Date().getTime());
const gap = endTime - currentTime;


const seconds=1000;// in milliseconds
const minute=seconds * 60;
const hours=minute * 60;
const days=hours * 24;

const remainingDays=Math.floor(gap / days);
const remainingHours=Math.floor((gap % days) / hours);// hours kavali kabatti performing modulo
const remainingMinutes=Math.floor((gap % hours) / minute);
const remainingSeconds=Math.floor((gap % minute) / seconds);

useEffect(()=>
{
  setTimeout(()=>setCurrentTime(new Date().getTime()),1000);
 if(gap===0)
  {
    alert("bday finished");
  }
  },[currentTime,gap])
  return (
      <div>
        <center>

   <Display   days={remainingDays}
       hours={remainingHours} minute={remainingMinutes}
       seconds={remainingSeconds}  /> 
       </center>     
      </div>
  );
}
export default App;