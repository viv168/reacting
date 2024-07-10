import React, { useState } from 'react';
import Card from './components/Card';
import Navbar from './components/Navbar';
function App() {

  const data = [
    {image: "https://images.unsplash.com/photo-1686170287433-c95faf6d3608?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D", name:"Challenger", artist:"Vivek", added: false},
    {image: "https://images.unsplash.com/photo-1457269449834-928af64c684d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2ludGVyfGVufDB8fDB8fHww", name:"Believer", artist:"Teju", added: false},
    {image: "https://images.unsplash.com/photo-1606614520047-8ad516d9d84b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c29uZ3N8ZW58MHx8MHx8fDA%3D", name:"No Excuse", artist:"AP Dhillon", added: false},
    {image: "https://images.unsplash.com/photo-1504387103978-e4ee71416c38?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHNvbmdzfGVufDB8fDB8fHww", name:"Unstoppable", artist:"Akon", added: false},
    
  ]

  const [songData,  setSongData] = useState(data)

  const handleClick = (index) => {
    setSongData((prev)=>{
      return prev.map((item, itemindex)=>{
        if(itemindex === index)
          return {...item, added:!item.added}
        
        return item

      })

    })
  }





  return (
    <>
    <div className = 'w-full h-screen bg-zinc-300'>

      <Navbar data = {songData}/>
      <div className='px-20 flex gap-10 mt-10 flex-wrap'>
        {songData.map((obj, index) =>(
          <Card data = {obj} handleClick ={handleClick} index={index} key= {index} />
        ))}
      
    </div>
      
    </div>

    </>
  );
}

export default App;
