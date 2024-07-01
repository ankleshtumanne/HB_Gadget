import React from 'react'

const navbar = () => {
    const initial={
        border:"blue",
        backgroundColor:"blue",
        color:"white",
        borderRadius:"10px"
      }
      const initial2={
        border:"blue",
        backgroundColor:"brown",
        color:"white",
        borderRadius:"10px"
      }
      const initial3={
        border:"blue",
        backgroundColor:"green",
        color:"white",
        borderRadius:"10px"
      }
      const initial4={
        border:"blue",
        backgroundColor:"red",
        color:"white",
        borderRadius:"10px"
      }
      const initial5={
        border:"orange",
        backgroundColor:"blue",
        color:"white",
        borderRadius:"10px"
      }
      const initial6={
        border:"",
        backgroundColor:"aqua",
        color:"white",
        borderRadius:"10px",
        
      }
      const initial7={
        border:"blue",
        backgroundColor:"gray",
        color:"white",
        borderRadius:"10px"
      }
    
  return (
    
      <>
      <nav className='main'>
        <div style={initial}>
          3176 All
        </div>

        <div style={initial2}>
          3177  Running
        </div>
        <div style={initial3}>
          3178 Stopped
        </div>
        <div style={initial4}>
          3179 idle
        </div>
        <div style={initial5}>
          3180  unreacharge
        </div>
        <div style={initial6}>
          3180  New
        </div>
        <div style={initial7}>
          3180  innactive
        </div>
      </nav>
      </>
    
  )
}

export default navbar
